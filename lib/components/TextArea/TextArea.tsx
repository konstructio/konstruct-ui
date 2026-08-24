import { FC, forwardRef, useId } from 'react';

import { WarningIcon } from '@/assets/icons/components';
import { cn, composeIds } from '@/utils';

import { Props } from './TextArea.types';
import { textAreaVariants } from './TextArea.variants';
import { Typography } from '../Typography/Typography';

/**
 * A multiline text input component with optional label.
 *
 * @example
 * ```tsx
 * // Basic textarea
 * <TextArea label="Description" placeholder="Enter description..." />
 *
 * // Textarea with more rows
 * <TextArea label="Notes" rows={5} />
 *
 * // Controlled textarea
 * <TextArea
 *   label="Comments"
 *   value={comments}
 *   onChange={(e) => setComments(e.target.value)}
 * />
 *
 * // Required textarea with validation state
 * <TextArea label="Bio" isRequired error="Bio is required" />
 *
 * // Textarea with helper text
 * <TextArea label="Bio" helperText="Max 200 characters" />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-textarea--docs Storybook}
 */
export const TextArea: FC<Props> = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      className,
      defaultValue,
      error,
      helperText,
      helperTextClassName,
      id,
      initialValue,
      isExpandable = false,
      isRequired = false,
      label,
      labelClassName,
      labelWrapperClassName,
      name,
      placeholder,
      rows = 3,
      theme,
      value,
      variant,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const controlId = id ?? generatedId;
    const errorId = `${controlId}-error`;
    const helperTextId = `${controlId}-helper-text`;
    const isControlled = value !== undefined;
    const hasError = typeof error === 'string' && error.length > 0;
    const hasHelperText = !hasError && !!helperText;
    const describedBy = composeIds(
      hasError && errorId,
      hasHelperText && helperTextId,
    );

    return (
      <div className="flex flex-col gap-2 w-full relative" data-theme={theme}>
        {label ? (
          <div
            className={cn(
              'flex items-center justify-between',
              labelWrapperClassName,
            )}
          >
            <Typography
              component="label"
              variant="labelLarge"
              htmlFor={controlId}
              className={cn(
                'cursor-pointer',
                'flex',
                'gap-1',
                'text-sm',
                'font-medium',
                labelClassName,
              )}
            >
              {label}{' '}
              {isRequired && (
                <Typography
                  component="span"
                  aria-hidden="true"
                  className={cn(
                    'text-red-600',
                    'dark:text-red-500',
                    'text-xs',
                    'mt-0.5',
                  )}
                >
                  *
                </Typography>
              )}
            </Typography>
          </div>
        ) : null}

        <div className="relative">
          <textarea
            {...props}
            id={controlId}
            ref={ref}
            name={name}
            data-error={hasError}
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy}
            aria-required={isRequired || undefined}
            className={cn(
              textAreaVariants({
                className,
                isExpandable,
                variant: hasError ? 'error' : (variant ?? 'default'),
              }),
            )}
            rows={rows}
            placeholder={placeholder}
            value={value}
            defaultValue={
              isControlled ? undefined : (defaultValue ?? initialValue)
            }
          />

          {hasError ? (
            <i
              className={cn(
                'absolute',
                'right-3',
                'top-2.5',
                'text-red-700',
                'dark:text-red-500',
              )}
            >
              <WarningIcon className="w-5 h-5" />
            </i>
          ) : null}
        </div>

        {hasError ? (
          <Typography
            component="span"
            id={errorId}
            className={cn(
              'text-xs',
              'tracking-normal',
              'text-red-700',
              'dark:text-red-400',
            )}
          >
            {error}
          </Typography>
        ) : null}

        {hasHelperText ? (
          <Typography
            component="span"
            id={helperTextId}
            variant="body1"
            className={cn(
              'text-xs',
              'text-slate-600',
              'dark:text-slate-200',
              'select-none',
              'tracking-normal',
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
