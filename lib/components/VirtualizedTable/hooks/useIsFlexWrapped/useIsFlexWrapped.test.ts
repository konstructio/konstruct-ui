import { act, renderHook } from '@testing-library/react';

import { useIsFlexWrapped } from './useIsFlexWrapped';

describe('useIsFlexWrapped', () => {
  let notify: () => void = () => undefined;

  const setup = (lastChildTop: number) => {
    const container = document.createElement('div');
    const first = document.createElement('div');
    const last = document.createElement('div');

    Object.defineProperty(first, 'offsetTop', { value: 0 });
    Object.defineProperty(last, 'offsetTop', {
      get: () => lastChildTop,
    });
    container.append(first, last);

    const { result } = renderHook(() =>
      useIsFlexWrapped({ current: container }),
    );

    return { result };
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubGlobal(
      'ResizeObserver',
      class {
        constructor(callback: () => void) {
          notify = callback;
        }

        observe() {}

        disconnect() {}
      },
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should report false while the last child sits on the first line', () => {
    const { result } = setup(0);

    act(() => notify());

    expect(result.current).toBe(false);
  });

  it('should report true once the last child wraps onto a new line', () => {
    const { result } = setup(56);

    act(() => notify());

    expect(result.current).toBe(true);
  });
});
