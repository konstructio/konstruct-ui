'use client';
import { ComponentRef, FC, forwardRef } from 'react';

import { Wrapper } from './components';
import { DropdownProvider } from './contexts';
import { DropdownProps } from './Dropdown.types';

export const Dropdown: FC<DropdownProps> = forwardRef<
  ComponentRef<'input'>,
  DropdownProps
>(({ onChange, value, error, helperText, name, ...delegated }, ref) => (
  <DropdownProvider onChange={onChange} value={value} name={name}>
    <div className="relative w-full">
      <Wrapper name={name} error={error} ref={ref} {...delegated} />

      {error ? <span className="text-xs text-red-700">{error}</span> : null}

      {!error && helperText ? (
        <span className="text-xs text-slate-600">{helperText}</span>
      ) : null}
    </div>
  </DropdownProvider>
));
