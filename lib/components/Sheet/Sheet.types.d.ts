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
    /**
     * Goes back one step. On a step above the first the header (chevron and
     * title) becomes the back control in place of `leading`, and swiping the
     * content towards the right goes back too.
     */
    onBack?: () => void;
    /** Heading of the sheet; also its accessible name */
    title: ReactNode;
    /** Keep the title for assistive technology only */
    hideTitle?: boolean;
    /** Rendered before the title, e.g. a back button for a nested step */
    leading?: ReactNode;
    /** Screen edge the sheet docks to (default: 'bottom') */
    position?: SheetPosition;
    /**
     * Let a swipe away from the docked edge grow the panel to the full viewport.
     * A swipe back towards the edge restores its natural height first and only
     * a further swipe closes it.
     */
    expandable?: boolean;
    /**
     * Let a finger on the grab handle or header drag the panel, closing it past a
     * threshold (default: true). When false the handle is not drawn and the sheet
     * closes only from the scrim, Escape or its own content.
     */
    draggable?: boolean;
    /**
     * Index of the step the content shows. Changing it slides the content across
     * (forward for a higher index, back for a lower one) and animates the panel
     * height to the new content.
     */
    step?: number;
    /**
     * Fade the bottom edge while the panel grows to a taller step, so the
     * incoming rows come in behind a soft edge instead of being cut by it
     * (default: false, the edge cuts).
     */
    softReveal?: boolean;
    /**
     * What the previous step shows right now. The back gesture and control
     * preview that step with its last render; pass this when its content can
     * change while a later step is open.
     */
    previousContent?: ReactNode;
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
