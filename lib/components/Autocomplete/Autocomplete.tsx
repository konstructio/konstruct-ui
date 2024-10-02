import { ElementRef, forwardRef, useImperativeHandle, useRef } from 'react';

import { AutocompleteProps } from './Autocomplete.types';
import { autocompleteVariants } from './Autocomplete.variants';
import { useAutocomplete } from './hooks';
import { List } from './components/List';

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      className,
      options,
      label,
      placeholder,
      placeHolderEmptyValues = 'No values...',
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
        {label ? <span className="pl-1 mb-2 text-base">{label}</span> : null}

        <input
          ref={inputRef}
          type="text"
          className={autocompleteVariants({ className })}
          onChange={autocomplete.handleChange}
          value={autocomplete.value}
          placeholder={placeholder}
        />

        {autocomplete.showOptions && (
          <div className="absolute z-10 top-full w-full rounded-md mt-1 border shadow-sm">
            <List
              inputRef={inputRef}
              placeholder={placeHolderEmptyValues}
              options={autocomplete.newOptions}
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
