import { ToastStore, ToastStoreState } from '../../store/create-toast-store.types';
export declare const useToastStoreApi: () => ToastStore;
export declare const useToastStore: <T>(selector: (state: ToastStoreState) => T) => T;
