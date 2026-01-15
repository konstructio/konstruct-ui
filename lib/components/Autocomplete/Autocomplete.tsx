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

/**
 * An autocomplete/typeahead input component that suggests options as you type.
 *
 * @example
 * ```tsx
 * // Basic autocomplete
 * <Autocomplete
 *   label="Programming Language"
 *   options={[
 *     { value: 'JavaScript' },
 *     { value: 'TypeScript' },
 *     { value: 'Python' },
 *   ]}
 *   placeholder="Type to search..."
 *   onChange={(value) => setLanguage(value)}
 * />
 *
 * // With custom empty state
 * <Autocomplete
 *   options={users}
 *   placeholder="Search users..."
 *   placeHolderEmptyValues="No users found"
 *   onChange={handleUserSelect}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-autocomplete--docs Storybook}
 */
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
                className: labelClassName,
              }),
            )}
          >
            {label}
          </label>
        ) : null}

        <input
          ref={inputRef}
          id={label ? (name ?? id) : undefined}
          type="text"
          name={name}
          role="combobox"
          autoComplete={autoComplete}
          className={cn(autocompleteVariants({ className }))}
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
