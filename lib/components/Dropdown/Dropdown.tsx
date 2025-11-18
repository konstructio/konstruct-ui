import { ComponentRef, FC, forwardRef } from 'react';

import { cn } from '@/utils';

import { Wrapper } from './components';
import { DropdownProvider } from './contexts';
import { DropdownProps } from './Dropdown.types';

export const Dropdown: FC<DropdownProps> = forwardRef<
  ComponentRef<'input'>,
  DropdownProps
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
    <DropdownProvider
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
          <span className={cn('text-xs text-slate-600', helperTextClassName)}>
            {helperText}
          </span>
        ) : null}
      </div>
    </DropdownProvider>
  ),
);
