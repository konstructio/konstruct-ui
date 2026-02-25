import { describe, expect, it, vi } from 'vitest';

import {
  sendCollapseRowEvent,
  sendExpandRowEvent,
  sendToggleRowEvent,
  VirtualizedTableEvent,
  VirtualizedTableEventDetail,
} from '.';

describe('VirtualizedTable events', () => {
  it('sendExpandRowEvent dispatches EXPAND_ROW with correct detail', () => {
    const handler = vi.fn();

    document.addEventListener(VirtualizedTableEvent.EXPAND_ROW, handler);
    sendExpandRowEvent('table-1', 'row-0');

    expect(handler).toHaveBeenCalledTimes(1);

    const event = handler.mock
      .calls[0][0] as CustomEvent<VirtualizedTableEventDetail>;
    expect(event.detail).toEqual({ tableId: 'table-1', rowId: 'row-0' });

    document.removeEventListener(VirtualizedTableEvent.EXPAND_ROW, handler);
  });

  it('sendCollapseRowEvent dispatches COLLAPSE_ROW with correct detail', () => {
    const handler = vi.fn();

    document.addEventListener(VirtualizedTableEvent.COLLAPSE_ROW, handler);
    sendCollapseRowEvent('table-2', 'row-3');

    expect(handler).toHaveBeenCalledTimes(1);

    const event = handler.mock
      .calls[0][0] as CustomEvent<VirtualizedTableEventDetail>;
    expect(event.detail).toEqual({ tableId: 'table-2', rowId: 'row-3' });

    document.removeEventListener(VirtualizedTableEvent.COLLAPSE_ROW, handler);
  });

  it('sendToggleRowEvent dispatches TOGGLE_ROW with correct detail', () => {
    const handler = vi.fn();

    document.addEventListener(VirtualizedTableEvent.TOGGLE_ROW, handler);
    sendToggleRowEvent('table-x', 'row-5');

    expect(handler).toHaveBeenCalledTimes(1);

    const event = handler.mock
      .calls[0][0] as CustomEvent<VirtualizedTableEventDetail>;
    expect(event.detail).toEqual({ tableId: 'table-x', rowId: 'row-5' });

    document.removeEventListener(VirtualizedTableEvent.TOGGLE_ROW, handler);
  });
});
