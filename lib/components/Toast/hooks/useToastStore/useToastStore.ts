import { useContext, useSyncExternalStore } from 'react';

import { ToastStoreContext } from '../../contexts';
import { defaultToastStore } from '../../store/default-toast-store';
import {
  ToastStore,
  ToastStoreState,
} from '../../store/create-toast-store.types';

export const useToastStoreApi = (): ToastStore => {
  return useContext(ToastStoreContext) ?? defaultToastStore;
};

export const useToastStore = <T>(
  selector: (state: ToastStoreState) => T,
): T => {
  const store = useToastStoreApi();

  return useSyncExternalStore(
    store.subscribe,
    () => {
      return selector(store.getState());
    },
    () => {
      return selector(store.getState());
    },
  );
};
