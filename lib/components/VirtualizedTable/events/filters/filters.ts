import {
  VirtualizedTableEvent,
  VirtualizedTableEventDetail,
} from '../events.types';

export const sendResetFiltersEvent = (tableId: string) => {
  document.dispatchEvent(
    new CustomEvent<VirtualizedTableEventDetail>(
      VirtualizedTableEvent.RESET_FILTERS,
      { detail: { tableId } },
    ),
  );
};
