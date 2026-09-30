import { useMemo } from 'react';

import { ToastActions } from '../../store/create-toast-store.types';
import { useToastStoreApi } from '../useToastStore/useToastStore';

export const useToast = (): ToastActions => {
  const store = useToastStoreApi();

  return useMemo(
    () => ({
      addToast: (input) => {
        return store.getState().add(input);
      },
      removeToast: (id) => {
        store.getState().remove(id);
      },
      clearAllToasts: () => {
        store.getState().clear();
      },
    }),
    [store],
  );
};
