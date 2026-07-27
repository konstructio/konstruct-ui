export declare enum FilterEvent {
    OPEN = "@konstructio/KonstructFilter/event-OPEN",
    RESET = "@konstructio/KonstructFilter/event-RESET"
}
/** @deprecated Use FilterEvent instead */
export declare enum LegacyFilterEvent {
    OPEN = "@konstrtuctio/KonstructFilter/event-OPEN",
    RESET = "@konstrtuctio/KonstructFilter/event-RESET"
}
export declare const sendOpenFilterEvent: (id: string) => void;
export declare const resetEvent: (scope?: string) => void;
export declare const addFilterEventListener: <T>(event: FilterEvent, handler: (event: CustomEvent<T>) => void, options: {
    signal?: AbortSignal;
}) => void;
