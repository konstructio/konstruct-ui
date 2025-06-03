'use client';
import { forwardRef, useId, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

import { cn } from '@/utils';
import SearchIcon from '@/assets/icons/search.svg';
import WarningIcon from '@/assets/icons/warning.svg';

import { InputProps } from './Input.types';
import { inputVariants } from './Input.variants';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error,
      isRequired = false,
      isSearch = false,
      label,
      labelClassName,
      name,
      theme,
      type = 'text',
      helperText,
      ...delegated
    },
    ref,
  ) => {
    const id = useId();
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
          <label
            htmlFor={id}
            className={cn(
              'cursor-pointer text-slate-500 flex gap-1 text-sm font-medium',
              labelClassName,
            )}
          >
            {label}{' '}
            {isRequired ? (
              <span className="text-red-600 text-xs mt-0.5">*</span>
            ) : null}
          </label>
        ) : null}

        <div className="relative">
          {isSearch ? (
            <i
              className={cn(
                'absolute left-2.5 top-1/2 -translate-y-[50%] text-slate-400',
                hasError && 'text-red-600',
              )}
            >
              <SearchIcon className="w-5 h-5" />
            </i>
          ) : null}

          <input
            id={id}
            ref={ref}
            name={name}
            type={showPassword ? type : 'password'}
            className={cn(
              inputVariants({
                className,
                variant: hasError ? 'error' : 'default',
              }),
              (type === 'password' || hasError) && 'pr-10',
              isSearch && 'pl-8',
            )}
            {...delegated}
          />

          {hasError ? (
            <i className="absolute right-3 text-red-600 top-1/2 -translate-y-[50%]">
              <WarningIcon className="w-5 h-5" />
            </i>
          ) : null}

          {type === 'password' && !error ? (
            <i className="absolute right-3 text-slate-400 top-1/2 -translate-y-[50%]">
              <EyeIcon
                className="w-5 h-5 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            </i>
          ) : null}
        </div>

        {error ? <span className="text-xs text-red-600">{error}</span> : null}

        {!error && helperText ? (
          <span className="text-xs text-slate-600">{helperText}</span>
        ) : null}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
