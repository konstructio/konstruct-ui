import {
  ComponentRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
  ChangeEvent,
} from 'react';
import { ChevronUp } from 'react-feather';

import { Loading } from '@/components/Loading/Loading';
import { cn } from '@/utils';

import { useDropdownContext } from '../contexts';
import { DropdownProps } from '../Dropdown.types';
import { dropdownVariants, labelVariants } from '../Dropdown.variants';
import { useDropdown } from '../hooks/useDropdown';

import { List } from './List/List';
import { Typography } from '@/components/Typography/Typography';

export const Wrapper: ForwardRefExoticComponent<
  DropdownProps & RefAttributes<ComponentRef<'input'>>
> = forwardRef<ComponentRef<'input'>, DropdownProps>(
  (
    {
      className,
      defaultValue,
      iconClassName,
      isLoading,
      label,
      labelClassName,
      listClassName,
      listItemClassName,
      name,
      options,
      placeholder,
      required,
      searchable = false,
      theme,
      wrapperClassName,
    },
    ref,
  ) => {
    const id = useId();
    const inputRef = useRef<ComponentRef<'input'>>(null);
    const ulRef = useRef<ComponentRef<'ul'>>(null);
    const { wrapperRef, wrapperInputRef, handleOpen, handleOpenIfClosed } =
      useDropdown({ ulRef });
    const { isOpen, toggleOpen, value, setValue, setSearchTerm, searchTerm } =
      useDropdownContext();
    const htmlFor = name ? `${id}-${name}` : id;

    useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

    const internalValue = useMemo(() => {
      return options.find(({ value: optionValue }) => optionValue === value);
    }, [options, value]);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.value = value ? (internalValue?.value as string) : '';
      }
    }, [internalValue, value]);

    useEffect(() => {
      if (defaultValue && !value) {
        const defaultOption =
          options && options.find((option) => option.value === defaultValue);

        if (defaultOption) {
          setValue(defaultOption.value);
        }
      }
    }, [defaultValue, options, setValue, value]);

    useEffect(() => {
      const controller = new AbortController();

      wrapperRef.current?.addEventListener('focusout', (event) => {
        const newFocusElement = event.relatedTarget as Node;

        if (
          !newFocusElement ||
          !wrapperRef.current?.contains(newFocusElement)
        ) {
          toggleOpen(false);
          setSearchTerm('');
        }
      });

      return () => {
        controller.abort();
      };
    }, [toggleOpen, wrapperRef, setSearchTerm]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setSearchTerm(newValue);

      // If there's an exact match, select it
      const exactMatch = options.find(
        (option) => option.value.toLowerCase() === newValue.toLowerCase(),
      );
      if (exactMatch) {
        setValue(exactMatch.value);
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
            onClick={handleOpenIfClosed}
          >
            {label}
            {required ? <span className="text-red-500 ml-1">*</span> : null}
          </label>
        ) : null}

        <div
          ref={wrapperInputRef}
          id={htmlFor}
          className={cn(dropdownVariants({ className }))}
          role="combobox"
          onClick={handleOpen}
          aria-expanded={isOpen}
          tabIndex={0}
          aria-labelledby={htmlFor}
        >
          <div className="flex gap-3 items-center flex-1">
            {!isOpen && internalValue?.leftIcon && (
              <span className="w-4 h-4 flex justify-center items-center">
                {internalValue.leftIcon}
              </span>
            )}
            {searchable ? (
              <input
                type="text"
                value={
                  isOpen ? searchTerm : (internalValue?.label as string) || ''
                }
                onChange={handleInputChange}
                placeholder={placeholder}
                className="flex-1 bg-transparent border-none outline-none text-zinc-700 text-base"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpen();
                }}
                aria-label={label || placeholder}
                aria-labelledby={htmlFor}
              />
            ) : (
              <Typography
                variant="body2"
                className="flex-1 text-zinc-700 text-base"
              >
                {internalValue?.label || placeholder}
              </Typography>
            )}
          </div>

          {isLoading ? (
            <Loading className="w-4 h-4 text-zinc-500" />
          ) : (
            <ChevronUp
              data-state={isOpen ? 'open' : 'closed'}
              className={cn(
                'w-4 h-4 text-zinc-500 transition-all duration-50 data-[state=open]:rotate-0 data-[state=closed]:rotate-180',
                iconClassName,
              )}
            />
          )}
        </div>

        <input
          ref={inputRef}
          type="text"
          name={name}
          className="hidden"
          aria-hidden="true"
          required={required}
        />

        <List
          ref={ulRef}
          className={listClassName}
          itemClassName={listItemClassName}
          name={name}
          wrapperRef={wrapperRef}
          wrapperInputRef={wrapperInputRef}
          options={options}
          isLoading={!!isLoading}
          searchable={searchable}
        />
      </div>
    );
  },
);
