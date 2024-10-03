import { ElementRef, forwardRef, useImperativeHandle, useRef } from 'react';

import { useAutocomplete } from './hooks';
import { List } from './components/List';
import { AutocompleteProps } from './Autocomplete.types';
import { autocompleteVariants, labelVariants } from './Autocomplete.variants';

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      className,
      label,
      labelClassName,
      options,
      placeHolderEmptyValues = 'No values...',
      placeHolderEmptyValuesClassName,
      placeholder,
      variant,
      theme,
      onChange,
    },
    ref,
  ) => {
    const wrapperRef = useRef<ElementRef<'div'>>(null);
    const inputRef = useRef<ElementRef<'input'>>(null);

    useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

    const autocomplete = useAutocomplete({
      options,
      inputRef,
      wrapperRef,
      onChange,
    });

    return (
      <div ref={wrapperRef} className="relative flex flex-col">
        {label ? (
          <span
            className={labelVariants({
              theme,
              variant,
              className: labelClassName,
            })}
          >
            {label}
          </span>
        ) : null}

        <input
          ref={inputRef}
          type="text"
          className={autocompleteVariants({ theme, variant, className })}
          onChange={autocomplete.handleChange}
          value={autocomplete.value}
          placeholder={placeholder}
        />

        {autocomplete.showOptions && (
          <div className="absolute z-10 top-full w-full rounded-md mt-1 border shadow-sm">
            <List
              className={className}
              inputRef={inputRef}
              wrapperRef={wrapperRef}
              options={autocomplete.newOptions}
              placeholder={placeHolderEmptyValues}
              placeholderClassName={placeHolderEmptyValuesClassName}
              variant={variant}
              theme={theme}
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
