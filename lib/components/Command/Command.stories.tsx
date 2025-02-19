import type { Meta, StoryObj } from '@storybook/react';
import { useContext, useEffect } from 'react';
import { Database, Moon, Sun } from 'react-feather';

import { ThemeProvider, useTheme } from '@/contexts';

import { Command as CommandComponent } from './Command';
import {
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandSeparator,
} from './components';
import { CommandContext, CommandProvider } from './contexts';

type Story = StoryObj<typeof CommandComponent>;

const meta: Meta<typeof CommandComponent> = {
  title: 'In Review/Command',
  component: CommandComponent,
};

export const Command: Story = {
  render: () => {
    const Wrapper = () => {
      const { theme, setTheme } = useTheme();
      const { isOpen, setOpen, toggleOpen } = useContext(CommandContext);

      useEffect(() => {
        const down = (e: KeyboardEvent) => {
          if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
            if (
              (e.target instanceof HTMLElement && e.target.isContentEditable) ||
              e.target instanceof HTMLInputElement ||
              e.target instanceof HTMLTextAreaElement ||
              e.target instanceof HTMLSelectElement
            ) {
              return;
            }

            e.preventDefault();
            toggleOpen();
          }
        };

        document.addEventListener('keydown', down);

        return () => {
          document.removeEventListener('keydown', down);
        };
      }, [toggleOpen]);

      return (
        <>
          <div className="flex gap-3 items-center">
            <p>
              Current Theme: <span>{theme}</span>
            </p>

            <kbd className="pointer-events-none h-5 select-none flex items-center gap-1 rounded-md bg-kubefirst-secondary px-1.5 font-mono text-[10px] font-medium opacity-100 text-white">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>

          <CommandComponent open={isOpen} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandGroup heading="Theme">
              <CommandItem onSelect={() => setTheme!('kubefirst')}>
                <Sun />
                Kubefirst
              </CommandItem>

              <CommandItem onSelect={() => setTheme!('colony')}>
                <Moon />
                Colony
              </CommandItem>

              <CommandItem onSelect={() => setTheme!('colony')}>
                <Database />
                Civo
              </CommandItem>
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Theme">
              <CommandItem onSelect={() => setTheme!('kubefirst')}>
                <Sun />
                Kubefirst
              </CommandItem>

              <CommandItem onSelect={() => setTheme!('colony')}>
                <Moon />
                Colony
              </CommandItem>

              <CommandItem onSelect={() => setTheme!('colony')}>
                <Database />
                Civo
              </CommandItem>
            </CommandGroup>
          </CommandComponent>
        </>
      );
    };

    return (
      <ThemeProvider theme="kubefirst">
        <CommandProvider>
          <Wrapper />
        </CommandProvider>
      </ThemeProvider>
    );
  },
};

export default meta;
