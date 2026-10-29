import { PropsWithChildren, ReactNode } from '../../../node_modules/react';
import { Theme } from '../../domain/theme';
export type SheetPosition = 'bottom' | 'top';
/**
 * Props for the Sheet component.
 *
 * @example
 * ```tsx
 * <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} title="Region">
 *   <button type="button">London</button>
 * </Sheet>
 * ```
 */
export type Props = PropsWithChildren<{
    /** Whether the sheet is open */
    isOpen: boolean;
    /** Called when the sheet asks to close: scrim tap, Escape, or `closeOnSelect` */
    onClose: () => void;
    /** Heading of the sheet; also its accessible name */
    title: ReactNode;
    /** Keep the title for assistive technology only */
    hideTitle?: boolean;
    /** Rendered before the title, e.g. a back button for a nested step */
    leading?: ReactNode;
    /** Screen edge the sheet docks to (default: 'bottom') */
    position?: SheetPosition;
    /**
     * Index of the step the content shows. Changing it slides the content across
     * (forward for a higher index, back for a lower one) and animates the panel
     * height to the new content.
     */
    step?: number;
    /** Additional CSS classes for the panel */
    className?: string;
    /** Additional CSS classes for the scrolling body */
    bodyClassName?: string;
    /** Additional CSS classes for the header row (leading slot and title) */
    headerClassName?: string;
    /** Additional CSS classes for the title */
    titleClassName?: string;
    /** Theme override for the sheet */
    theme?: Theme;
}>;
