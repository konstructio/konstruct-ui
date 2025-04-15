'use client';
import {
  ComponentRef,
  forwardRef,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';

import { cn } from '@/utils';

import { AutocompleteProps } from './Autocomplete.types';
import { autocompleteVariants, labelVariants } from './Autocomplete.variants';
import { List } from './components';
import { useAutocomplete } from './hooks';

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      autoComplete = 'off',
      className,
      label,
      labelClassName,
      name,
      options,
      placeholder,
      placeHolderEmptyValues = 'No values...',
      placeHolderEmptyValuesClassName,
      theme,
      variant,
      onChange,
    },
    ref,
  ) => {
    const wrapperRef = useRef<ComponentRef<'div'>>(null);
    const inputRef = useRef<ComponentRef<'input'>>(null);
    const id = useId();

    useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

    const autocomplete = useAutocomplete({
      options,
      inputRef,
      wrapperRef,
      onChange,
    });

    return (
      <div
        ref={wrapperRef}
        className="relative flex flex-col"
        data-theme={theme}
      >
        {label ? (
          <label
            htmlFor={name ?? id}
            className={cn(
              labelVariants({
                variant,
                className: labelClassName,
              }),
            )}
          >
            {label}
          </label>
        ) : null}

        <input
          ref={inputRef}
          id={name ?? id}
          type="text"
          name={name}
          role="combobox"
          autoComplete={autoComplete}
          className={cn(
            autocompleteVariants({
              variant,
              className,
            }),
          )}
          onChange={autocomplete.handleChange}
          value={autocomplete.value}
          placeholder={placeholder}
          aria-expanded={autocomplete.showOptions ? 'true' : 'false'}
        />

        {autocomplete.showOptions && (
          <div className="absolute z-10 top-full w-full rounded-md mt-1 border shadow-sm border-zinc-200 overflow-hidden">
            <List
              className={className}
              inputRef={inputRef}
              wrapperRef={wrapperRef}
              options={autocomplete.newOptions}
              placeholder={placeHolderEmptyValues}
              placeholderClassName={placeHolderEmptyValuesClassName}
              variant={variant}
              onClick={autocomplete.handleSelectValue}
            />
          </div>
        )}
      </div>
    );
  },
);

Autocomplete.displayName = 'Autocomplete';

export { Autocomplete };
