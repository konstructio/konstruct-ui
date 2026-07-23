import { describe, expect, it, vi } from 'vitest';

import { VirtualizedTableEvent } from '../events.types';

import { sendRefreshEvent } from './refresh';
import { VirtualizedTableRefreshEventDetail } from './refresh.types';

describe('VirtualizedTable refresh events', () => {
  it('sendRefreshEvent dispatches REFRESH with correct detail', () => {
    const handler = vi.fn();

    document.addEventListener(VirtualizedTableEvent.REFRESH, handler);
    sendRefreshEvent('table-1');

    expect(handler).toHaveBeenCalledTimes(1);

    const event = handler.mock
      .calls[0][0] as CustomEvent<VirtualizedTableRefreshEventDetail>;
    expect(event.detail).toEqual({ tableId: 'table-1' });

    document.removeEventListener(VirtualizedTableEvent.REFRESH, handler);
  });

  it('sendRefreshEvent dispatches REFRESH without tableId when omitted', () => {
    const handler = vi.fn();

    document.addEventListener(VirtualizedTableEvent.REFRESH, handler);
    sendRefreshEvent();

    expect(handler).toHaveBeenCalledTimes(1);

    const event = handler.mock
      .calls[0][0] as CustomEvent<VirtualizedTableRefreshEventDetail>;
    expect(event.detail).toEqual({ tableId: undefined });

    document.removeEventListener(VirtualizedTableEvent.REFRESH, handler);
  });
});
