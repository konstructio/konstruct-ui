import type { Meta, StoryObj } from '@storybook/react';
import { Moon, Sun, Database } from 'react-feather';

import { ThemeProvider, useTheme } from '../../contexts';

import {
  Command as CommandComponent,
  CommandGroup,
  CommandItem,
} from './Command';
import { CommandSeparator } from 'cmdk';

type Story = StoryObj<typeof CommandComponent>;

const meta: Meta<typeof CommandComponent> = {
  title: 'Design System/Command',
  component: CommandComponent,
};

export const Command: Story = {
  render: () => {
    const Wrapper = () => {
      const { theme, setTheme } = useTheme();

      return (
        <>
          <p>
            Current Theme: <span>{theme}</span>
          </p>

          <CommandComponent>
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
        <div className="max-w-[350px] flex flex-col gap-2">
          <Wrapper />
        </div>
      </ThemeProvider>
    );
  },
};

export default meta;
