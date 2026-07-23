import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { FC, useContext } from 'react';

import { Button } from '../Button/Button';

import { Command, CommandGroup, CommandItem } from './Command';
import { CommandInput, CommandList } from './components';
import { CommandContext, CommandProvider } from './contexts';

describe('Command', () => {
  const setup = (onSelectHome = vi.fn(), onSelectSettings = vi.fn()) => {
    const Palette: FC = () => {
      const { isOpen, setOpen } = useContext(CommandContext);

      return (
        <>
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            Open palette
          </Button>
          <Command open={isOpen} onOpenChange={setOpen} title="Commands">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandGroup heading="Navigation">
                <CommandItem onSelect={onSelectHome}>Home</CommandItem>
                <CommandItem onSelect={onSelectSettings}>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </>
      );
    };

    const { container: component } = render(
      <CommandProvider>
        <Palette />
      </CommandProvider>,
    );

    const user = userEvent.setup();
    const getTrigger = () => {
      return screen.getByRole('button', { name: /open palette/i });
    };

    return { component, user, getTrigger, onSelectHome, onSelectSettings };
  };

  it('should open the palette and list the items', async () => {
    const { user, getTrigger } = setup();

    await user.click(getTrigger());

    expect(await screen.findByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Home' })).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Settings' }),
    ).toBeInTheDocument();
  });

  it('should filter items when typing in the search input', async () => {
    const { user, getTrigger } = setup();

    await user.click(getTrigger());
    await user.keyboard('sett');

    expect(
      screen.queryByRole('option', { name: 'Home' }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Settings' }),
    ).toBeInTheDocument();
  });

  it('should fire onSelect when choosing an item with the keyboard', async () => {
    const onSelectHome = vi.fn();
    const { user, getTrigger } = setup(onSelectHome);

    await user.click(getTrigger());
    await screen.findByRole('dialog');
    await user.keyboard('{Enter}');

    expect(onSelectHome).toHaveBeenCalledTimes(1);
  });

  it('should close the palette on Escape', async () => {
    const { user, getTrigger } = setup();

    await user.click(getTrigger());
    await screen.findByRole('dialog');
    await user.keyboard('{Escape}');

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it("shouldn't have accessibility violations", async () => {
    const { user, getTrigger } = setup();

    await user.click(getTrigger());
    await screen.findByRole('dialog');

    const results = await axe(document.body);

    expect(results).toHaveNoViolations();
  });
});
