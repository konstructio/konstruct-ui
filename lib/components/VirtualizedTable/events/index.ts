export enum VirtualizedTableEvent {
  EXPAND_ROW = '@konstructio/VirtualizedTable/event-EXPAND_ROW',
  COLLAPSE_ROW = '@konstructio/VirtualizedTable/event-COLLAPSE_ROW',
  TOGGLE_ROW = '@konstructio/VirtualizedTable/event-TOGGLE_ROW',
}

export type VirtualizedTableEventDetail = {
  tableId: string;
  rowId: string;
};

export const sendExpandRowEvent = (tableId: string, rowId: string) =>
  document.dispatchEvent(
    new CustomEvent<VirtualizedTableEventDetail>(
      VirtualizedTableEvent.EXPAND_ROW,
      { detail: { tableId, rowId } },
    ),
  );

export const sendCollapseRowEvent = (tableId: string, rowId: string) =>
  document.dispatchEvent(
    new CustomEvent<VirtualizedTableEventDetail>(
      VirtualizedTableEvent.COLLAPSE_ROW,
      { detail: { tableId, rowId } },
    ),
  );

export const sendToggleRowEvent = (tableId: string, rowId: string) =>
  document.dispatchEvent(
    new CustomEvent<VirtualizedTableEventDetail>(
      VirtualizedTableEvent.TOGGLE_ROW,
      { detail: { tableId, rowId } },
    ),
  );
