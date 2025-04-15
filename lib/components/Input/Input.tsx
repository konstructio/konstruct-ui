'use client';
import { forwardRef, useId, useState } from 'react';
import { AlertCircle, Eye, EyeOff } from 'react-feather';

import { cn } from '../../utils';

import { InputProps } from './Input.types';
import { inputVariants } from './Input.variants';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error,
      label,
      labelClassName,
      name,
      type,
      theme,
      ...delegated
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const id = useId();
    const EyeIcon = showPassword ? Eye : EyeOff;

    return (
      <div className="flex flex-col gap-1.5 w-full" data-theme={theme}>
        {label ? (
          <label htmlFor={id} className={cn('cursor-pointer', labelClassName)}>
            {label}
          </label>
        ) : null}

        <div className="relative">
          <input
            id={id}
            ref={ref}
            name={name}
            type={showPassword ? 'text' : type}
            className={cn(
              inputVariants({
                className,
                variant: error ? 'error' : 'default',
              }),
            )}
            {...delegated}
          />

          {error ? (
            <i className="absolute right-3 text-red-600 top-0 translate-y-[40%]">
              <AlertCircle className="w-5 h-5" />
            </i>
          ) : null}

          {type === 'password' && !error ? (
            <i className="absolute right-3 text-slate-400 top-0 translate-y-[40%]">
              <EyeIcon
                className="w-5 h-5 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            </i>
          ) : null}
        </div>

        {error ? (
          <span className="text-xs text-red-600 -mt-0.5">{error}</span>
        ) : null}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
