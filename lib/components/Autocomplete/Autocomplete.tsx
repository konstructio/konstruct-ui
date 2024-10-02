import { ElementRef, forwardRef, useImperativeHandle, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { AutocompleteProps } from './Autocomplete.types';
import { autocompleteVariants } from './Autocomplete.variants';
import { useAutocomplete, useNavigationList } from './hooks';

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
    const inputRef = useRef<ElementRef<'input'>>(null);
    const wrapperRef = useRef<ElementRef<'div'>>(null);
    const ulRef = useRef<ElementRef<'ul'>>(null);

    useNavigationList({ ulRef: ulRef.current });
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

        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            className={autocompleteVariants({ className })}
            onChange={autocomplete.handleChange}
            value={autocomplete.value}
            placeholder={placeholder}
          />
        </div>

        <div
          className={twMerge(
            'absolute z-10 top-full w-full rounded-md mt-1 border shadow-sm',
            !autocomplete.showOptions && 'hidden',
          )}
        >
          <span className="p-1 text-center w-full block">
            {autocomplete.newOptions.length === 0
              ? placeHolderEmptyValues
              : null}
          </span>

          {autocomplete.newOptions.length > 0 ? (
            <ul ref={ulRef} className="max-h-[250px] overflow-y-auto">
              {autocomplete.newOptions.map(({ value }) => (
                <li key={value} tabIndex={0}>
                  <button
                    type="button"
                    role="button"
                    className="cursor-pointer hover:bg-slate-50 px-3 py-1.5 w-full text-left"
                    onClick={() => autocomplete.handleSelectValue(value)}
                  >
                    {value}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    );
  },
);

Autocomplete.displayName = 'Autocomplete';

export { Autocomplete };
