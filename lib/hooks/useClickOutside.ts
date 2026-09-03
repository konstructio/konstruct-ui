import { RefObject, useEffect } from 'react';

type Target = RefObject<HTMLElement | null> | undefined;

export const useClickOutside = (
  refs: Target | Target[],
  onClickOutside: () => void,
) => {
  useEffect(() => {
    const controller = new AbortController();
    const targets = Array.isArray(refs) ? refs : [refs];

    document.addEventListener(
      'mousedown',
      (event) => {
        const isInside = targets.some((ref) => {
          return ref?.current?.contains(event.target as Node);
        });

        if (!isInside) {
          onClickOutside();
        }
      },
      { signal: controller.signal },
    );

    return () => {
      controller.abort();
    };
  }, [refs, onClickOutside]);
};
