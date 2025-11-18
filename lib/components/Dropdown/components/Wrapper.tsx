import { ChevronUp, Search } from 'lucide-react';
import {
  ChangeEvent,
  ComponentRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';

import { Loading } from '@/components/Loading/Loading';
import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { useDropdownContext } from '../contexts';
import { DropdownProps } from '../Dropdown.types';
import {
  dropdownVariants,
  inputVariants,
  labelVariants,
} from '../Dropdown.variants';
import { useDropdown } from '../hooks/useDropdown';

import { List } from './List/List';

export const Wrapper: ForwardRefExoticComponent<
  DropdownProps & RefAttributes<ComponentRef<'input'>>
> = forwardRef<ComponentRef<'input'>, Omit<DropdownProps, 'helperText'>>(
  (
    {
      additionalOptions,
      className,
      defaultValue,
      disabled = false,
      error,
      iconClassName,
      inputClassName,
      isLoading,
      isRequired,
      label,
      labelClassName,
      listClassName,
      listItemClassName,
      listItemSecondRowClassName,
      name,
      options,
      placeholder,
      searchable = false,
      showSearchIcon,
      theme,
      wrapperClassName,
      isInfiniteScrollEnabled = false,
      onFetchMoreOptions,
      onBlur,
      onSearchChange,
      ...delegated
    },
    ref,
  ) => {
    const id = useId();
    const inputRef = useRef<ComponentRef<'input'>>(null);
    const ulRef = useRef<ComponentRef<'ul'>>(null);
    const isWrapperInputFocusable = useRef<number>(0);
    const {
      isOpen,
      searchTerm,
      value,
      canFilter,
      setValue,
      setSearchTerm,
      setCanFilter,
    } = useDropdownContext();

    const internalValue = useMemo(() => {
      return options.find(({ value: optionValue }) => optionValue === value);
    }, [options, value]);

    const { wrapperRef, wrapperInputRef, handleOpen } = useDropdown({
      ulRef,
      inputRef,
      disabled,
      internalValue,
      onBlur,
    });

    const htmlFor = name ? `${id}-${name}` : id;

    useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

    useEffect(() => {
      if (defaultValue && !value) {
        const defaultOption =
          options && options.find((option) => option.value === defaultValue);

        if (defaultOption) {
          setValue(defaultOption.value);
        }
      }
    }, [defaultValue, options, setValue, value]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setCanFilter(true);
      onSearchChange?.(newValue);
      setValue('');
      setSearchTerm(newValue || '');

      // If there's an exact match, select it
      const exactMatch = options.find(
        (option) =>
          option.value.toLocaleLowerCase() === newValue.toLocaleLowerCase(),
      );

      if (exactMatch) {
        setValue(exactMatch.value);
      } else {
        setValue(internalValue?.value ?? '');
      }
    };

    return (
      <div
        ref={wrapperRef}
        className={cn('flex flex-col w-full relative', wrapperClassName)}
        data-theme={theme}
      >
        {label ? (
          <label
            id={htmlFor}
            className={cn(labelVariants({ className: labelClassName }))}
            htmlFor={htmlFor}
            onClick={() => !disabled && handleOpen()}
          >
            {label}
            {isRequired && <span className="text-red-600 ml-1">*</span>}
          </label>
        ) : null}

        <div
          ref={wrapperInputRef}
          id={htmlFor}
          className={cn(
            dropdownVariants({ className, hasError: !!error, disabled }),
          )}
          role="combobox"
          onClick={() => !disabled && handleOpen()}
          aria-expanded={isOpen}
          tabIndex={isWrapperInputFocusable.current}
          aria-labelledby={htmlFor}
        >
          <div className="flex gap-2.5 items-center flex-1">
            {internalValue?.leftIcon && !showSearchIcon && (
              <span className="w-4 h-4 flex justify-center items-center dark:text-slate-50">
                {internalValue.leftIcon}
              </span>
            )}

            {showSearchIcon && (
              <Search className="w-4 h-4 text-zinc-500 select-none dark:text-slate-300 dark:group-focus-within:text-slate-50 transition-colors duration-300" />
            )}

            {searchable ? (
              <input
                ref={inputRef}
                type="text"
                value={canFilter ? searchTerm : internalValue?.value}
                name={name}
                onChange={handleInputChange}
                placeholder={placeholder}
                className={cn(inputVariants({ className: inputClassName }), {
                  'text-red-700 placeholder:text-red-700': !!error,
                })}
                onClick={(e) => {
                  e.stopPropagation();

                  if (!disabled) {
                    handleOpen();
                  }
                }}
                aria-label={label || placeholder}
                aria-labelledby={htmlFor}
                required={isRequired}
                autoComplete="off"
                autoCapitalize="words"
                disabled={disabled}
                tabIndex={-1}
                {...delegated}
              />
            ) : (
              <Typography
                variant="body2"
                className={cn(
                  'flex-1 text-zinc-400 text-sm dark:text-slate-400',
                  {
                    'text-red-700': !!error,
                    'select-none': !internalValue,
                    'text-slate-800 dark:text-slate-50': internalValue,
                    'text-slate-400/50 dark:text-slate-50/50': disabled,
                  },
                )}
              >
                {internalValue?.label || placeholder}
              </Typography>
            )}
          </div>

          {isLoading ? (
            <Loading className="w-4 h-4 text-zinc-500 select-none" />
          ) : (
            !showSearchIcon && (
              <ChevronUp
                data-state={isOpen ? 'open' : 'closed'}
                className={cn(
                  'w-4 h-4 text-zinc-500 transition-all duration-100 data-[state=open]:rotate-0 data-[state=closed]:rotate-180 select-none dark:group-focus-within:text-slate-50',
                  iconClassName,
                  {
                    'text-red-700': !!error,
                    'text-slate-400/50 dark:group-focus-within:text-zinc-500':
                      disabled,
                  },
                )}
              />
            )
          )}
        </div>

        {!searchable && (
          <input
            ref={inputRef}
            type="text"
            name={name}
            className="hidden"
            aria-hidden="true"
            required={isRequired}
            inert
            {...delegated}
          />
        )}

        {isOpen && (
          <List
            ref={ulRef}
            additionalOptions={additionalOptions}
            className={listClassName}
            itemClassName={listItemClassName}
            name={name}
            wrapperRef={wrapperRef}
            wrapperInputRef={wrapperInputRef}
            inputRef={inputRef}
            options={options}
            isLoading={!!isLoading}
            searchable={searchable}
            listItemSecondRowClassName={listItemSecondRowClassName}
            isInfiniteScrollEnabled={isInfiniteScrollEnabled}
            onFetchMoreOptions={onFetchMoreOptions}
          />
        )}
      </div>
    );
  },
);
