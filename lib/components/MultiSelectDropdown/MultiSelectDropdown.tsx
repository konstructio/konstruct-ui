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
      isLoading,
      multiselect,
      name,
      noOptionsText,
      options,
      value,
      onChange,
      onBlur,
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
      <Wrapper ref={ref} name={name} {...delegated} />
    </MultiSelectDropdownProvider>
  ),
);

MultiSelectDropdown.displayName = 'KonstructMultiSelectDropdown';
