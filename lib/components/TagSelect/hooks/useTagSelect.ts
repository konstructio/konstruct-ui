import { ComponentRef, useCallback, useEffect, useRef } from 'react';

import { useTagSelect as useTagSelectContext } from '../contexts';

export const useTagSelect = () => {
  const wrapperRef = useRef<ComponentRef<'div'>>(null);
  const { onOpen } = useTagSelectContext();

  useEffect(() => {
    const controller = new AbortController();

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        onOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyboard, {
      signal: controller.signal,
    });

    document.addEventListener('mousedown', handleClickOutside, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, [onOpen, wrapperRef]);

  const handleOpen = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const target = event.target as HTMLElement | null;
      const parentWithDataValue = target?.closest('[data-value]');

      if (!parentWithDataValue) {
        onOpen(true);
      }
    },
    [onOpen],
  );

  return {
    wrapperRef,
    handleOpen,
  };
};
