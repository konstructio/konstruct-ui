import { FC } from '../../../node_modules/react';
import { Props } from './ToastProvider.types';
/**
 * Optional scope for the toast queue: everything below it publishes with
 * `useToast()` into this store and a `<Toast />` inside draws it. Use it to
 * inject a store shared with other code (`store`) or to isolate a subtree;
 * without it, `<Toast />` and `useToast()` share one built-in store.
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/in-review-toast-light--docs Storybook}
 */
export declare const ToastProvider: FC<Props>;
