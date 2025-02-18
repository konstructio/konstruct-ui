import { ForwardedRef } from 'react';

import { TagSelectProps } from '../../TagSelect.types';

export type WrapperProps = Omit<TagSelectProps, 'options' | 'multiselect'> & {
  ref?: ForwardedRef<HTMLInputElement>;
};
