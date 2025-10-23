import { ComponentRef, RefObject, useCallback, useEffect, useRef } from 'react';

import { useDropdownContext } from '../contexts';

type UseDropDownParams = {
  ulRef: RefObject<ComponentRef<'ul'> | null>;
  inputRef?: RefObject<ComponentRef<'input'> | null>;
  disabled: boolean;
};

export const useDropdown = ({
  ulRef,
  inputRef,
  disabled,
}: UseDropDownParams) => {
  const wrapperRef = useRef<ComponentRef<'div'>>(null);
  const wrapperInputRef = useRef<ComponentRef<'div'>>(null);
  const { toggleOpen } = useDropdownContext();

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
        if (!disabled) {
          toggleOpen(true);
        }
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

  const handleOpen = useCallback(() => {
    toggleOpen(true);
    requestAnimationFrame(() => inputRef?.current?.focus());
  }, [inputRef, toggleOpen]);

  return {
    wrapperRef,
    wrapperInputRef,
    handleOpen,
  };
};
