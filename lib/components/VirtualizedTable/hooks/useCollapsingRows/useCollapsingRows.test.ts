import { act, renderHook } from '@testing-library/react';

import { useCollapsingRows } from './useCollapsingRows';

describe('useCollapsingRows', () => {
  const setup = (initialIds: string[]) =>
    renderHook(({ ids }) => useCollapsingRows(ids), {
      initialProps: { ids: initialIds },
    });

  it('starts with no collapsing rows', () => {
    const { result } = setup(['a']);

    expect(result.current.collapsingIds.size).toBe(0);
  });

  it('marks a row as collapsing when it leaves the expanded ids', () => {
    const { result, rerender } = setup(['a', 'b']);

    rerender({ ids: ['b'] });

    expect([...result.current.collapsingIds]).toEqual(['a']);
  });

  it('clears the row once its collapse ends', () => {
    const { result, rerender } = setup(['a']);

    rerender({ ids: [] });
    act(() => result.current.handleCollapseEnd('a'));

    expect(result.current.collapsingIds.size).toBe(0);
  });

  it('stops collapsing a row that is expanded again', () => {
    const { result, rerender } = setup(['a']);

    rerender({ ids: [] });
    rerender({ ids: ['a'] });

    expect(result.current.collapsingIds.size).toBe(0);
  });
});
