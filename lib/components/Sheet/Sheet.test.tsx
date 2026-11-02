import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Sheet } from './Sheet';
import { Props } from './Sheet.types';
import { shouldDismissSheet } from './utils';

describe('Sheet', () => {
  const setup = (overrides: Partial<Props> = {}) => {
    const onClose = vi.fn();
    const user = userEvent.setup();

    render(
      <Sheet isOpen title="Region" onClose={onClose} {...overrides}>
        <button type="button">London</button>
      </Sheet>,
    );

    return { user, onClose };
  };

  it('should render a dialog named after its title, docked to the bottom', async () => {
    setup();

    const sheet = await screen.findByRole('dialog', { name: 'Region' });

    expect(sheet).toHaveClass('bottom-0');
    expect(sheet).toHaveAttribute('data-position', 'bottom');
    expect(screen.getByRole('button', { name: 'London' })).toBeInTheDocument();
  });

  it('should dock to the top when asked to', async () => {
    setup({ position: 'top' });

    const sheet = await screen.findByRole('dialog', { name: 'Region' });

    expect(sheet).toHaveClass('top-0');
    expect(sheet).not.toHaveClass('bottom-0');
  });

  it('should keep the title for assistive technology when hidden', async () => {
    setup({ hideTitle: true });

    const sheet = await screen.findByRole('dialog', { name: 'Region' });

    expect(sheet.querySelector('.sr-only')).toHaveTextContent('Region');
  });

  it('should render the leading slot before the title', async () => {
    setup({ leading: <button type="button">Back</button> });

    await screen.findByRole('dialog', { name: 'Region' });

    const back = screen.getByRole('button', { name: 'Back' });

    expect(back.nextElementSibling).toHaveTextContent('Region');
  });

  it('should merge the header and title classes', async () => {
    setup({ headerClassName: 'px-2', titleClassName: 'normal-case' });

    await screen.findByRole('dialog', { name: 'Region' });

    const title = screen.getByRole('heading', { name: 'Region' });

    expect(title).toHaveClass('normal-case');
    expect(title.parentElement).toHaveClass('px-2');
    expect(title.parentElement).not.toHaveClass('px-6');
  });

  it('should focus the panel on open rather than its first option', async () => {
    setup();

    const sheet = await screen.findByRole('dialog', { name: 'Region' });

    await waitFor(() => {
      expect(sheet).toHaveFocus();
    });
    expect(screen.getByRole('button', { name: 'London' })).not.toHaveFocus();
  });

  it('should ask to close on Escape', async () => {
    const { user, onClose } = setup();

    await screen.findByRole('dialog', { name: 'Region' });
    await user.keyboard('{Escape}');

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should slide out before unmounting', async () => {
    const onClose = vi.fn();
    const { rerender } = render(
      <Sheet isOpen title="Region" onClose={onClose}>
        <button type="button">London</button>
      </Sheet>,
    );

    await screen.findByRole('dialog', { name: 'Region' });

    rerender(
      <Sheet isOpen={false} title="Region" onClose={onClose}>
        <button type="button">London</button>
      </Sheet>,
    );

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('should swap the content and flag the step when the step changes', async () => {
    const onClose = vi.fn();
    const { rerender } = render(
      <Sheet isOpen title="Account" step={0} onClose={onClose}>
        <button type="button">Switch account</button>
      </Sheet>,
    );

    await screen.findByRole('button', { name: 'Switch account' });

    rerender(
      <Sheet isOpen title="Switch account" step={1} onClose={onClose}>
        <button type="button">jane@civo.com</button>
      </Sheet>,
    );

    expect(
      await screen.findByRole('button', { name: 'jane@civo.com' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('dialog', { name: 'Switch account' }),
    ).toHaveAttribute('data-step', '1');
    await waitFor(() => {
      expect(
        screen.queryByRole('button', { name: 'Switch account' }),
      ).not.toBeInTheDocument();
    });
  });

  it('should render a decorative grab handle at the inner edge', async () => {
    setup();

    const sheet = await screen.findByRole('dialog', { name: 'Region' });
    const handle = sheet.querySelector('[data-sheet-handle]');

    expect(handle).toHaveAttribute('aria-hidden', 'true');
    expect(handle).toHaveClass('touch-none');
    expect(sheet.firstElementChild).toBe(handle);
  });

  it('should put the grab handle at the bottom of a top sheet', async () => {
    setup({ position: 'top' });

    const sheet = await screen.findByRole('dialog', { name: 'Region' });

    expect(sheet.lastElementChild).toHaveAttribute('data-sheet-handle');
  });

  describe('swipe to close', () => {
    const PANEL_HEIGHT = 400;

    const drag = async (element: Element, points: number[], stepMs: number) => {
      const pointer = {
        pointerId: 1,
        isPrimary: true,
        pointerType: 'touch',
        clientX: 10,
        pageX: 10,
      };
      const [start, ...rest] = points;

      fireEvent.pointerDown(element, {
        ...pointer,
        button: 0,
        clientY: start,
        pageY: start,
      });

      for (const y of rest) {
        fireEvent.pointerMove(window, { ...pointer, clientY: y, pageY: y });
        await new Promise((resolve) => setTimeout(resolve, stepMs));
      }

      const end = rest.at(-1) ?? start;

      fireEvent.pointerUp(window, { ...pointer, clientY: end, pageY: end });
    };

    const openSheet = async (overrides: Partial<Props> = {}) => {
      const result = setup(overrides);
      const sheet = await screen.findByRole('dialog', { name: 'Region' });

      Object.defineProperty(sheet, 'offsetHeight', { value: PANEL_HEIGHT });

      return { ...result, sheet };
    };

    it('should close when the header is dragged past a quarter of the panel', async () => {
      const { onClose } = await openSheet();
      const header = screen.getByRole('heading', { name: 'Region' });

      await drag(header.parentElement as Element, [10, 50, 90, 130], 20);

      await waitFor(() => {
        expect(onClose).toHaveBeenCalledTimes(1);
      });
    });

    it('should not close after a short, slow drag', async () => {
      const { onClose, sheet } = await openSheet();
      const handle = sheet.querySelector('[data-sheet-handle]') as Element;

      await drag(handle, [10, 15, 20, 25, 30, 35, 40], 60);

      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(onClose).not.toHaveBeenCalled();
    });

    it('should not close when a bottom sheet is dragged up', async () => {
      const { onClose, sheet } = await openSheet();
      const handle = sheet.querySelector('[data-sheet-handle]') as Element;

      await drag(handle, [300, 250, 150, 50], 20);

      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(onClose).not.toHaveBeenCalled();
    });

    it('should close a top sheet dragged up', async () => {
      const { onClose, sheet } = await openSheet({ position: 'top' });
      const handle = sheet.querySelector('[data-sheet-handle]') as Element;

      await drag(handle, [300, 250, 200, 150], 20);

      await waitFor(() => {
        expect(onClose).toHaveBeenCalledTimes(1);
      });
    });

    it('should not start a drag from the scrolling body', async () => {
      const { onClose } = await openSheet();

      await drag(
        screen.getByRole('button', { name: 'London' }),
        [10, 100, 200, 300],
        20,
      );

      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('shouldDismissSheet', () => {
    const base = { panelHeight: 400, position: 'bottom' as const };

    it.each([
      ['past a quarter of the height', { offset: 101, velocity: 0 }, true],
      ['at a quarter of the height', { offset: 100, velocity: 0 }, false],
      ['on a quick flick', { offset: 20, velocity: 600 }, true],
      ['on a slow short drag', { offset: 20, velocity: 300 }, false],
      ['when dragged away from the edge', { offset: -150, velocity: 0 }, false],
      ['when flicked back towards rest', { offset: 150, velocity: -800 }, true],
    ])('bottom sheet %s', (_label, gesture, expected) => {
      expect(shouldDismissSheet({ ...base, ...gesture })).toBe(expected);
    });

    it('should mirror the direction for a top sheet', () => {
      expect(
        shouldDismissSheet({
          ...base,
          position: 'top',
          offset: -150,
          velocity: 0,
        }),
      ).toBe(true);
      expect(
        shouldDismissSheet({
          ...base,
          position: 'top',
          offset: 150,
          velocity: 900,
        }),
      ).toBe(false);
    });
  });

  it("shouldn't have accessibility violations", async () => {
    setup();

    await screen.findByRole('dialog', { name: 'Region' });

    const results = await axe(document.body);

    expect(results).toHaveNoViolations();
  });
});
