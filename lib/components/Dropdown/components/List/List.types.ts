import { ComponentRef, RefObject } from 'react';

import { DropdownProps } from '../../Dropdown.types';

export type ListProps = Pick<
  DropdownProps,
  'name' | 'options' | 'theme' | 'additionalOptions'
> & {
  className?: string;
  inputRef?: RefObject<ComponentRef<'input'> | null>;
  isLoading: boolean;
  itemClassName?: string;
  searchable?: boolean;
  listItemSecondRowClassName?: string;
  wrapperInputRef: RefObject<ComponentRef<'div'> | null>;
  isInfiniteScrollEnabled: DropdownProps['isInfiniteScrollEnabled'];
  onFetchMoreOptions?: DropdownProps['onFetchMoreOptions'];
};
