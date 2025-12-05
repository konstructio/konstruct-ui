import { createContext } from 'react';

import { State } from './MultiSelectDropdown.types';

const initialState: State = {
  options: [],
  selectedOptions: [],
  isOpen: false,
  inputRef: null,
  onSelectOption() {
    throw new Error('Function not implemented.');
  },
  onRemoveOption() {
    throw new Error('Function not implemented.');
  },
  onOpen() {
    throw new Error('Function not implemented.');
  },
};

export const MultiSelectDropdownContext = createContext<State>(initialState);
