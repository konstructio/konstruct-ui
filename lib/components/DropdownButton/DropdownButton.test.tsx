import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { DropdownButton } from './DropdownButton';

describe('DropdownButton', () => {
  const setup = () => {
    const onPdf = vi.fn();
    const onCsv = vi.fn();

    const { container: component } = render(
      <DropdownButton
        label="Download as"
        options={[
          { label: 'PDF', onClick: onPdf },
          { label: 'CSV', onClick: onCsv },
        ]}
      />,
    );

    const user = userEvent.setup();
    const getTrigger = () => {
      return screen.getByRole('button', { name: /download as/i });
    };

    return { component, user, onPdf, onCsv, getTrigger };
  };

  it('should render the trigger with menu semantics', () => {
    const { getTrigger } = setup();

    expect(getTrigger()).toHaveAttribute('aria-haspopup', 'menu');
    expect(getTrigger()).toHaveAttribute('aria-expanded', 'false');
  });

  it('should open the menu and fire the option callback once', async () => {
    const { user, getTrigger, onPdf } = setup();

    await user.click(getTrigger());
    await user.click(await screen.findByRole('menuitem', { name: /pdf/i }));

    expect(onPdf).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('should support keyboard navigation', async () => {
    const { user, getTrigger, onCsv } = setup();

    getTrigger().focus();
    await user.keyboard('{Enter}');
    await screen.findByRole('menu');
    await user.keyboard('{ArrowDown}{Enter}');

    expect(onCsv).toHaveBeenCalledTimes(1);
  });

  it('should close the menu on Escape', async () => {
    const { user, getTrigger } = setup();

    await user.click(getTrigger());
    await screen.findByRole('menu');
    await user.keyboard('{Escape}');

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it("shouldn't have accessibility violations with the menu open", async () => {
    const { component, user, getTrigger } = setup();

    await user.click(getTrigger());
    await screen.findByRole('menu');

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });
  describe('disabled and loading', () => {
    it('should not open the menu while disabled', async () => {
      const user = userEvent.setup();

      render(
        <DropdownButton
          label="Download as"
          disabled
          options={[{ label: 'PDF', onClick: vi.fn() }]}
        />,
      );

      const trigger = screen.getByRole('button', { name: /download as/i });

      expect(trigger).toBeDisabled();

      await user.click(trigger);

      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('should disable the trigger and announce it as busy while loading', () => {
      render(
        <DropdownButton
          label="Download as"
          isLoading
          options={[{ label: 'PDF', onClick: vi.fn() }]}
        />,
      );

      const trigger = screen.getByRole('button', { name: /download as/i });

      expect(trigger).toBeDisabled();
      expect(trigger).toHaveAttribute('aria-busy', 'true');
    });

    it('should forward the button variant to the trigger', () => {
      render(
        <DropdownButton
          label="Download as"
          variant="link"
          options={[{ label: 'PDF', onClick: vi.fn() }]}
        />,
      );

      expect(screen.getByRole('button', { name: /download as/i })).toHaveClass(
        'bg-transparent',
      );
    });
  });
});
