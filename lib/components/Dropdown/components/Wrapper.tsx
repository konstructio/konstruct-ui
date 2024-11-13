import {
  ElementRef,
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
import { dropdownVariants } from '../Dropdown.variants';
import { useDropdown } from '../hooks/useDropdown';

import { useDropdownContext } from '../contexts';
import { List } from './List/List';

export const Wrapper: ForwardRefExoticComponent<
  DropdownProps & RefAttributes<ElementRef<'input'>>
> = forwardRef<ElementRef<'input'>, DropdownProps>(
  ({ theme, label, placeholder, name, options, defaultValue }, ref) => {
    const id = useId();
    const inputRef = useRef<ElementRef<'input'>>(null);
    const ulRef = useRef<ElementRef<'ul'>>(null);
    const { wrapperRef, wrapperInputRef, handleOpen, handleOpenIfClosed } =
      useDropdown({ ulRef });
    const { isOpen, value, setValue, toggleOpen } = useDropdownContext();
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
      if (defaultValue) {
        const defaultOption = options.find(
          (option) => option.value === defaultValue,
        );

        if (defaultOption) {
          setValue(defaultOption);
        }
      }
    }, [defaultValue, options, setValue]);

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
            className="m-2 cursor-pointer"
            htmlFor={htmlFor}
            onClick={handleOpenIfClosed}
          >
            {label}
          </label>
        ) : null}

        <div
          ref={wrapperInputRef}
          id={htmlFor}
          className={dropdownVariants({ theme: inheritTheme })}
          role="combobox"
          onClick={handleOpen}
          aria-expanded={isOpen}
          tabIndex={0}
        >
          <span className="text-base text-inherit">
            {value ? (
              <span className="flex gap-3 items-center">
                {getIcon()}
                {value.label}
              </span>
            ) : (
              placeholder
            )}
          </span>

          <ChevronUp
            className={cn(
              'w-4 h-4 text-inherit transition-all duration-50',
              isOpen ? 'rotate-0' : 'rotate-180',
            )}
          />
        </div>

        <input ref={inputRef} type="text" name={name} className="hidden" />

        <List
          ref={ulRef}
          wrapperRef={wrapperRef}
          wrapperInputRef={wrapperInputRef}
          options={options}
          theme={inheritTheme}
        />
      </div>
    );
  },
);
