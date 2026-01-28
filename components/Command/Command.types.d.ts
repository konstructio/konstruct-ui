import { Theme } from '../../domain/theme';
import { DialogProps } from '@radix-ui/react-dialog';
import { PropsWithChildren } from '../../../node_modules/react';
/**
 * Props for the Command component.
 * A command palette dialog for keyboard-driven navigation and actions.
 *
 * @example
 * ```tsx
 * <Command open={open} onOpenChange={setOpen} title="Command Palette">
 *   <CommandGroup heading="Actions">
 *     <CommandItem onSelect={() => createNew()}>Create new</CommandItem>
 *     <CommandItem onSelect={() => openSettings()}>Settings</CommandItem>
 *   </CommandGroup>
 * </Command>
 * ```
 */
export interface CommandProps extends PropsWithChildren<DialogProps> {
    /** Text shown when no results match the search */
    emptyResults?: string;
    /** Placeholder text for the search input */
    placeholder?: string;
    /** Accessible title for the dialog (visually hidden) */
    title?: string;
    /** Additional CSS classes for the title */
    titleClassName?: string;
    /** Additional CSS classes for the command wrapper */
    wrapperClassName?: string;
    /** Theme override for this component */
    theme?: Theme;
}
