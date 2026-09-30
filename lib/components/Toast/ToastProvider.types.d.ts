import { PropsWithChildren } from '../../../node_modules/react';
import { ToastStore, ToastStoreOptions } from './store/create-toast-store.types';
/**
 * Props for the ToastProvider.
 *
 * @example
 * ```tsx
 * <ToastProvider duration={3000} limit={5}>
 *   <App />
 *   <Toast />
 * </ToastProvider>
 * ```
 */
export type Props = PropsWithChildren<ToastStoreOptions & {
    /** An existing store to share, e.g. one also exposed to other apps */
    store?: ToastStore;
}>;
