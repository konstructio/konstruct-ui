import { ComponentRef, useCallback, useEffect, useRef } from 'react';

import { useClickOutside } from '@/hooks';

import { useMultiSelectDropdown as useMultiSelectDropdownContext } from '../contexts';

export const useMultiSelectDropdown = () => {
  const wrapperRef = useRef<ComponentRef<'div'>>(null);
  const { onOpen } = useMultiSelectDropdownContext();

  const handleClickOutside = useCallback(() => {
    onOpen(false);
  }, [onOpen]);

  useClickOutside(wrapperRef, handleClickOutside);

  useEffect(() => {
    const controller = new AbortController();

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyboard, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, [onOpen]);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement | null;
    const parentWithDataValue = target?.closest('[data-value]');

    if (!parentWithDataValue) {
      onOpen(true);
    }
  };

  return {
    wrapperRef,
    handleOpen,
  };
};
