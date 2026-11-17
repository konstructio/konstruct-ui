import type { RefObject, ComponentRef } from 'react';
import type { Option } from '../../Autocomplete.types';

export type UseNavigationListProps = {
  ulRef: RefObject<ComponentRef<'ul'> | null>;
  inputRef: RefObject<ComponentRef<'input'> | null>;
  wrapperRef: RefObject<ComponentRef<'div'> | null>;
  options: Option[];
};
