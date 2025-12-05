'use client';
import { FC, forwardRef } from 'react';

import { Wrapper } from './components';
import { MultiSelectDropdownProvider } from './contexts';
import { MultiSelectDropdownProps } from './MultiSelectDropdown.types';

export const MultiSelectDropdown: FC<MultiSelectDropdownProps> = forwardRef<
  HTMLInputElement,
  MultiSelectDropdownProps
>(
  (
    { options, multiselect, value, onChange, onBlur, name, ...delegated },
    ref,
  ) => (
    <MultiSelectDropdownProvider
      defaultOptions={options}
      multiselect={multiselect}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
    >
      <Wrapper ref={ref} {...delegated} name={name} />
    </MultiSelectDropdownProvider>
  ),
);
