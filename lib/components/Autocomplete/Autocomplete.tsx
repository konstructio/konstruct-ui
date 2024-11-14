import {
  ElementRef,
  forwardRef,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';

import { useTheme } from '../../contexts';

import { useAutocomplete } from './hooks';
import { List } from './components/List';
import { AutocompleteProps } from './Autocomplete.types';
import { autocompleteVariants, labelVariants } from './Autocomplete.variants';

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      autoComplete = 'off',
      className,
      label,
      labelClassName,
      name,
      options,
      placeHolderEmptyValues = 'No values...',
      placeHolderEmptyValuesClassName,
      placeholder,
      theme,
      variant,
      onChange,
    },
    ref,
  ) => {
    const wrapperRef = useRef<ElementRef<'div'>>(null);
    const inputRef = useRef<ElementRef<'input'>>(null);
    const id = useId();
    const { theme: contextTheme } = useTheme();
    const inheritTheme = theme ?? contextTheme;

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
          <label
            htmlFor={name ?? id}
            className={labelVariants({
              theme: inheritTheme,
              variant,
              className: labelClassName,
            })}
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
          className={autocompleteVariants({
            theme: inheritTheme,
            variant,
            className,
          })}
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
              theme={inheritTheme}
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
