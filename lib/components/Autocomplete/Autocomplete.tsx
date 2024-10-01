import { ElementRef, forwardRef, useImperativeHandle, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { AutocompleteProps } from './Autocomplete.types';
import { autocompleteVariants } from './Autocomplete.variants';
import { useAutocomplete } from './hooks';

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  ({ className, options, label, placeholder }, ref) => {
    const inputRef = useRef<ElementRef<'input'>>(null);
    const wrapperRef = useRef<ElementRef<'div'>>(null);

    const { newOptions, showOptions, value, handleChange, handleSelectValue } =
      useAutocomplete({ options, inputRef, wrapperRef });

    useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

    return (
      <div ref={wrapperRef} className="relative flex flex-col">
        {label ? <span className="pl-1 mb-2 text-base">{label}</span> : null}

        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            className={autocompleteVariants({ className })}
            onChange={handleChange}
            value={value}
            placeholder={placeholder}
          />
          {/* <ArrowDown className="w-4 h-4 absolute right-2 top-0 translate-y-[50%] text-current" /> */}
        </div>

        <div
          className={twMerge(
            'absolute z-10 top-full w-full rounded-md mt-1 border shadow-sm',
            !showOptions && 'hidden',
          )}
        >
          <ul className="max-h-[250px] overflow-y-auto">
            {newOptions.map(({ value }) => (
              <li key={value}>
                <button
                  type="button"
                  role="button"
                  className="cursor-pointer hover:bg-slate-50 px-3 py-1.5 w-full text-left"
                  onClick={() => handleSelectValue(value)}
                >
                  {value}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  },
);

Autocomplete.displayName = 'Autocomplete';

export { Autocomplete };
