export enum TerminalEvent {
  TERMINAL_LOADED = 'TERMINAL_LOADED',
}

type BaseEvent<T extends TerminalEvent = TerminalEvent> = {
  type: T;
  timestamp: Date;
};

export type TerminalEventMap = {
  [TerminalEvent.TERMINAL_LOADED]: BaseEvent;
};

export type TerminalEventCallback<T extends TerminalEvent> = (
  event: TerminalEventMap[T],
) => unknown;

type TerminalEventExtraData<T extends TerminalEvent> = Omit<
  TerminalEventMap[T],
  keyof BaseEvent
>;

type EventEmitterExtraDataArgs<T extends TerminalEvent> =
  BaseEvent extends TerminalEventMap[T]
    ? [undefined?]
    : [TerminalEventExtraData<T>];

export interface IEventEmitter {
  on<T extends TerminalEvent>(
    event: T,
    callback: TerminalEventCallback<T>,
  ): VoidFunction;

  off<T extends TerminalEvent>(
    event: T,
    callback: TerminalEventCallback<T>,
  ): void;

  emit<T extends TerminalEvent>(
    event: T,
    ...data: EventEmitterExtraDataArgs<T>
  ): void;

  removeAllListeners(): void;
}
