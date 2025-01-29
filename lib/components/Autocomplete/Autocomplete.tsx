import {
  ComponentRef,
  forwardRef,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';

import { useTheme } from '../../contexts';
import { cn } from '../../utils';

import { useAutocomplete } from './hooks';
import { List } from './components';
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
    const wrapperRef = useRef<ComponentRef<'div'>>(null);
    const inputRef = useRef<ComponentRef<'input'>>(null);
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
            className={cn(
              labelVariants({
                theme: inheritTheme,
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
              theme: inheritTheme,
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
