import {
  ChangeEvent,
  ComponentRef,
  RefObject,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { useClickOutside } from '@/hooks';

import { filterByValue } from '../../../utils';

import { Option } from '../Autocomplete.types';

type UseAutocompleteProps = {
  options: Option[];
  inputRef: RefObject<ComponentRef<'input'> | null>;
  wrapperRef: RefObject<ComponentRef<'div'> | null>;
  onChange(value: string): void;
};

export const useAutocomplete = ({
  options,
  inputRef,
  wrapperRef,
  onChange,
}: UseAutocompleteProps) => {
  const [newOptions, setOptions] = useState<Option[]>(() => options ?? []);
  const [showOptions, setShowOptions] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    inputRef.current?.addEventListener('focus', () => setShowOptions(true), {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, [inputRef]);

  const handleClickOutside = useCallback(() => {
    setShowOptions(false);
  }, []);

  useClickOutside(wrapperRef, handleClickOutside);

  useEffect(() => {
    const controller = new AbortController();

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowOptions(false);
        inputRef.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyboard, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, [inputRef]);

  useEffect(() => {
    const controller = new AbortController();

    wrapperRef.current?.addEventListener(
      'focusout',
      (event) => {
        if (!wrapperRef.current?.contains(event.relatedTarget as Node)) {
          setShowOptions(false);
        }
      },
      { signal: controller.signal },
    );

    return () => {
      controller.abort();
    };
  }, [wrapperRef]);

  const handleFilter = useCallback(
    (value: string) => {
      if (value.length === 0) {
        setOptions(options);
      } else {
        const optionsParsed = options.map(({ value }) => value);
        const optionsFiltered = filterByValue(optionsParsed, value).map(
          (value) => ({ value }),
        );

        setOptions(optionsFiltered);
      }
    },
    [options],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      handleFilter(event.target.value);
      onChange?.(event.target.value);
    },
    [handleFilter, onChange],
  );

  const handleSelectValue = useCallback(
    (value: string) => {
      setValue(value);
      handleFilter(value);
      onChange?.(value);
      setShowOptions(false);
    },
    [handleFilter, onChange],
  );

  return {
    inputRef,
    newOptions,
    showOptions,
    value,
    handleChange,
    handleSelectValue,
  };
};
