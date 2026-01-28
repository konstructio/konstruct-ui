import { FC } from '../../../node_modules/react';
import { CommandProps } from './Command.types';
import { CommandGroup, CommandItem, CommandSeparator } from './components';
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
declare const Command: FC<CommandProps>;
export { Command, CommandGroup, CommandItem, CommandSeparator };
