import { PropsWithChildren } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { drawerVariants } from './Drawer.variants';
import { Theme } from '../../domain/theme';
/**
 * Custom class names for each Drawer element.
 */
export type ClassNames = {
    /** Class for the drawer body section */
    body?: string;
    /** Class for the close button */
    closeButton?: string;
    /** Class for the content wrapper (contains header, body, footer) */
    content?: string;
    /** Class for the drawer footer section */
    footer?: string;
    /** Class for the drawer header section */
    header?: string;
    /** Class for the background overlay */
    overlay?: string;
    /** Class for the drawer panel */
    panel?: string;
    /** Class for the resize handle */
    resizeHandle?: string;
    /** Class for the root wrapper */
    root?: string;
};
/**
 * Props for the Drawer component.
 *
 * @example
 * ```tsx
 * <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
 *   <Drawer.Header>Title</Drawer.Header>
 *   <Drawer.Body>Content</Drawer.Body>
 *   <Drawer.Footer>
 *     <Button onClick={() => setIsOpen(false)}>Close</Button>
 *   </Drawer.Footer>
 * </Drawer>
 * ```
 */
export type Props = PropsWithChildren & VariantProps<typeof drawerVariants> & {
    /** Enable resizable drawer */
    canResize?: boolean;
    /** Default width of the drawer in pixels (default: 500) */
    defaultWidth?: number;
    /** Additional CSS classes for the drawer panel */
    className?: string;
    /** Custom class names for each element */
    classNames?: ClassNames;
    /** DOM element to portal the drawer into (defaults to document.body) */
    container?: Element | DocumentFragment;
    /** Whether the drawer is open */
    isOpen?: boolean;
    /** Maximum width when resizable (default: 800) */
    maxWidth?: number;
    /** Minimum width when resizable (default: 400) */
    minWidth?: number;
    /** Position of the drawer */
    position?: 'left' | 'right';
    /** Show the X close button in the corner */
    showCloseButton?: boolean;
    /** Close on a horizontal swipe towards the edge the panel came from (default: true) */
    closeOnSwipe?: boolean;
    /** Take the whole screen below 768px, whatever `defaultWidth` says (default: true) */
    fullScreenOnMobile?: boolean;
    /**
     * Where focus lands on open: the first focusable element (default) or the
     * panel itself, for drawers opened by a tap that should not start with a
     * focus ring on their first control.
     */
    initialFocus?: 'first' | 'panel';
    /** Theme override for this component */
    theme?: Theme;
    /** Callback when drawer is closed (Escape key, overlay click, or close button) */
    onClose?: () => void;
};
