import { X } from 'lucide-react';
import { FC, forwardRef, useId, useImperativeHandle } from 'react';
import { ChevronUp } from 'react-feather';

import { LoaderIcon } from '@/assets/icons/components';
import { Badge } from '@/components/Badge/Badge';
import { Typography } from '@/components/Typography/Typography';
import { cn, composeIds } from '@/utils';

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
      disabled = false,
      error,
      errorClassName,
      helperText,
      helperTextClassName,
      isRequired,
      label,
      labelClassName,
      labelWrapperClassName,
      name,
      placeholder = '',
      theme,
      wrapperClassName,
    },
    ref,
  ) => {
    const id = useId();
    const htmlFor = name ? `${id}-name` : 'id';
    const errorId = `${id}-error`;
    const helperTextId = `${id}-helper-text`;
    const hasError = typeof error === 'string' && error.length > 0;
    const hasHelperText = !hasError && !!helperText;
    const describedBy = composeIds(
      hasError && errorId,
      hasHelperText && helperTextId,
    );
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
          <div className={cn(labelWrapperClassName)}>
            <Typography
              component="label"
              variant="labelLarge"
              id={`${id}-label`}
              htmlFor={htmlFor}
              className={cn(
                labelVariants({
                  className: labelClassName,
                }),
              )}
              onClick={() => {
                if (!disabled) {
                  onOpen(true);
                }
              }}
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
          </div>
        ) : null}

        <div
          id={htmlFor}
          className={cn(multiSelectDropdownVariants({ hasError, disabled }))}
          role="combobox"
          onClick={disabled ? undefined : handleOpen}
          aria-expanded={isOpen}
          aria-labelledby={label ? `${id}-label` : undefined}
          aria-invalid={hasError || undefined}
          aria-describedby={describedBy}
          aria-disabled={disabled || undefined}
          aria-required={isRequired || undefined}
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
                  rightIcon={
                    <X
                      onClick={() => {
                        if (!disabled) {
                          onRemoveOption(option);
                        }
                      }}
                    />
                  }
                />
              ))}
            </div>
          )}

          {isLoading ? (
            <LoaderIcon
              size={16}
              className="animate-spin shrink-0 text-gray-400"
            />
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
          tabIndex={-1}
          aria-hidden="true"
          readOnly
        />

        {isOpen && !disabled ? <List /> : null}

        {hasError ? (
          <Typography
            component="span"
            id={errorId}
            className={cn(
              'text-xs tracking-normal text-red-700 dark:text-red-400',
              errorClassName,
            )}
          >
            {error}
          </Typography>
        ) : null}

        {hasHelperText ? (
          <Typography
            component="span"
            id={helperTextId}
            className={cn(
              'text-xs text-slate-600 dark:text-slate-200',
              helperTextClassName,
            )}
          >
            {helperText}
          </Typography>
        ) : null}
      </div>
    );
  },
);

Wrapper.displayName = 'MultiSelectDropdownWrapper';
