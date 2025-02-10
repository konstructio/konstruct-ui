import { EventEmitter } from 'events';

import {
  EventEmitterExtraDataArgs,
  IEventEmitter,
  TerminalEvent,
  TerminalEventCallback,
} from './event-bus.types';

export class EventBus implements IEventEmitter {
  private readonly emitter: EventEmitter;
  private readonly showLogs: boolean;

  constructor({ showLogs }: { showLogs: boolean }) {
    this.emitter = new EventEmitter();
    this.showLogs = showLogs;
  }

  on<T extends TerminalEvent>(
    event: T,
    callback: TerminalEventCallback<T>,
  ): VoidFunction {
    const handleCallback: TerminalEventCallback<T> = (data) => {
      if (this.showLogs) {
        console.log('Event:', event, data);
      }
      callback(data);
    };

    this.emitter.on(event, handleCallback);

    return () => {
      return this.emitter.off(event, callback);
    };
  }

  off<T extends TerminalEvent>(
    event: T,
    callback: TerminalEventCallback<T>,
  ): void {
    this.emitter.off(event, callback);
  }

  emit<T extends TerminalEvent>(
    event: T,
    ...data: EventEmitterExtraDataArgs<T>
  ) {
    const [extraData] = data;
    const eventData = {
      type: event,
      timestamp: Date.now(),
      ...extraData,
    };

    this.emitter.emit(event, eventData);
  }

  removeAllListeners(): void {
    this.emitter.removeAllListeners();
  }
}
