import { ComponentRef, RefObject } from 'react';

import { DropdownProps } from '../../Dropdown.types';

export type ListProps = Pick<DropdownProps, 'name' | 'options' | 'theme'> & {
  className?: string;
  itemClassName?: string;
  isLoading: boolean;
  wrapperInputRef: RefObject<ComponentRef<'div'> | null>;
  wrapperRef: RefObject<ComponentRef<'div'> | null>;
};
