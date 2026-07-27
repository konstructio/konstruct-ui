import { VirtualizedTableEvent } from '../events.types';

import { VirtualizedTableRefreshEventDetail } from './refresh.types';

export const sendRefreshEvent = (tableId?: string) => {
  document.dispatchEvent(
    new CustomEvent<VirtualizedTableRefreshEventDetail>(
      VirtualizedTableEvent.REFRESH,
      { detail: { tableId } },
    ),
  );
};

export * from './refresh.types';
