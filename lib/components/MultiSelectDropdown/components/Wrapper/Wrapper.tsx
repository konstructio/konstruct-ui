import { X } from 'lucide-react';
import { FC, forwardRef, useId, useImperativeHandle } from 'react';
import { ChevronUp } from 'react-feather';

import { Loader } from '@/assets/icons';
import { Badge } from '@/components/Badge/Badge';
import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { useMultiSelectDropdown as useMultiSelectDropdownContext } from '../../contexts';
import { useMultiSelectDropdown } from '../../hooks/useMultiSelectDropdown';
import {
  labelVariants,
  multiSelectDropdownVariants,
  wrapperVariants,
} from '../../MultiSelectDropdown.variants';
import { List } from '../List/List';

import { WrapperProps } from './Wrapper.types';

export const Wrapper: FC<WrapperProps> = forwardRef<
  HTMLInputElement,
  WrapperProps
>(
  (
    {
      isRequired,
      label,
      labelClassName,
      name,
      placeholder = '',
      theme,
      wrapperClassName,
    },
    ref,
  ) => {
    const id = useId();
    const htmlFor = name ? `${id}-name` : 'id';
    const {
      inputRef,
      isLoading,
      isOpen,
      selectedOptions,
      onOpen,
      onRemoveOption,
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
          <Typography
            component="label"
            variant="labelLarge"
            htmlFor={htmlFor}
            className={cn(
              labelVariants({
                className: labelClassName,
              }),
            )}
            onClick={() => onOpen(true)}
          >
            {label}{' '}
            {isRequired && (
              <Typography
                component="span"
                className="text-red-500 dark:text-red-500 text-sm font-normal"
              >
                *
              </Typography>
            )}
          </Typography>
        ) : null}

        <div
          id={htmlFor}
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
                <Badge
                  key={option.id}
                  data-value={option.label}
                  label={option.value ?? option.label ?? ''}
                  className="select-none"
                  rightIcon={<X onClick={() => onRemoveOption(option)} />}
                />
              ))}
            </div>
          )}

          {isLoading ? (
            <Loader className="w-4 h-4 animate-spin shrink-0 text-gray-400" />
          ) : (
            <ChevronUp
              className={cn(
                'w-4 h-4 transition-all duration-50 shrink-0 text-gray-400',
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
