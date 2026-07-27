import { ComponentRef, RefObject, useCallback, useEffect, useRef } from 'react';

import { useClickOutside } from '@/hooks';

import { useSelectContext } from '../contexts';
import { SelectProps, Option } from '../Select.types';

type UseSelectParams = {
  inputRef?: RefObject<ComponentRef<'input'> | null>;
  searchInputRef?: RefObject<ComponentRef<'input'> | null>;
  internalValue?: Option;
  onBlur?: SelectProps['onBlur'];
};

export const useSelect = ({
  inputRef,
  searchInputRef,
  internalValue,
  onBlur,
}: UseSelectParams) => {
  const wrapperRef = useRef<ComponentRef<'div'>>(null);
  const wrapperInputRef = useRef<ComponentRef<'div'>>(null);
  const { value, setSearchTerm, setCanFilter, toggleOpen } = useSelectContext();

  const handleClickOutside = useCallback(() => {
    toggleOpen(false);
  }, [toggleOpen]);

  useClickOutside(wrapperRef, handleClickOutside);

  useEffect(() => {
    const controller = new AbortController();

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyboard, {
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

    return () => {
      controller.abort();
    };
  }, [toggleOpen, wrapperRef]);

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

  const handleOpen = () => {
    toggleOpen(true);
    requestAnimationFrame(() => searchInputRef?.current?.focus());
  };

  return {
    wrapperRef,
    wrapperInputRef,
    handleOpen,
  };
};
