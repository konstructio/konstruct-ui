import { FC } from 'react';
import { DialogTitle, Root } from '@radix-ui/react-dialog';

import {
  Command as CommandBase,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  DialogContent,
} from './components';
import { CommandProps } from './Command.types';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const Command: FC<CommandProps> = ({ children, ...props }) => (
  <Root {...props}>
    <DialogContent className="overflow-hidden p-0">
      <DialogTitle className="hidden">
        <VisuallyHidden>Test</VisuallyHidden>
      </DialogTitle>

      <CommandBase className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
        {children}
      </CommandBase>
    </DialogContent>
  </Root>
);

export { Command, CommandGroup, CommandItem, CommandSeparator };
