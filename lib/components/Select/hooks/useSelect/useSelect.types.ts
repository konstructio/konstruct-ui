import type { RefObject, ComponentRef } from 'react';
import type { Option, SelectProps } from '../../Select.types';

export type UseSelectParams = {
  inputRef?: RefObject<ComponentRef<'input'> | null>;
  searchInputRef?: RefObject<ComponentRef<'input'> | null>;
  internalValue?: Option;
  listRef?: RefObject<HTMLElement | null>;
  onBlur?: SelectProps['onBlur'];
};
