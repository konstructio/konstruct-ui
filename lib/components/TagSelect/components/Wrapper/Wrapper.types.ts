import { ForwardedRef } from 'react';

import { Theme } from '@/domain/theme';

import { TagSelectProps } from '../../TagSelect.types';

export type WrapperProps = Omit<TagSelectProps, 'options' | 'multiselect'> & {
  ref?: ForwardedRef<HTMLInputElement>;
  theme?: Theme;
};
