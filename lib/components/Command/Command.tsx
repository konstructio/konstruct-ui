import { FC } from 'react';

import {
  CommandDialog,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from './components';
import { CommandProps } from './Command.types';
import { CommandProvider } from './contexts/Command.provider';

const Command: FC<CommandProps> = ({ children, ...props }) => (
  <CommandProvider>
    <CommandDialog {...props}>{children}</CommandDialog>
  </CommandProvider>
);

export { Command, CommandGroup, CommandItem, CommandSeparator };
