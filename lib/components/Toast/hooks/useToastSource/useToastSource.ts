import { useSyncExternalStore } from 'react';

import { useToastStoreApi } from '../useToastStore/useToastStore';

import {
  UseToastSourceOptions,
  UseToastSourceResult,
} from './useToastSource.types';

export const useToastSource = ({
  toasts,
  onDismiss,
}: UseToastSourceOptions): UseToastSourceResult => {
  const store = useToastStoreApi();

  const read = () => {
    return store.getState().toasts;
  };

  const storeToasts = useSyncExternalStore(store.subscribe, read, read);

  return {
    toasts: toasts ?? storeToasts,
    configure: store.configure,
    dismiss:
      onDismiss ??
      ((id) => {
        store.getState().remove(id);
      }),
  };
};
