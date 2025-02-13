import { createContext } from 'react';

import { State } from './TagSelect.types';

const initialState: State = {
  tags: [],
  onSelectTag() {
    throw new Error('Function not implemented.');
  },
};

export const TagSelectContext = createContext<State>(initialState);
