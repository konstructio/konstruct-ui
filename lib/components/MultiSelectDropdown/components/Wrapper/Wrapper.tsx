import { FC, forwardRef, useId, useImperativeHandle } from 'react';
import { ChevronUp } from 'react-feather';

import { Tag } from '@/components';
import Loader from '@/assets/icons/loader.svg';
import { cn } from '@/utils';

import { useMultiSelectDropdown as useMultiSelectDropdownContext } from '../../contexts';
import { useMultiSelectDropdown } from '../../hooks/useMultiSelectDropdown';
import {
  labelVariants,
  multiSelectDropdownVariants,
  wrapperVariants,
} from '../../MultiSelectDropdown.variants';
import { List } from '../List/List';
import X from '@/assets/icons/x.svg';

import { WrapperProps } from './Wrapper.types';

export const Wrapper: FC<WrapperProps> = forwardRef<
  HTMLInputElement,
  WrapperProps
>(
  (
    { label, labelClassName, name, placeholder = '', theme, wrapperClassName },
    ref,
  ) => {
    const id = useId();
    const {
      selectedOptions,
      isOpen,
      onOpen,
      onRemoveOption,
      inputRef,
      isLoading,
    } = useMultiSelectDropdownContext();
    const { wrapperRef, handleOpen } = useMultiSelectDropdown();

    useImperativeHandle(ref, () => inputRef!.current!, [inputRef]);

    return (
      <div
        ref={wrapperRef}
        className={cn(
          wrapperVariants({
            className: wrapperClassName,
          }),
        )}
        data-theme={theme}
      >
        {label ? (
          <label
            htmlFor={name ?? id}
            className={cn(
              labelVariants({
                className: labelClassName,
              }),
            )}
            onClick={() => onOpen(true)}
          >
            {label}
          </label>
        ) : null}

        <div
          id={name ?? id}
          className={cn(multiSelectDropdownVariants())}
          role="combobox"
          onClick={handleOpen}
          aria-expanded={isOpen}
        >
          {selectedOptions.length === 0 ? (
            <span className="text-base text-inherit select-none">
              {placeholder}
            </span>
          ) : (
            <div className="flex flex-wrap gap-2">
              {selectedOptions.map((option) => (
                <Tag
                  key={option.id}
                  id={option.id}
                  label={option.tagLabel || option.label || ''}
                  color={option.tagColor || 'gray-800'}
                  className="select-none gap-2"
                  rightIcon={
                    <X
                      className="w-2 h-2"
                      onClick={() => onRemoveOption(option)}
                    />
                  }
                  data-value={option.label}
                />
              ))}
            </div>
          )}

          {isLoading ? (
            <Loader className="w-4 h-4 text-slate-400 animate-spin shrink-0" />
          ) : (
            <ChevronUp
              className={cn(
                'w-4 h-4 text-inherit transition-all duration-50 shrink-0',
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
          readOnly
        />

        {isOpen ? <List /> : null}
      </div>
    );
  },
);

Wrapper.displayName = 'MultiSelectDropdownWrapper';
