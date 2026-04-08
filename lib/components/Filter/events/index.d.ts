export declare enum FilterEvent {
    OPEN = "@konstrtuctio/KonstructFilter/event-OPEN",
    RESET = "@konstrtuctio/KonstructFilter/event-RESET"
}
export declare const sendOpenFilterEvent: (id: string) => boolean;
export declare const resetEvent: () => boolean;
