import type { Option } from '../../Autocomplete.types';
import type { RefObject, ComponentRef } from 'react';

export type UseAutocompleteProps = {
  options: Option[];
  inputRef: RefObject<ComponentRef<'input'> | null>;
  wrapperRef: RefObject<ComponentRef<'div'> | null>;
  onChange(value: string): void;
};
