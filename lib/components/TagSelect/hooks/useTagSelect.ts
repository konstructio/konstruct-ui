import { ComponentRef, useCallback, useEffect, useRef } from 'react';

import { useToggle } from '@/hooks';

export const useTagSelect = () => {
  const wrapperRef = useRef<ComponentRef<'div'>>(null);
  const [isOpen, toggleOpen] = useToggle(false);

  useEffect(() => {
    const controller = new AbortController();

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        toggleOpen(false);
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
  }, [toggleOpen, wrapperRef]);

  const handleOpenDropdown = useCallback(
    (value?: boolean) => toggleOpen(value),
    [toggleOpen],
  );

  return {
    isOpen,
    wrapperRef,
    handleOpenDropdown,
  };
};
