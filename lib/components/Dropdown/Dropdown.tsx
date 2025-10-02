'use client';
import { ComponentRef, FC, forwardRef } from 'react';

import { Wrapper } from './components';
import { DropdownProvider } from './contexts';
import { DropdownProps } from './Dropdown.types';

export const Dropdown: FC<DropdownProps> = forwardRef<
  ComponentRef<'input'>,
  DropdownProps
>(
  (
    {
      onChange,
      onBlur,
      value,
      error,
      helperText,
      name,
      highlightSearch,
      ...delegated
    },
    ref,
  ) => (
    <DropdownProvider
      highlightSearch={highlightSearch}
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    >
      <div className="relative w-full">
        <Wrapper
          name={name}
          error={error}
          ref={ref}
          onBlur={onBlur}
          {...delegated}
        />

        {error ? <span className="text-xs text-red-700">{error}</span> : null}

        {!error && helperText ? (
          <span className="text-xs text-slate-600">{helperText}</span>
        ) : null}
      </div>
    </DropdownProvider>
  ),
);
