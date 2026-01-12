import { ComponentRef, RefObject } from 'react';
import { Option } from '../../Select.types';

export type ListItemProps = Option & {
  isEmpty?: boolean;
  className?: string;
  listItemSecondRowClassName?: string;
  isClickable: boolean;
  inputRef?: RefObject<ComponentRef<'input'> | null>;
};
