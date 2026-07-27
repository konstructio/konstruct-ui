import {
  VirtualizedTableEvent,
  VirtualizedTableEventDetail,
} from '../events.types';

export const sendExpandRowEvent = (tableId: string, rowId: string) => {
  document.dispatchEvent(
    new CustomEvent<VirtualizedTableEventDetail>(
      VirtualizedTableEvent.EXPAND_ROW,
      { detail: { tableId, rowId } },
    ),
  );
};

export const sendCollapseRowEvent = (tableId: string, rowId: string) => {
  document.dispatchEvent(
    new CustomEvent<VirtualizedTableEventDetail>(
      VirtualizedTableEvent.COLLAPSE_ROW,
      { detail: { tableId, rowId } },
    ),
  );
};

export const sendToggleRowEvent = (tableId: string, rowId: string) => {
  document.dispatchEvent(
    new CustomEvent<VirtualizedTableEventDetail>(
      VirtualizedTableEvent.TOGGLE_ROW,
      { detail: { tableId, rowId } },
    ),
  );
};
