import { renderHook, waitFor } from '@testing-library/react';

import { useVirtualizedTableReady } from './useVirtualizedTableReady';

describe('useVirtualizedTableReady', () => {
  it('should report false until the table content has loaded and true afterwards', async () => {
    const { result } = renderHook(() => useVirtualizedTableReady());

    expect(result.current).toBe(false);

    await waitFor(() => {
      expect(result.current).toBe(true);
    });
  });

  it('should stay true for later subscribers once the content is loaded', () => {
    const { result } = renderHook(() => useVirtualizedTableReady());

    expect(result.current).toBe(true);
  });
});
