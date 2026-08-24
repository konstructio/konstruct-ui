import { forwardRef, useId, useRef, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

import { SearchIcon, WarningIcon } from '@/assets/icons/components';
import { cn, composeIds } from '@/utils';

import { Props } from './Input.types';
import { inputVariants } from './Input.variants';
import { Typography } from '../Typography/Typography';

/**
 * A text input component with label, error handling, and helper text support.
 * Includes built-in password visibility toggle and search icon variant.
 *
 * @example
 * ```tsx
 * // Basic input with label
 * <Input label="Email" placeholder="Enter your email" />
 *
 * // Required input with helper text
 * <Input
 *   label="Username"
 *   isRequired
 *   helperText="Choose a unique username"
 * />
 *
 * // Input with error state
 * <Input
 *   label="Email"
 *   value={email}
 *   error="Please enter a valid email address"
 * />
 *
 * // Password input (auto show/hide toggle)
 * <Input label="Password" type="password" />
 *
 * // Search input with icon
 * <Input placeholder="Search..." isSearch />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-input--docs Storybook}
 */
const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      error,
      helperText,
      helperTextClassName,
      hidePasswordLabel = 'Hide password',
      id,
      isRequired = false,
      isSearch = false,
      label,
      labelAction,
      labelClassName,
      labelWrapperClassName,
      name,
      showPasswordLabel = 'Show password',
      theme,
      type = 'text',
      ...delegated
    },
    ref,
  ) => {
    const generatedId = useId();
    const controlId = id ?? generatedId;
    const errorId = `${controlId}-error`;
    const helperTextId = `${controlId}-helper-text`;
    const isDefaultTypePassword = useRef(type === 'password');

    const [showPassword, setShowPassword] = useState(() => {
      if (type === 'password') {
        return false;
      }

      return true;
    });

    const hasError = typeof error === 'string' && error.length > 0;
    const hasPasswordToggle = type === 'password';
    const hasHelperText = !hasError && !!helperText;
    const describedBy = composeIds(
      hasError && errorId,
      hasHelperText && helperTextId,
    );
    const EyeIcon = showPassword ? Eye : EyeOff;

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
            {labelAction}
          </div>
        ) : null}

        <div className="relative">
          {isSearch ? (
            <i
              className={cn(
                'absolute',
                'left-2.5',
                'top-1/2',
                '-translate-y-1/2',
                'text-slate-400',
                'dark:text-metal-400',
                {
                  'text-red-700': hasError,
                },
              )}
            >
              <SearchIcon className="w-5 h-5" />
            </i>
          ) : null}

          <input
            {...delegated}
            id={controlId}
            ref={ref}
            name={name}
            type={
              showPassword
                ? isDefaultTypePassword.current
                  ? 'text'
                  : type
                : 'password'
            }
            data-error={hasError}
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy}
            aria-required={isRequired || undefined}
            className={cn(
              inputVariants({
                className,
                variant: hasError ? 'error' : 'default',
              }),
              {
                'pr-10': hasPasswordToggle || hasError,
                'pr-16': hasPasswordToggle && hasError,
                'pl-8': isSearch,
              },
            )}
          />

          {hasError ? (
            <i
              className={cn(
                '-translate-y-1/2',
                'absolute',
                'text-red-700',
                'top-1/2',
                'dark:text-red-500',
                hasPasswordToggle ? 'right-10' : 'right-3',
              )}
            >
              <WarningIcon className="w-5 h-5" />
            </i>
          ) : null}

          {hasPasswordToggle ? (
            <button
              type="button"
              aria-label={showPassword ? hidePasswordLabel : showPasswordLabel}
              className={cn(
                '-translate-y-1/2',
                'absolute',
                'cursor-pointer',
                'right-3',
                'text-slate-400',
                'top-1/2',
              )}
              onClick={() => setShowPassword(!showPassword)}
            >
              <EyeIcon className="w-5 h-5" />
            </button>
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

Input.displayName = 'KonstructInput';

export { Input };
