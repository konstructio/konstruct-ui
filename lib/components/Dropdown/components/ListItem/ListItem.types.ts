import { ComponentRef, RefObject } from 'react';
import { Option } from '../../Dropdown.types';

export type ListItemProps = Option & {
  className?: string;
  isClickable: boolean;
  inputRef?: RefObject<ComponentRef<'input'> | null>;
};
