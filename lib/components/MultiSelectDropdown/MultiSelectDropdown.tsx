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
    {
      options,
      multiselect,
      value,
      onChange,
      onBlur,
      name,
      isLoading,
      noOptionsText,
      ...delegated
    },
    ref,
  ) => (
    <MultiSelectDropdownProvider
      defaultOptions={options}
      multiselect={multiselect}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      isLoading={isLoading}
      noOptionsText={noOptionsText}
    >
      <Wrapper ref={ref} {...delegated} name={name} />
    </MultiSelectDropdownProvider>
  ),
);

MultiSelectDropdown.displayName = 'MultiSelectDropdown';
