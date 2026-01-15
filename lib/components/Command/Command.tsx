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

/**
 * A command palette dialog for keyboard-driven navigation and actions.
 * Built on cmdk and Radix UI Dialog for accessibility.
 *
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <Command open={open} onOpenChange={setOpen} title="Commands">
 *   <CommandGroup heading="Navigation">
 *     <CommandItem onSelect={() => navigate('/home')}>Home</CommandItem>
 *     <CommandItem onSelect={() => navigate('/settings')}>Settings</CommandItem>
 *   </CommandGroup>
 *   <CommandSeparator />
 *   <CommandGroup heading="Actions">
 *     <CommandItem onSelect={() => logout()}>Logout</CommandItem>
 *   </CommandGroup>
 * </Command>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-command--docs Storybook}
 */
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
