import {
  ComponentRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';
import { ChevronUp } from 'react-feather';

import { cn } from '../../../utils';
import { useTheme } from '../../../contexts';
import { DropdownProps } from '../Dropdown.types';
import { dropdownVariants, labelVariants } from '../Dropdown.variants';
import { useDropdown } from '../hooks/useDropdown';
import { useDropdownContext } from '../contexts';

import { List } from './List/List';
import { Typography } from '@/components/Typography/Typography';
import { Loading } from '@/components/Loading/Loading';

export const Wrapper: ForwardRefExoticComponent<
  DropdownProps & RefAttributes<ComponentRef<'input'>>
> = forwardRef<ComponentRef<'input'>, DropdownProps>(
  (
    {
      theme,
      label,
      labelClassName,
      placeholder,
      name,
      options,
      required,
      defaultValue,
      isLoading,
    },
    ref,
  ) => {
    const id = useId();
    const inputRef = useRef<ComponentRef<'input'>>(null);
    const ulRef = useRef<ComponentRef<'ul'>>(null);
    const { wrapperRef, wrapperInputRef, handleOpen, handleOpenIfClosed } =
      useDropdown({ ulRef });
    const { isOpen, toggleOpen, value, setValue } = useDropdownContext();
    const { theme: themeContext } = useTheme();
    const inheritTheme = theme ?? themeContext;
    const htmlFor = name ? `${id}-${name}` : id;

    useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.value = value ? value.value : '';
      }
    }, [value]);

    useEffect(() => {
      if (defaultValue && !value) {
        const defaultOption =
          options && options.find((option) => option.value === defaultValue);

        if (defaultOption) {
          setValue(defaultOption);
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
      if (!value?.leftIcon) {
        return null;
      }

      return (
        <span className="w-4 h-4 flex justify-center items-center">
          {value.leftIcon}
        </span>
      );
    };

    return (
      <div ref={wrapperRef} className="flex flex-col w-full relative">
        {label ? (
          <label
            id={htmlFor}
            className={cn(
              labelVariants({ theme: inheritTheme }),
              labelClassName,
            )}
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
          className={cn(dropdownVariants({ theme: inheritTheme }))}
          role="combobox"
          onClick={handleOpen}
          aria-expanded={isOpen}
          tabIndex={0}
          aria-labelledby={htmlFor}
        >
          <span className="text-base text-inherit">
            {value ? (
              <Typography
                variant="body2"
                className="flex gap-3 items-center text-zinc-700"
              >
                {getIcon()}
                {value.label}
              </Typography>
            ) : (
              <Typography
                variant="body2"
                className="flex gap-3 items-center text-zinc-700"
              >
                {placeholder}
              </Typography>
            )}
          </span>

          {isLoading ? (
            <Loading className="w-4 h-4 text-zinc-500" />
          ) : (
            <ChevronUp
              className={cn(
                'w-4 h-4 text-zinc-500 transition-all duration-50',
                isOpen ? 'rotate-0' : 'rotate-180',
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
          name={name}
          wrapperRef={wrapperRef}
          wrapperInputRef={wrapperInputRef}
          options={options}
          theme={inheritTheme}
        />
      </div>
    );
  },
);
