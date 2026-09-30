import { FC } from '../../../node_modules/react';
import { Props } from './Toast.types';
/**
 * A stack of toast notifications anchored to the bottom-right corner.
 *
 * The newest toast sits in front; older ones peek out behind it and the whole
 * stack expands on hover or focus, holding every auto-dismiss countdown until
 * the pointer leaves, focus moves out or the window loses focus. By default
 * each toast then resumes with the time it had left; `hoverBehavior="restart"`
 * gives them their full duration again and dismisses them one by one.
 * Rendered through a portal on `document.body` so no ancestor can clip or
 * cover it, and themed through the `data-theme` it lands under.
 *
 * @example
 * ```tsx
 * <App />
 * <Toast limit={5} duration={3000} />
 *
 * const { addToast } = useToast();
 * addToast({ title: 'Saved', type: 'success' });
 * ```
 *
 * No `ToastProvider` is needed: the stack and `useToast()` share a built-in
 * store that `duration` and `limit` configure (`limit={1}` shows one toast at
 * a time). Wrap a subtree in `ToastProvider` to scope or inject a store, or
 * pass `toasts` and `onDismiss` to drive the stack from your own state.
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/in-review-toast-light--docs Storybook}
 */
export declare const Toast: FC<Props>;
