import { FC } from '../../../node_modules/react';
import { Props } from './Sheet.types';
/**
 * A dialog docked to the bottom (or top) edge of the screen, full width: the
 * touch-screen counterpart of a dropdown or a popover menu. It slides in and
 * out, dims the page behind a scrim, and keeps its content scrollable within
 * the viewport. Radix unmounts closed dialogs, so the portal is force-mounted
 * and AnimatePresence keeps it around for the exit animation.
 *
 * Multi-step sheets pass a `step`: when it changes the content slides across
 * (forward for a higher step, back for a lower one) and the panel height
 * animates to the new content.
 *
 * @example
 * ```tsx
 * <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} title="Region">
 *   <button type="button">London</button>
 * </Sheet>
 * ```
 */
export declare const Sheet: FC<Props>;
