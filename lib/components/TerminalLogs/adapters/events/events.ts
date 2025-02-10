import {
  eventEmitter,
  TerminalEvent,
  TerminalEventCallback,
} from '../../event-bus';

import { EventEmitterAdapter } from './events.types';

export const eventAdapter = (
  listeners: Partial<
    Record<TerminalEvent, TerminalEventCallback<TerminalEvent>>
  > = {},
): EventEmitterAdapter => {
  const emitter = eventEmitter();

  Object.entries(listeners).forEach(([event, callback]) => {
    emitter.on(event as TerminalEvent, callback);
  });

  return emitter;
};
