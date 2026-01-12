import { ComponentRef, FC, forwardRef } from 'react';

import { cn } from '@/utils';

import { Wrapper } from './components';
import { SelectProvider } from './contexts';
import { SelectProps } from './Select.types';

export const Select: FC<SelectProps> = forwardRef<
  ComponentRef<'input'>,
  SelectProps
>(
  (
    {
      error,
      errorClassName,
      helperText,
      helperTextClassName,
      highlightSearch,
      mainWrapperClassName,
      name,
      value,
      options,
      onChange,
      onBlur,
      ...delegated
    },
    ref,
  ) => (
    <SelectProvider
      highlightSearch={highlightSearch}
      name={name}
      value={value}
      options={options}
      onBlur={onBlur}
      onChange={onChange}
    >
      <div className={cn('relative w-full', mainWrapperClassName)}>
        <Wrapper
          error={error}
          name={name}
          ref={ref}
          onBlur={onBlur}
          {...delegated}
        />

        {error ? (
          <span className={cn('text-xs text-red-700', errorClassName)}>
            {error}
          </span>
        ) : null}

        {!error && helperText ? (
          <span className={cn('text-xs text-metal-600', helperTextClassName)}>
            {helperText}
          </span>
        ) : null}
      </div>
    </SelectProvider>
  ),
);
