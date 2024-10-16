import { ElementRef, useCallback, useEffect, useRef, useState } from 'react';

import { useToggle } from '../../../hooks';
import { TagProps } from '../../Tag/Tag.types';

export const useTagSelect = () => {
  const wrapperRef = useRef<ElementRef<'div'>>(null);
  const [isOpen, toggleOpen] = useToggle(false);
  const [selectedTag, setSelectedTag] = useState<TagProps | null>(null);
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

  const handleOpenDropdown = useCallback(() => {
    toggleOpen();
  }, [toggleOpen]);

  const handleClickTag = useCallback(
    (tag: TagProps) => {
      setSelectedTag(tag);
      toggleOpen(false);
      setValue(tag.label);
    },
    [toggleOpen],
  );

  return {
    isOpen,
    selectedTag,
    value,
    wrapperRef,
    handleClickTag,
    handleOpenDropdown,
  };
};
