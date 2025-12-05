import { ForwardedRef } from 'react';

import { Theme } from '@/domain/theme';

import { MultiSelectDropdownProps } from '../../MultiSelectDropdown.types';

export type WrapperProps = Omit<
  MultiSelectDropdownProps,
  'options' | 'multiselect'
> & {
  ref?: ForwardedRef<HTMLInputElement>;
  theme?: Theme;
};
