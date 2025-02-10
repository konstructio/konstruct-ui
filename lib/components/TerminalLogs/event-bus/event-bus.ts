import { EventEmitter } from 'events';

import { IEventEmitter } from './event-bus.types';

export const eventEmitter = (): IEventEmitter => {
  const emitter = new EventEmitter();

  return {
    on(event, callback) {
      emitter.on(event, callback);

      return () => {
        return emitter.off(event, callback);
      };
    },

    off(event, callback) {
      emitter.off(event, callback);
    },

    emit(event, data?) {
      const eventData = {
        type: event,
        timestamp: Date.now(),
        ...data,
      };

      emitter.emit(event, eventData);
    },

    removeAllListeners() {
      emitter.removeAllListeners();
    },
  };
};
