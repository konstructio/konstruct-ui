export enum FilterEvent {
  OPEN = '@konstructio/KonstructFilter/event-OPEN',
  RESET = '@konstructio/KonstructFilter/event-RESET',
}

/** @deprecated Use FilterEvent instead */
export enum LegacyFilterEvent {
  OPEN = '@konstrtuctio/KonstructFilter/event-OPEN',
  RESET = '@konstrtuctio/KonstructFilter/event-RESET',
}

const legacyEventByEvent = {
  [FilterEvent.OPEN]: LegacyFilterEvent.OPEN,
  [FilterEvent.RESET]: LegacyFilterEvent.RESET,
} as const;

const DUPLICATE_FLAG = '__konstructFilterDuplicate';

const dispatchFilterEvent = <T>(event: FilterEvent, detail: T) => {
  document.dispatchEvent(new CustomEvent<T>(event, { detail }));

  const legacyEvent = new CustomEvent<T>(legacyEventByEvent[event], {
    detail,
  });
  Object.assign(legacyEvent, { [DUPLICATE_FLAG]: true });
  document.dispatchEvent(legacyEvent);
};

export const sendOpenFilterEvent = (id: string) => {
  dispatchFilterEvent(FilterEvent.OPEN, id);
};

export const resetEvent = (scope?: string) => {
  dispatchFilterEvent(FilterEvent.RESET, scope);
};

export const addFilterEventListener = <T>(
  event: FilterEvent,
  handler: (event: CustomEvent<T>) => void,
  options: { signal?: AbortSignal },
) => {
  document.addEventListener(
    event,
    (e) => {
      handler(e as CustomEvent<T>);
    },
    options,
  );
  document.addEventListener(
    legacyEventByEvent[event],
    (e) => {
      if (DUPLICATE_FLAG in e) {
        return;
      }

      handler(e as CustomEvent<T>);
    },
    options,
  );
};
