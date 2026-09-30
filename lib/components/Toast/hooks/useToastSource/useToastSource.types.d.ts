import { ToastStoreOptions } from '../../store/create-toast-store.types';
import { ToastItem } from '../../Toast.types';
export type UseToastSourceOptions = {
    toasts?: ToastItem[];
    onDismiss?: (id: string) => void;
};
export type UseToastSourceResult = {
    toasts: ToastItem[];
    configure: (options: ToastStoreOptions) => void;
    dismiss: (id: string) => void;
};
