export enum FilterEvent {
  OPEN = '@konstrtuctio/KonstructFilter/event-OPEN',
  RESET = '@konstrtuctio/KonstructFilter/event-RESET',
}

export const sendOpenFilterEvent = (id: string) =>
  document.dispatchEvent(
    new CustomEvent<string>(FilterEvent.OPEN, { detail: id }),
  );

export const resetEvent = (scope?: string) =>
  document.dispatchEvent(
    new CustomEvent<string | undefined>(FilterEvent.RESET, { detail: scope }),
  );
