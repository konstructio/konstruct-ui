import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Sheet } from './Sheet';
import { Props } from './Sheet.types';

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

  it("shouldn't have accessibility violations", async () => {
    setup();

    await screen.findByRole('dialog', { name: 'Region' });

    const results = await axe(document.body);

    expect(results).toHaveNoViolations();
  });
});
