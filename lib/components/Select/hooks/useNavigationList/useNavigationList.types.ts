import type { RefObject, ComponentRef } from 'react';
import type { Option } from '../../Select.types';

export type UseNavigationListProps = {
  inputRef?: RefObject<ComponentRef<'input'> | null>;
  searchable?: boolean;
  ulRef: RefObject<ComponentRef<'ul'> | null>;
  wrapperInputRef: RefObject<ComponentRef<'div'> | null>;
  filteredOptions: Option[];
};
