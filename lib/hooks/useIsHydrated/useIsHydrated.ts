import { useSyncExternalStore } from 'react';

import { noopSubscribe } from './utils';

export const useIsHydrated = (): boolean => {
  return useSyncExternalStore(
    noopSubscribe,
    () => {
      return true;
    },
    () => {
      return false;
    },
  );
};
