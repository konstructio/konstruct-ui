import { describe, expect, it, vi } from 'vitest';

import {
  VirtualizedTableEvent,
  VirtualizedTableEventDetail,
} from '../events.types';

import { sendResetFiltersEvent } from './filters';

describe('VirtualizedTable filter events', () => {
  it('sendResetFiltersEvent dispatches RESET_FILTERS with correct detail', () => {
    const handler = vi.fn();

    document.addEventListener(VirtualizedTableEvent.RESET_FILTERS, handler);
    sendResetFiltersEvent('table-1');

    expect(handler).toHaveBeenCalledTimes(1);

    const event = handler.mock
      .calls[0][0] as CustomEvent<VirtualizedTableEventDetail>;
    expect(event.detail).toEqual({ tableId: 'table-1' });

    document.removeEventListener(VirtualizedTableEvent.RESET_FILTERS, handler);
  });
});
