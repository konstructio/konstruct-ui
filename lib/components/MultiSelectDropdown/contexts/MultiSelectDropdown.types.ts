import { PropsWithChildren, RefObject } from 'react';

import { MultiSelectDropdownOption } from '../MultiSelectDropdown.types';

export type State = {
  inputRef: RefObject<HTMLInputElement | null> | null;
  isLoading?: boolean;
  isOpen: boolean;
  noOptionsText?: string;
  options: MultiSelectDropdownOption[];
  selectedOptions: MultiSelectDropdownOption[];
  onSelectOption: (option: MultiSelectDropdownOption) => void;
  onRemoveOption: (option: MultiSelectDropdownOption) => void;
  onOpen: (value?: boolean) => void;
};

export type MultiSelectDropdownProviderProps = PropsWithChildren & {
  defaultOptions?: MultiSelectDropdownOption[];
  isLoading?: boolean;
  multiselect?: boolean;
  name?: string;
  noOptionsText?: string;
  value?: MultiSelectDropdownOption[];
  onChange?: (params: {
    target: { value: MultiSelectDropdownOption[]; name: string };
  }) => void;
  onBlur?: (event: { target: HTMLInputElement | null; type?: string }) => void;
};
