import { forwardRef, useId, useRef, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

import { SearchIcon, WarningIcon } from '@/assets/icons/components';
import { cn } from '@/utils';

import { InputProps } from './Input.types';
import { inputVariants } from './Input.variants';
import { Typography } from '../Typography/Typography';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error,
      helperText,
      helperTextClassName,
      isRequired = false,
      isSearch = false,
      label,
      labelClassName,
      name,
      theme,
      type = 'text',
      ...delegated
    },
    ref,
  ) => {
    const id = useId();
    const isDefaultTypePassword = useRef(type === 'password');

    const [showPassword, setShowPassword] = useState(() => {
      if (type === 'password') {
        return false;
      }

      return true;
    });

    const hasError = typeof error === 'string' && error.length >= 0;
    const EyeIcon = showPassword ? Eye : EyeOff;

    return (
      <div className="flex flex-col gap-2 w-full relative" data-theme={theme}>
        {label ? (
          <Typography
            component="label"
            variant="labelLarge"
            htmlFor={id}
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
        ) : null}

        <div className="relative">
          {isSearch ? (
            <i
              className={cn(
                'absolute',
                'left-2.5',
                'top-1/2',
                '-translate-y-[50%]',
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
            id={label ? id : undefined}
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
            className={cn(
              inputVariants({
                className,
                variant: hasError ? 'error' : 'default',
              }),
              {
                'pr-10': type === 'password' || hasError,
                'pl-8': isSearch,
              },
            )}
            {...delegated}
          />

          {hasError ? (
            <i
              className={cn(
                '-translate-y-[50%]',
                'absolute',
                'right-3',
                'text-red-700',
                'top-1/2',
                'dark:text-red-500',
              )}
            >
              <WarningIcon className="w-5 h-5" />
            </i>
          ) : null}

          {type === 'password' && !error ? (
            <i
              className={cn(
                '-translate-y-[50%]',
                'absolute',
                'right-3',
                'text-slate-400',
                'top-1/2',
              )}
            >
              <EyeIcon
                className="w-5 h-5 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            </i>
          ) : null}
        </div>

        {error ? (
          <Typography
            component="span"
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

        {!error && helperText ? (
          <Typography
            component="span"
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
