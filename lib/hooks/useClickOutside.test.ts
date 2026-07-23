import { renderHook } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import { describe, expect, it, vi } from 'vitest';

import { useClickOutside } from './useClickOutside';

describe('useClickOutside', () => {
  const setup = () => {
    const inside = document.createElement('div');
    const outside = document.createElement('div');
    document.body.append(inside, outside);

    const onClickOutside = vi.fn();
    const utils = renderHook(() => {
      useClickOutside({ current: inside }, onClickOutside);
    });

    return { inside, outside, onClickOutside, ...utils };
  };

  it('invokes the handler when clicking outside the ref element', () => {
    const { outside, onClickOutside } = setup();

    fireEvent.mouseDown(outside);

    expect(onClickOutside).toHaveBeenCalledTimes(1);
  });

  it('does not invoke the handler when clicking inside the ref element', () => {
    const { inside, onClickOutside } = setup();

    fireEvent.mouseDown(inside);

    expect(onClickOutside).not.toHaveBeenCalled();
  });

  it('stops listening after unmount', () => {
    const { outside, onClickOutside, unmount } = setup();

    unmount();
    fireEvent.mouseDown(outside);

    expect(onClickOutside).not.toHaveBeenCalled();
  });
});
