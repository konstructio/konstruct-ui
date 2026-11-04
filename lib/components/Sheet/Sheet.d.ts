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
 * animates to the new content. With `onBack`, swiping the content towards the
 * right on a later step goes back the way the iOS back gesture does: the
 * previous step follows the finger in from the left while the panel grows or
 * shrinks to its height, and the swipe commits or springs back on release.
 *
 * On touch screens the panel follows a finger on its grab handle or header.
 * Towards the edge it docks to it closes past a quarter of its height or on a
 * quick flick, and springs back otherwise. An `expandable` sheet grows with
 * the finger when pulled away from that edge and, once released, springs the
 * rest of the way to the full viewport (or back to its natural height); from
 * there a pull towards the edge shrinks it again, and a long one closes it.
 *
 * @example
 * ```tsx
 * <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} title="Region">
 *   <button type="button">London</button>
 * </Sheet>
 * ```
 */
export declare const Sheet: FC<Props>;
