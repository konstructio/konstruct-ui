import {
  ChangeEvent,
  RefObject,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Option } from '../Autocomplete.types';

type UseAutocompleteProps = {
  options: Option[];
  inputRef: RefObject<HTMLInputElement>;
  wrapperRef: RefObject<HTMLDivElement>;
};

export const useAutocomplete = ({
  options,
  inputRef,
  wrapperRef,
}: UseAutocompleteProps) => {
  const [newOptions] = useState<Option[]>(() => options ?? []);
  const [showOptions, setShowOptions] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const handleFocus = (focus: boolean) => setShowOptions(focus);

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowOptions(false);
        inputRef.current?.blur();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        handleFocus(false);
      }
    };

    inputRef.current?.addEventListener('focus', () => handleFocus(true), {
      signal: controller.signal,
    });

    document.addEventListener('keydown', handleKeyboard, {
      signal: controller.signal,
    });

    document.addEventListener('mousedown', handleClickOutside, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, [inputRef, wrapperRef]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
    [],
  );

  const handleSelectValue = useCallback((value: string) => setValue(value), []);

  return {
    inputRef,
    newOptions,
    showOptions,
    value,
    handleChange,
    handleSelectValue,
  };
};
