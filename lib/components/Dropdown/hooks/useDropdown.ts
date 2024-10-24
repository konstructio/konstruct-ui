import { ElementRef, useCallback, useEffect, useRef, useState } from 'react';

import { useToggle } from '../../../hooks';

export const useDropdown = () => {
  const wrapperRef = useRef<ElementRef<'div'>>(null);
  const [isOpen, toggleOpen] = useToggle(false);
  const [value, setValue] = useState('');

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

  const handleOpenDropdown = useCallback(() => toggleOpen(), [toggleOpen]);

  const handleOpenDropdownIfClosed = useCallback(() => {
    if (!isOpen) {
      toggleOpen();
    }
  }, [isOpen, toggleOpen]);

  const handleClickValue = useCallback(
    (value: string) => {
      toggleOpen(false);
      setValue(value);
    },
    [toggleOpen],
  );

  return {
    isOpen,
    value,
    wrapperRef,
    handleClickValue,
    handleOpenDropdown,
    handleOpenDropdownIfClosed,
  };
};
