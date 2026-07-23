import { describe, expect, it, vi } from 'vitest';

import {
  addFilterEventListener,
  FilterEvent,
  LegacyFilterEvent,
  resetEvent,
  sendOpenFilterEvent,
} from '.';

describe('Filter events', () => {
  it('dispatches both the current and legacy event names with the same detail', () => {
    const current = vi.fn();
    const legacy = vi.fn();

    document.addEventListener(FilterEvent.OPEN, current);
    document.addEventListener(LegacyFilterEvent.OPEN, legacy);
    sendOpenFilterEvent('dropdown-1');

    expect(current).toHaveBeenCalledTimes(1);
    expect(legacy).toHaveBeenCalledTimes(1);
    expect((current.mock.calls[0][0] as CustomEvent<string>).detail).toBe(
      'dropdown-1',
    );
    expect((legacy.mock.calls[0][0] as CustomEvent<string>).detail).toBe(
      'dropdown-1',
    );

    document.removeEventListener(FilterEvent.OPEN, current);
    document.removeEventListener(LegacyFilterEvent.OPEN, legacy);
  });

  it('invokes an addFilterEventListener handler exactly once per send', () => {
    const controller = new AbortController();
    const handler = vi.fn();

    addFilterEventListener<string>(FilterEvent.OPEN, handler, {
      signal: controller.signal,
    });
    sendOpenFilterEvent('dropdown-1');

    expect(handler).toHaveBeenCalledTimes(1);

    controller.abort();
  });

  it('invokes the handler exactly once for a raw legacy dispatch', () => {
    const controller = new AbortController();
    const handler = vi.fn();

    addFilterEventListener<string | undefined>(FilterEvent.RESET, handler, {
      signal: controller.signal,
    });
    document.dispatchEvent(
      new CustomEvent<string>(LegacyFilterEvent.RESET, { detail: 'scope-a' }),
    );

    expect(handler).toHaveBeenCalledTimes(1);
    expect((handler.mock.calls[0][0] as CustomEvent<string>).detail).toBe(
      'scope-a',
    );

    controller.abort();
  });

  it('invokes the handler exactly once per reset with its scope', () => {
    const controller = new AbortController();
    const handler = vi.fn();

    addFilterEventListener<string | undefined>(FilterEvent.RESET, handler, {
      signal: controller.signal,
    });
    resetEvent('scope-a');

    expect(handler).toHaveBeenCalledTimes(1);
    expect((handler.mock.calls[0][0] as CustomEvent<string>).detail).toBe(
      'scope-a',
    );

    controller.abort();
  });

  it('stops invoking the handler after the listener is aborted', () => {
    const controller = new AbortController();
    const handler = vi.fn();

    addFilterEventListener<string>(FilterEvent.OPEN, handler, {
      signal: controller.signal,
    });
    controller.abort();
    sendOpenFilterEvent('dropdown-1');

    expect(handler).not.toHaveBeenCalled();
  });
});
