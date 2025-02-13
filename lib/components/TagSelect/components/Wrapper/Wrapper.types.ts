import { ForwardedRef } from 'react';

import { TagSelectProps } from '../../TagSelect.types';

export type WrapperProps = TagSelectProps & {
  ref?: ForwardedRef<HTMLInputElement>;
};
