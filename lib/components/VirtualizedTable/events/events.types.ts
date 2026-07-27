export enum VirtualizedTableEvent {
  EXPAND_ROW = '@konstructio/VirtualizedTable/event-EXPAND_ROW',
  COLLAPSE_ROW = '@konstructio/VirtualizedTable/event-COLLAPSE_ROW',
  TOGGLE_ROW = '@konstructio/VirtualizedTable/event-TOGGLE_ROW',
  RESET_FILTERS = '@konstructio/VirtualizedTable/event-RESET_FILTERS',
  REFRESH = '@konstructio/VirtualizedTable/event-REFRESH',
}

export type VirtualizedTableEventDetail = {
  tableId: string;
  rowId?: string;
};
