export enum FilterEvent {
  OPEN = '@konstrtuctio/Filter/event-OPEN',
  RESET = '@konstrtuctio/Filter/event-RESET',
}

export const sendOpenFilterEvent = (id: string) =>
  document.dispatchEvent(
    new CustomEvent<string>(FilterEvent.OPEN, { detail: id }),
  );

export const resetEvent = () =>
  document.dispatchEvent(new CustomEvent<string>(FilterEvent.RESET));
