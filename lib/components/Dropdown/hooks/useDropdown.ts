import { ComponentRef, RefObject, useCallback, useEffect, useRef } from 'react';

import { useDropdownContext } from '../contexts';
import { DropdownProps, Option } from '../Dropdown.types';

type UseDropDownParams = {
  ulRef: RefObject<ComponentRef<'ul'> | null>;
  inputRef?: RefObject<ComponentRef<'input'> | null>;
  disabled: boolean;
  internalValue?: Option;
  onBlur?: DropdownProps['onBlur'];
};

export const useDropdown = ({
  ulRef,
  inputRef,
  disabled,
  internalValue,
  onBlur,
}: UseDropDownParams) => {
  const wrapperRef = useRef<ComponentRef<'div'>>(null);
  const wrapperInputRef = useRef<ComponentRef<'div'>>(null);
  const { value, setSearchTerm, setCanFilter, toggleOpen } =
    useDropdownContext();

  useEffect(() => {
    const controller = new AbortController();

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.relatedTarget as Node)) {
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

  useEffect(() => {
    const controller = new AbortController();

    inputRef?.current?.addEventListener(
      'focusin',
      () => {
        setSearchTerm(internalValue?.value ?? '');
        setCanFilter(false);
      },
      { signal: controller.signal },
    );

    inputRef?.current?.addEventListener(
      'focusout',
      () => {
        setCanFilter(true);
      },
      { signal: controller.signal },
    );

    wrapperInputRef.current?.addEventListener(
      'focus',
      () => {
        setCanFilter(false);
      },
      { signal: controller.signal },
    );

    wrapperRef.current?.addEventListener(
      'focusout',
      (event) => {
        if (!wrapperRef.current?.contains(event.relatedTarget as Node)) {
          toggleOpen(false);
        }
      },
      { signal: controller.signal },
    );

    return () => {
      controller.abort();
    };
  }, [value]);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.value = value
        ? (internalValue?.value as string) || ''
        : '';
    }
  }, [internalValue, value]);

  useEffect(() => {
    const controller = new AbortController();

    wrapperRef.current?.addEventListener('focusout', (event) => {
      const newFocusElement = event.relatedTarget as Node;

      if (!newFocusElement || !wrapperRef.current?.contains(newFocusElement)) {
        if (!inputRef?.current?.value) {
          onBlur?.();
        }
      }
    });

    return () => {
      controller.abort();
    };
  }, [toggleOpen, wrapperRef, setSearchTerm, onBlur, value]);

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
