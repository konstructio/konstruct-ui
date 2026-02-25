export declare enum VirtualizedTableEvent {
    EXPAND_ROW = "@konstructio/VirtualizedTable/event-EXPAND_ROW",
    COLLAPSE_ROW = "@konstructio/VirtualizedTable/event-COLLAPSE_ROW",
    TOGGLE_ROW = "@konstructio/VirtualizedTable/event-TOGGLE_ROW"
}
export type VirtualizedTableEventDetail = {
    tableId: string;
    rowId: string;
};
export declare const sendExpandRowEvent: (tableId: string, rowId: string) => boolean;
export declare const sendCollapseRowEvent: (tableId: string, rowId: string) => boolean;
export declare const sendToggleRowEvent: (tableId: string, rowId: string) => boolean;
