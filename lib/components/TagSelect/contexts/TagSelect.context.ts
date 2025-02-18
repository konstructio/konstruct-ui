import { createContext } from 'react';

import { State } from './TagSelect.types';

const initialState: State = {
  tags: [],
  selectedTags: [],
  isOpen: false,
  onSelectTag() {
    throw new Error('Function not implemented.');
  },
  onRemoveTag() {
    throw new Error('Function not implemented.');
  },
  onOpen() {
    throw new Error('Function not implemented.');
  },
};

export const TagSelectContext = createContext<State>(initialState);
