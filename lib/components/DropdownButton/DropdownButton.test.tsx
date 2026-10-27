import { render, screen, waitFor, within } from '@testing-library/react';
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
  describe('option states', () => {
    const setupStates = () => {
      const onStart = vi.fn();
      const onDelete = vi.fn();
      const user = userEvent.setup();

      render(
        <DropdownButton
          label="Actions"
          options={[
            { label: 'Shutdown', onClick: vi.fn() },
            {
              label: 'Start',
              disabledReason: 'Already running',
              onClick: onStart,
            },
            {
              label: 'Delete',
              destructive: true,
              separator: true,
              onClick: onDelete,
            },
          ]}
        />,
      );

      return { user, onStart, onDelete };
    };

    it('should keep a disabled option listed with its reason and ignore its clicks', async () => {
      const { user, onStart } = setupStates();

      await user.click(screen.getByRole('button', { name: /actions/i }));

      const start = await screen.findByRole('menuitem', { name: /start/i });

      expect(start).toHaveAttribute('aria-disabled', 'true');
      expect(start).toHaveTextContent('Already running');

      await user.click(start);

      expect(onStart).not.toHaveBeenCalled();
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    it('should draw a separator before a grouped option and style a destructive one', async () => {
      const { user } = setupStates();

      await user.click(screen.getByRole('button', { name: /actions/i }));

      const remove = await screen.findByRole('menuitem', { name: /delete/i });

      expect(remove).toHaveClass('text-red-600');
      expect(remove.previousElementSibling).toHaveAttribute(
        'role',
        'separator',
      );
    });
  });

  describe('as an action sheet', () => {
    const matchMedia = window.matchMedia;

    beforeEach(() => {
      window.matchMedia = (query: string) =>
        ({
          matches: true,
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(() => false),
        }) as unknown as MediaQueryList;
    });

    afterEach(() => {
      window.matchMedia = matchMedia;
    });

    const setupSheet = () => {
      const onShutdown = vi.fn();
      const onDelete = vi.fn();
      const user = userEvent.setup();

      const { container } = render(
        <DropdownButton
          label="Actions"
          sheetTitle="web-server-prod"
          options={[
            { label: 'Shutdown', onClick: onShutdown },
            {
              label: 'Start',
              disabledReason: 'Already running',
              onClick: vi.fn(),
            },
            {
              label: 'Delete',
              destructive: true,
              separator: true,
              onClick: onDelete,
            },
          ]}
        />,
      );

      const trigger = screen.getByRole('button', { name: /actions/i });

      return { container, user, trigger, onShutdown, onDelete };
    };

    it('should open a docked dialog with one button per option', async () => {
      const { user, trigger } = setupSheet();

      expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');

      await user.click(trigger);

      const sheet = await screen.findByRole('dialog', {
        name: 'web-server-prod',
      });

      expect(sheet).toHaveClass('bottom-0');
      expect(
        within(sheet).getByRole('button', { name: 'Shutdown' }),
      ).toBeEnabled();
      expect(
        within(sheet).getByRole('button', { name: /start/i }),
      ).toBeDisabled();
      expect(
        within(sheet).getByRole('button', { name: /start/i }),
      ).toHaveTextContent('Already running');
      expect(within(sheet).getByRole('button', { name: 'Delete' })).toHaveClass(
        'text-red-600',
      );
    });

    it('should dock to the top when asked to', async () => {
      const user = userEvent.setup();

      render(
        <DropdownButton
          label="Actions"
          sheetTitle="web-server-prod"
          sheetPosition="top"
          options={[{ label: 'Shutdown', onClick: vi.fn() }]}
        />,
      );

      await user.click(screen.getByRole('button', { name: /actions/i }));

      const sheet = await screen.findByRole('dialog', {
        name: 'web-server-prod',
      });

      expect(sheet).toHaveClass('top-0');
      expect(sheet).not.toHaveClass('bottom-0');
    });

    it('should fire the option and close the sheet', async () => {
      const { user, trigger, onShutdown } = setupSheet();

      await user.click(trigger);
      await user.click(await screen.findByRole('button', { name: 'Shutdown' }));

      expect(onShutdown).toHaveBeenCalledTimes(1);

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });

    it("shouldn't have accessibility violations while open", async () => {
      const { user, trigger } = setupSheet();

      await user.click(trigger);
      await screen.findByRole('dialog');

      const results = await axe(document.body);

      expect(results).toHaveNoViolations();
    });
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
