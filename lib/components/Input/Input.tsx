import { forwardRef, useId } from 'react';
import { AlertCircle, EyeOff } from 'react-feather';

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
      onClickIcon,
      ...delegated
    },
    ref,
  ) => {
    const id = useId();

    return (
      <div className="flex flex-col gap-1.5">
        {label ? (
          <label
            htmlFor={id}
            className={cn('pl-1 cursor-pointer', labelClassName)}
          >
            {label}
          </label>
        ) : null}

        <div className="relative">
          <input
            id={id}
            ref={ref}
            name={name}
            type={type}
            className={inputVariants({
              className,
              variant: error ? 'error' : 'default',
            })}
            {...delegated}
          />
          {error ? (
            <i className="absolute right-2 text-red-600 top-0 translate-y-[40%]">
              <AlertCircle className="w-5 h-5" />
            </i>
          ) : null}
          {type === 'password' ? (
            <i className="absolute right-2 text-slate-400 top-0 translate-y-[40%]">
              <EyeOff
                className="w-5 h-5 cursor-pointer"
                onClick={onClickIcon}
              />
            </i>
          ) : null}
        </div>

        {error ? (
          <span className="text-xs text-red-600 -mt-0.5 pl-2">{error}</span>
        ) : null}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };