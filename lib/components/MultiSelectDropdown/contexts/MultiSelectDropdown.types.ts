import { PropsWithChildren, RefObject } from 'react';

import { MultiSelectDropdownOption } from '../MultiSelectDropdown.types';

export type State = {
  options: MultiSelectDropdownOption[];
  selectedOptions: MultiSelectDropdownOption[];
  isOpen: boolean;
  inputRef: RefObject<HTMLInputElement | null> | null;
  onSelectOption: (option: MultiSelectDropdownOption) => void;
  onRemoveOption: (option: MultiSelectDropdownOption) => void;
  onOpen: (value?: boolean) => void;
  isLoading?: boolean;
  noOptionsText?: string;
};

export type MultiSelectDropdownProviderProps = PropsWithChildren & {
  defaultOptions?: MultiSelectDropdownOption[];
  multiselect?: boolean;
  value?: MultiSelectDropdownOption[];
  onChange?: (params: {
    target: { value: MultiSelectDropdownOption[]; name: string };
  }) => void;
  onBlur?: (event: { target: HTMLInputElement | null; type?: string }) => void;
  name?: string;
  isLoading?: boolean;
  noOptionsText?: string;
};
