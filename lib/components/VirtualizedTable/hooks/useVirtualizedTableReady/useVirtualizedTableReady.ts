import { useEffect, useSyncExternalStore } from 'react';

import {
  isVirtualizedTableContentLoaded,
  loadVirtualizedTableContent,
  subscribeToVirtualizedTableContent,
} from '../../utils';

const getServerSnapshot = (): boolean => {
  return false;
};

export const useVirtualizedTableReady = (): boolean => {
  const isReady = useSyncExternalStore(
    subscribeToVirtualizedTableContent,
    isVirtualizedTableContentLoaded,
    getServerSnapshot,
  );

  useEffect(() => {
    if (!isReady) {
      loadVirtualizedTableContent().catch(() => undefined);
    }
  }, [isReady]);

  return isReady;
};
