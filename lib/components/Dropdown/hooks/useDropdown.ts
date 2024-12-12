import { ComponentRef, RefObject, useCallback, useEffect, useRef } from 'react';

import { useDropdownContext } from '../contexts';

type UseDropDownParams = {
  ulRef: RefObject<ComponentRef<'ul'> | null>;
};

export const useDropdown = ({ ulRef }: UseDropDownParams) => {
  const wrapperRef = useRef<ComponentRef<'div'>>(null);
  const wrapperInputRef = useRef<ComponentRef<'div'>>(null);
  const { isOpen, toggleOpen } = useDropdownContext();

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

    document.addEventListener(
      'visibilitychange',
      () => {
        if (document.hidden) {
          toggleOpen(false);
        }
      },
      {
        signal: controller.signal,
      },
    );

    wrapperInputRef.current?.addEventListener(
      'focus',
      () => {
        toggleOpen(true);
      },
      { signal: controller.signal },
    );

    return () => {
      controller.abort();
    };
  }, [toggleOpen, wrapperRef]);

  useEffect(() => {
    const controller = new AbortController();

    wrapperInputRef.current?.addEventListener(
      'keydown',
      (event: KeyboardEvent) => {
        if (event.key === 'ArrowDown') {
          const firstItem = ulRef.current?.querySelector('li');

          if (firstItem) {
            firstItem.focus();
          }
        }
      },
      { signal: controller.signal },
    );

    return () => {
      controller.abort();
    };
  }, [wrapperInputRef, ulRef]);

  const handleOpen = useCallback(() => toggleOpen(true), [toggleOpen]);

  const handleOpenIfClosed = useCallback(() => {
    if (!isOpen) {
      toggleOpen(false);
    }
  }, [isOpen, toggleOpen]);

  return {
    wrapperRef,
    wrapperInputRef,
    handleOpen,
    handleOpenIfClosed,
  };
};
