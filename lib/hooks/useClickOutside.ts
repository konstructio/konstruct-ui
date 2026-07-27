import { RefObject, useEffect } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  onClickOutside: () => void,
) => {
  useEffect(() => {
    const controller = new AbortController();

    document.addEventListener(
      'mousedown',
      (event) => {
        if (!ref.current?.contains(event.target as Node)) {
          onClickOutside();
        }
      },
      { signal: controller.signal },
    );

    return () => {
      controller.abort();
    };
  }, [ref, onClickOutside]);
};
