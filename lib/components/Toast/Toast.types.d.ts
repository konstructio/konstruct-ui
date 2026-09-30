import { ReactNode } from '../../../node_modules/react';
import { Theme } from '../../domain/theme';
export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastItem = {
    /** Description text or element */
    description?: ReactNode;
    /** Auto-dismiss duration in ms; 0 keeps the toast until dismissed (default: 3000) */
    duration?: number;
    /** Stable identifier, also passed to `onDismiss` */
    id: string;
    /** Show close button (default: true) */
    showCloseButton?: boolean;
    /** Title text or element */
    title: ReactNode;
    /** Visual type (default: 'info') */
    type?: ToastType;
};
export type ToastInput = Omit<ToastItem, 'id'>;
export type ToastHoverBehavior = 'resume' | 'restart';
export type ToastHeights = Record<string, number>;
/**
 * Props for the Toast stack.
 *
 * @example
 * ```tsx
 * <ToastProvider>
 *   <App />
 *   <Toast />
 * </ToastProvider>
 * ```
 */
export type Props = {
    /** Additional CSS classes for the fixed region */
    className?: string;
    /** Accessible name of every close button (default: 'Close toast') */
    closeLabel?: string;
    /** Portal target (default: document.body) */
    container?: Element | null;
    /**
     * Auto-dismiss duration applied to toasts published without one, set on
     * the store this stack draws from (default: 3000)
     */
    duration?: number;
    /** Render through a portal instead of in place (default: true) */
    isPortal?: boolean;
    /**
     * What happens to the auto-dismiss countdowns after the stack is hovered or
     * focused: `resume` continues each toast with the time it had left,
     * `restart` gives every toast its full duration again and dismisses them
     * one by one, oldest first (default: 'resume')
     */
    hoverBehavior?: ToastHoverBehavior;
    /** Accessible name of the notifications region (default: 'Notifications') */
    label?: string;
    /**
     * Toasts kept in the queue, dropping the oldest past it, set on the store
     * this stack draws from (default: 5)
     */
    limit?: number;
    /** Toasts kept visible while collapsed; the rest stay hidden behind (default: 3) */
    maxVisible?: number;
    /** Theme override for this component */
    theme?: Theme;
    /**
     * Toasts in publish order, oldest first; the newest one is shown in front.
     * Leave out `toasts` and `onDismiss` to read them from the nearest
     * `ToastProvider`, or from the built-in store `useToast()` publishes to
     * when there is none
     */
    toasts?: ToastItem[];
    /** Called when a toast expires or its close button is pressed */
    onDismiss?: (id: string) => void;
};
/** @deprecated Use Props instead */
export type ToastProps = Props;
