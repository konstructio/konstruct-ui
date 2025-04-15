import { DialogTitle, Root } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { FC } from 'react';

import { cn } from '@/utils';

import { CommandProps } from './Command.types';
import { wrapperVariants } from './Command.variants';
import {
  Command as CommandBase,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  DialogContent,
} from './components';

const Command: FC<CommandProps> = ({
  children,
  title,
  titleClassName,
  wrapperClassName,
  theme,
  ...props
}) => (
  <Root {...props}>
    <DialogContent
      className="overflow-hidden p-0 border-0 !rounded-none"
      data-theme={theme}
    >
      <DialogTitle className={cn('hidden', titleClassName)}>
        <VisuallyHidden>{title}</VisuallyHidden>
      </DialogTitle>

      <CommandBase
        className={cn(wrapperVariants({ className: wrapperClassName }))}
      >
        {children}
      </CommandBase>
    </DialogContent>
  </Root>
);

export { Command, CommandGroup, CommandItem, CommandSeparator };
