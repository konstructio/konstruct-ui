import { ToastInput, ToastItem } from '../Toast.types';
export type ToastStoreState = {
    toasts: ToastItem[];
    add: (input: ToastInput) => string;
    remove: (id: string) => void;
    clear: () => void;
};
export type ToastStoreListener = (state: ToastStoreState, previous: ToastStoreState) => void;
export type ToastStore = {
    configure: (options: ToastStoreOptions) => void;
    getState: () => ToastStoreState;
    subscribe: (listener: ToastStoreListener) => () => void;
};
export type ToastStoreOptions = {
    /** Auto-dismiss duration applied when a toast has none (default: 3000) */
    duration?: number;
    /** Toasts kept in the queue; the oldest is dropped past it (default: 5) */
    limit?: number;
};
export type ToastActions = {
    addToast: (input: ToastInput) => string;
    removeToast: (id: string) => void;
    clearAllToasts: () => void;
};
