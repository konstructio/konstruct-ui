import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { createRef } from 'react';

import { SheetStep } from './components';
import { Sheet } from './Sheet';
import { Props } from './Sheet.types';
import { resolveSheetGesture, shouldDismissSheet } from './utils';

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

    const sheet = screen.getByRole('dialog', { name: 'Region' });
    const header = sheet.querySelector(
      '[data-sheet-grip]:not([data-sheet-handle])',
    ) as HTMLElement;

    expect(
      within(header).getByText('Region', { selector: 'span' }),
    ).toHaveClass('normal-case');
    expect(header).toHaveClass('px-2');
    expect(header).not.toHaveClass('px-6');
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

  it('should hand its element to the ref AnimatePresence pops a leaving step with', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <SheetStep
        ref={ref}
        step={0}
        direction={1}
        animated={false}
        canSwipeBack={false}
        isArmed={() => false}
        onBackStart={vi.fn()}
        onBackMove={vi.fn()}
        onBackEnd={() => 'stay'}
        onMount={vi.fn()}
        commitSignal={0}
        onBackCommit={vi.fn()}
        onBackCancel={vi.fn()}
      >
        <button type="button">London</button>
      </SheetStep>,
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toContainElement(
      screen.getByRole('button', { name: 'London' }),
    );
  });

  describe('reveal', () => {
    const renderStep = (step: number, rows: number) => (
      <Sheet isOpen title="Account" step={step} onClose={vi.fn()}>
        {Array.from({ length: rows }, (_, index) => (
          <button key={index} type="button">
            Row {step}-{index}
          </button>
        ))}
      </Sheet>
    );

    const mockHeights = () => {
      return vi
        .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
        .mockImplementation(function (this: HTMLElement) {
          const height = this.querySelectorAll('button').length * 40;

          return {
            height,
            width: 390,
            x: 0,
            y: 0,
            top: 0,
            left: 0,
            right: 390,
            bottom: height,
            toJSON: () => ({}),
          } as DOMRect;
        });
    };

    const body = () => {
      return screen
        .getByRole('dialog')
        .querySelector('[data-sheet-grip]:not([data-sheet-handle])')
        ?.nextElementSibling as HTMLElement;
    };

    it('should fade the bottom edge when the next step is taller', async () => {
      const spy = mockHeights();
      const { rerender } = render(renderStep(0, 2));

      await screen.findByRole('button', { name: 'Row 0-0' });
      rerender(renderStep(1, 6));

      await waitFor(() => {
        expect(body().className).toContain('mask-image');
      });
      spy.mockRestore();
    });

    it('should leave the bottom edge alone when the next step is shorter', async () => {
      const spy = mockHeights();
      const { rerender } = render(renderStep(0, 6));

      await screen.findByRole('button', { name: 'Row 0-0' });
      rerender(renderStep(1, 2));
      await screen.findByRole('button', { name: 'Row 1-0' });

      expect(body().className).not.toContain('mask-image');
      spy.mockRestore();
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

  describe('swipe to expand', () => {
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
      const result = setup({ expandable: true, ...overrides });
      const sheet = await screen.findByRole('dialog', { name: 'Region' });
      const handle = sheet.querySelector('[data-sheet-handle]') as Element;

      Object.defineProperty(sheet, 'offsetHeight', {
        value: PANEL_HEIGHT,
        configurable: true,
      });

      return { ...result, sheet, handle };
    };

    it('should grow to the viewport when dragged away from its edge', async () => {
      const { sheet, handle, onClose } = await openSheet();

      await drag(handle, [300, 250, 150, 50], 20);

      await waitFor(() => {
        expect(sheet).toHaveAttribute('data-expanded', 'true');
      });
      expect(sheet).toHaveClass('max-h-dvh');
      expect(sheet).not.toHaveClass('max-h-[calc(100dvh-4rem)]');
      expect(onClose).not.toHaveBeenCalled();
    });

    it('should shrink back before it closes', async () => {
      const { sheet, handle, onClose } = await openSheet();

      await drag(handle, [300, 250, 150, 50], 20);
      await waitFor(() => {
        expect(sheet).toHaveAttribute('data-expanded', 'true');
      });
      Object.defineProperty(sheet, 'offsetHeight', {
        value: PANEL_HEIGHT * 2,
        configurable: true,
      });

      await drag(handle, [10, 100, 200, 300], 20);

      await waitFor(() => {
        expect(sheet).not.toHaveAttribute('data-expanded');
      });
      expect(sheet).toHaveClass('max-h-[calc(100dvh-4rem)]');
      expect(onClose).not.toHaveBeenCalled();
      Object.defineProperty(sheet, 'offsetHeight', {
        value: PANEL_HEIGHT,
        configurable: true,
      });

      await drag(handle, [10, 50, 90, 130], 20);

      await waitFor(() => {
        expect(onClose).toHaveBeenCalledTimes(1);
      });
    });

    it('should close in one go when dragged past its opening height', async () => {
      const { sheet, handle, onClose } = await openSheet();

      await drag(handle, [300, 250, 150, 50], 20);
      await waitFor(() => {
        expect(sheet).toHaveAttribute('data-expanded', 'true');
      });
      Object.defineProperty(sheet, 'offsetHeight', {
        value: PANEL_HEIGHT * 2,
        configurable: true,
      });

      await drag(handle, [10, 200, 400, 600], 20);

      await waitFor(() => {
        expect(onClose).toHaveBeenCalledTimes(1);
      });
    });

    it('should grow when the list itself is dragged up before it is expanded', async () => {
      const { sheet, onClose } = await openSheet();
      const item = screen.getByRole('button', { name: 'London' });

      await drag(item, [300, 250, 150, 50], 20);

      await waitFor(() => {
        expect(sheet).toHaveAttribute('data-expanded', 'true');
      });
      expect(onClose).not.toHaveBeenCalled();
    });

    it('should leave the list alone once expanded', async () => {
      const { sheet, handle } = await openSheet();

      await drag(handle, [300, 250, 150, 50], 20);
      await waitFor(() => {
        expect(sheet).toHaveAttribute('data-expanded', 'true');
      });
      Object.defineProperty(sheet, 'offsetHeight', {
        value: PANEL_HEIGHT * 2,
        configurable: true,
      });

      await drag(
        screen.getByRole('button', { name: 'London' }),
        [10, 100, 200, 300],
        20,
      );

      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(sheet).toHaveAttribute('data-expanded', 'true');
    });

    it('should highlight the grab handle only while the sheet is dragged', async () => {
      const { handle } = await openSheet();
      const pointer = {
        pointerId: 1,
        isPrimary: true,
        pointerType: 'touch',
        clientX: 10,
        pageX: 10,
      };

      expect(handle).not.toHaveAttribute('data-active');

      fireEvent.pointerDown(handle, {
        ...pointer,
        button: 0,
        clientY: 300,
        pageY: 300,
      });
      fireEvent.pointerMove(window, { ...pointer, clientY: 280, pageY: 280 });
      await new Promise((resolve) => setTimeout(resolve, 20));
      fireEvent.pointerMove(window, { ...pointer, clientY: 260, pageY: 260 });

      await waitFor(() => {
        expect(handle).toHaveAttribute('data-active', 'true');
      });

      fireEvent.pointerUp(window, { ...pointer, clientY: 260, pageY: 260 });

      await waitFor(() => {
        expect(handle).not.toHaveAttribute('data-active');
      });
    });

    it('should stay put after a short, slow drag away from the edge', async () => {
      const { sheet, handle } = await openSheet();

      await drag(handle, [300, 295, 290, 285, 280, 275, 270], 60);

      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(sheet).not.toHaveAttribute('data-expanded');
    });

    it('should ignore the gesture unless the sheet is expandable', async () => {
      const { sheet, handle } = await openSheet({ expandable: false });

      await drag(handle, [300, 250, 150, 50], 20);

      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(sheet).not.toHaveAttribute('data-expanded');
      expect(sheet).toHaveClass('max-h-[calc(100dvh-4rem)]');
    });
  });

  describe('swipe back', () => {
    const PANEL_WIDTH = 390;

    const swipe = async (
      element: Element,
      points: number[],
      stepMs: number,
    ) => {
      const pointer = {
        pointerId: 1,
        isPrimary: true,
        pointerType: 'touch',
        clientY: 200,
        pageY: 200,
      };
      const [start, ...rest] = points;

      fireEvent.pointerDown(element, {
        ...pointer,
        button: 0,
        clientX: start,
        pageX: start,
      });

      for (const x of rest) {
        fireEvent.pointerMove(window, { ...pointer, clientX: x, pageX: x });
        await new Promise((resolve) => setTimeout(resolve, stepMs));
      }

      const end = rest.at(-1) ?? start;

      fireEvent.pointerUp(window, { ...pointer, clientX: end, pageX: end });
    };

    const openStep = async (step: number) => {
      const onBack = vi.fn();
      const { onClose } = setup({ step, onBack });
      const sheet = await screen.findByRole('dialog', { name: 'Region' });

      Object.defineProperty(sheet, 'offsetWidth', { value: PANEL_WIDTH });

      return { onBack, onClose, sheet };
    };

    it('should go back when the content is swiped to the right on a later step', async () => {
      const { onBack, onClose } = await openStep(1);

      await swipe(
        screen.getByRole('button', { name: 'London' }),
        [10, 60, 120, 180],
        20,
      );

      await waitFor(() => {
        expect(onBack).toHaveBeenCalledTimes(1);
      });
      expect(onClose).not.toHaveBeenCalled();
    });

    it('should bring the previous step and its title in while the swipe is held', async () => {
      const onBack = vi.fn();
      const onClose = vi.fn();
      const { rerender } = render(
        <Sheet
          isOpen
          title="Account"
          step={0}
          onBack={onBack}
          onClose={onClose}
        >
          <button type="button">Switch account</button>
        </Sheet>,
      );

      await screen.findByRole('button', { name: 'Switch account' });

      rerender(
        <Sheet
          isOpen
          title="Switch account"
          step={1}
          onBack={onBack}
          onClose={onClose}
        >
          <button type="button">jane@civo.com</button>
        </Sheet>,
      );

      const content = await screen.findByRole('button', {
        name: 'jane@civo.com',
      });
      const sheet = screen.getByRole('dialog', { name: 'Switch account' });

      Object.defineProperty(sheet, 'offsetWidth', { value: PANEL_WIDTH });

      const pointer = {
        pointerId: 1,
        isPrimary: true,
        pointerType: 'touch',
        clientY: 200,
        pageY: 200,
      };

      fireEvent.pointerDown(content, {
        ...pointer,
        button: 0,
        clientX: 10,
        pageX: 10,
      });

      for (const x of [20, 30, 40, 50, 60]) {
        fireEvent.pointerMove(window, { ...pointer, clientX: x, pageX: x });
        await new Promise((resolve) => setTimeout(resolve, 60));
      }

      await waitFor(() => {
        expect(sheet.querySelector('[data-sheet-preview]')).toHaveTextContent(
          'Switch account',
        );
      });
      expect(
        sheet.querySelector('[data-sheet-preview-title]'),
      ).toHaveTextContent('Account');

      await new Promise((resolve) => setTimeout(resolve, 120));
      fireEvent.pointerUp(window, { ...pointer, clientX: 60, pageX: 60 });

      await waitFor(
        () => {
          expect(sheet.querySelector('[data-sheet-preview]')).toBeNull();
        },
        { timeout: 3000 },
      );
      expect(onBack).not.toHaveBeenCalled();
    });

    it('should show the header again on a later step after a completed swipe', async () => {
      const onClose = vi.fn();
      let step = 1;
      const onBack = vi.fn(() => {
        step = 0;
      });
      const view = () => (
        <Sheet
          isOpen
          title={step === 0 ? 'Account' : 'Switch account'}
          step={step}
          onBack={onBack}
          onClose={onClose}
        >
          <button type="button">
            {step === 0 ? 'Switch account' : 'jane@civo.com'}
          </button>
        </Sheet>
      );
      const { rerender } = render(view());
      const content = await screen.findByRole('button', {
        name: 'jane@civo.com',
      });
      const sheet = screen.getByRole('dialog', { name: 'Switch account' });

      Object.defineProperty(sheet, 'offsetWidth', { value: PANEL_WIDTH });

      await swipe(content, [10, 60, 120, 180], 20);
      await waitFor(() => {
        expect(onBack).toHaveBeenCalledTimes(1);
      });
      rerender(view());
      await screen.findByRole('dialog', { name: 'Account' });

      step = 1;
      rerender(view());

      const back = await waitFor(() => {
        const control = screen
          .getByRole('dialog')
          .querySelector('[data-sheet-back]');

        expect(control).not.toBeNull();

        return control as HTMLElement;
      });

      for (const part of back.querySelectorAll('span')) {
        expect(Number(part.style.opacity || 1)).toBe(1);
      }
    });

    it('should run the same choreography from the header back control', async () => {
      const onClose = vi.fn();
      const onBack = vi.fn();
      const { rerender } = render(
        <Sheet
          isOpen
          title="Account"
          step={0}
          onBack={onBack}
          onClose={onClose}
        >
          <button type="button">Switch account</button>
        </Sheet>,
      );

      await screen.findByRole('button', { name: 'Switch account' });

      rerender(
        <Sheet
          isOpen
          title="Switch account"
          step={1}
          onBack={onBack}
          onClose={onClose}
        >
          <button type="button">jane@civo.com</button>
        </Sheet>,
      );

      const sheet = await screen.findByRole('dialog', {
        name: 'Switch account',
      });

      Object.defineProperty(sheet, 'offsetWidth', { value: PANEL_WIDTH });

      fireEvent.click(sheet.querySelector('[data-sheet-back]') as Element);

      await waitFor(() => {
        expect(sheet.querySelector('[data-sheet-preview]')).toHaveTextContent(
          'Switch account',
        );
      });
      expect(
        sheet.querySelector('[data-sheet-preview-title]'),
      ).toHaveTextContent('Account');
      expect(onBack).not.toHaveBeenCalled();

      await waitFor(
        () => {
          expect(onBack).toHaveBeenCalledTimes(1);
        },
        { timeout: 3000 },
      );
    });

    it('should stay after a short swipe', async () => {
      const { onBack } = await openStep(1);

      await swipe(
        screen.getByRole('button', { name: 'London' }),
        [10, 20, 30, 40],
        60,
      );

      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(onBack).not.toHaveBeenCalled();
    });

    it('should not go back from the first step', async () => {
      const { onBack } = await openStep(0);

      await swipe(
        screen.getByRole('button', { name: 'London' }),
        [10, 60, 120, 180],
        20,
      );

      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(onBack).not.toHaveBeenCalled();
    });
  });

  it('should make the header the back control on a later step', async () => {
    const onBack = vi.fn();
    const { user } = setup({ step: 1, onBack, leading: <span>ignored</span> });

    const sheet = await screen.findByRole('dialog', { name: 'Region' });

    expect(screen.queryByText('ignored')).not.toBeInTheDocument();

    const back = within(sheet).getByRole('button', { name: 'Region' });

    // The control must not make the header taller than a plain title row.
    expect(back).toHaveClass('h-9', '-my-1');

    await user.click(back);

    await waitFor(() => {
      expect(onBack).toHaveBeenCalledTimes(1);
    });
  });

  describe('resolveSheetGesture', () => {
    const base = {
      panelHeight: 400,
      position: 'bottom' as const,
      expandable: true,
      isExpanded: false,
    };

    it.each([
      [
        'expands when dragged far from the edge',
        { offset: -101, velocity: 0 },
        'expand',
      ],
      [
        'expands on a quick flick away',
        { offset: -20, velocity: -600 },
        'expand',
      ],
      [
        'rests after a short drag away',
        { offset: -50, velocity: -100 },
        'rest',
      ],
      [
        'dismisses when dragged to the edge',
        { offset: 150, velocity: 0 },
        'dismiss',
      ],
      [
        'collapses first when expanded',
        { offset: 150, velocity: 0, isExpanded: true },
        'collapse',
      ],
      [
        'never expands twice',
        { offset: -200, velocity: 0, isExpanded: true },
        'rest',
      ],
      [
        'closes in one go when dragged past its opening height',
        {
          offset: 600,
          velocity: 0,
          isExpanded: true,
          panelHeight: 800,
          restHeight: 300,
        },
        'dismiss',
      ],
      [
        'only collapses when the drag stops short of its opening height',
        {
          offset: 450,
          velocity: 0,
          isExpanded: true,
          panelHeight: 800,
          restHeight: 300,
        },
        'collapse',
      ],
      [
        'never expands a plain sheet',
        { offset: -200, velocity: -900, expandable: false },
        'rest',
      ],
    ])('%s', (_label, gesture, expected) => {
      expect(resolveSheetGesture({ ...base, ...gesture })).toBe(expected);
    });

    it('should mirror the direction for a top sheet', () => {
      expect(
        resolveSheetGesture({
          ...base,
          position: 'top',
          offset: 150,
          velocity: 0,
        }),
      ).toBe('expand');
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
