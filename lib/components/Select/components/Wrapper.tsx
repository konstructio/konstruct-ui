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

import { LoaderIcon } from '@/assets/icons/components';
import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { useSelectContext } from '../contexts';
import { SelectProps } from '../Select.types';
import {
  selectVariants,
  inputVariants,
  labelVariants,
} from '../Select.variants';
import { useSelect } from '../hooks/useSelect';

import { List } from './List/List';

export const Wrapper: ForwardRefExoticComponent<
  Omit<SelectProps, 'options'> & RefAttributes<ComponentRef<'input'>>
> = forwardRef<
  ComponentRef<'input'>,
  Omit<SelectProps, 'helperText' | 'options'>
>(
  (
    {
      additionalOptions,
      className,
      defaultValue,
      disabled = false,
      error,
      iconClassName,
      inputClassName,
      isInfiniteScrollEnabled = false,
      isLoading,
      isRequired,
      label,
      labelClassName,
      labelWrapperClassName,
      listClassName,
      listItemClassName,
      listItemSecondRowClassName,
      name,
      noOptionsText,
      placeholder,
      searchable = false,
      showSearchIcon,
      theme,
      wrapperClassName,
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
      options,
      searchTerm,
      value,
      setCanFilter,
      setSearchTerm,
      setValue,
      toggleOpen,
    } = useSelectContext();

    const internalValue = useMemo(() => {
      return options.find(({ value: optionValue }) => optionValue === value);
    }, [options, value]);

    const { wrapperRef, wrapperInputRef, handleOpen } = useSelect({
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
      setValue('');
      setSearchTerm(newValue ?? '');
      onSearchChange?.(newValue);

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
        className={cn('flex flex-col gap-2 w-full relative', wrapperClassName)}
        data-theme={theme}
      >
        {label ? (
          <div className={cn(labelWrapperClassName)}>
            <label
              id={htmlFor}
              className={cn(labelVariants({ className: labelClassName }))}
              htmlFor={htmlFor}
              onClick={() => !disabled && handleOpen()}
            >
              {label}
              {isRequired && (
                <span className="text-red-600 dark:text-red-500 ml-1">*</span>
              )}
            </label>
          </div>
        ) : null}

        <div
          ref={wrapperInputRef}
          id={htmlFor}
          className={cn(
            selectVariants({ className, hasError: !!error, disabled }),
          )}
          role="combobox"
          onClick={() => !disabled && toggleOpen(!isOpen)}
          aria-expanded={isOpen}
          tabIndex={isWrapperInputFocusable.current}
          aria-labelledby={htmlFor}
        >
          <div className="flex gap-2.5 items-center flex-1">
            {internalValue?.leftIcon && !showSearchIcon && (
              <span className="w-4 h-4 flex justify-center items-center dark:text-metal-50">
                {internalValue.leftIcon}
              </span>
            )}

            {showSearchIcon && (
              <Search
                className={cn(
                  'w-4',
                  'h-4',
                  'text-zinc-500',
                  'select-none',
                  'transition-colors',
                  'duration-300',
                  'dark:text-metal-300',
                  'dark:group-focus-within:text-metal-50',
                )}
              />
            )}

            {searchable ? (
              <input
                type="text"
                value={
                  isOpen ? searchTerm : (internalValue?.label ?? value ?? '')
                }
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
                  'flex-1 text-zinc-400 text-sm dark:text-metal-400 flex gap-2 items-center',
                  {
                    'text-red-700': !!error,
                    'select-none': !internalValue,
                    'text-metal-800 dark:text-metal-50': internalValue,
                    'text-metal-400/50 dark:text-metal-50/50': disabled,
                  },
                  internalValue?.wrapperClassNameOnSelectedValue,
                )}
              >
                {internalValue?.label || placeholder}{' '}
                {internalValue?.showRightComponentOnselectedValue
                  ? internalValue?.rightComponent
                  : null}
              </Typography>
            )}
          </div>

          {isLoading ? (
            <LoaderIcon
              size={16}
              className="text-metal-400 animate-spin select-none"
            />
          ) : (
            !showSearchIcon && (
              <ChevronUp
                data-state={isOpen ? 'open' : 'closed'}
                className={cn(
                  'w-4 h-4 text-zinc-500 transition-all duration-100 data-[state=open]:rotate-0 data-[state=closed]:rotate-180 select-none dark:group-focus-within:text-metal-50',
                  iconClassName,
                  {
                    'text-red-700': !!error,
                    'text-metal-400/50 dark:group-focus-within:text-zinc-500':
                      disabled,
                  },
                )}
              />
            )
          )}
        </div>

        <input
          ref={inputRef}
          type="text"
          name={name}
          className="hidden"
          aria-hidden="true"
          required={isRequired}
          inert
          defaultValue={internalValue?.value ?? value ?? undefined}
          {...delegated}
        />

        {isOpen && (
          <List
            ref={ulRef}
            additionalOptions={additionalOptions}
            className={listClassName}
            itemClassName={listItemClassName}
            name={name}
            wrapperInputRef={wrapperInputRef}
            inputRef={inputRef}
            options={options}
            isLoading={!!isLoading}
            searchable={searchable}
            listItemSecondRowClassName={listItemSecondRowClassName}
            isInfiniteScrollEnabled={isInfiniteScrollEnabled}
            onFetchMoreOptions={onFetchMoreOptions}
            noOptionsText={noOptionsText}
          />
        )}
      </div>
    );
  },
);
