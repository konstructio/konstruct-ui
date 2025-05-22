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
} from 'react';
import { ChevronUp } from 'react-feather';

import { Loading } from '@/components/Loading/Loading';
import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { useDropdownContext } from '../contexts';
import { DropdownProps } from '../Dropdown.types';
import { dropdownVariants, labelVariants } from '../Dropdown.variants';
import { useDropdown } from '../hooks/useDropdown';

import { List } from './List/List';

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
    const { isOpen, toggleOpen, value, setValue } = useDropdownContext();
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
        }
      });

      return () => {
        controller.abort();
      };
    }, [toggleOpen, wrapperRef]);

    const getIcon = () => {
      if (!internalValue?.leftIcon) {
        return null;
      }

      return (
        <span className="w-4 h-4 flex justify-center items-center">
          {internalValue.leftIcon}
        </span>
      );
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
          {value ? (
            <Typography
              variant="body2"
              className="flex gap-3 items-center text-zinc-700 text-base"
            >
              {getIcon()}
              {internalValue?.label}
            </Typography>
          ) : (
            <Typography
              variant="body2"
              className="flex gap-3 items-center text-zinc-700 text-base"
            >
              {placeholder}
            </Typography>
          )}

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
        />
      </div>
    );
  },
);
