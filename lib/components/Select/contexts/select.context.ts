import { createContext } from 'react';

import type { SelectContextType } from './select.types';

export type { SelectContextType } from './select.types';

export const SelectContext = createContext<SelectContextType>({
  highlightSearchEnabled: false,
  isOpen: false,
  searchTerm: '',
  value: undefined,
  canFilter: true,
  canContinueFetching: true,
  page: 1,
  options: [],
  isTyping: false,
  showSelectedCheck: false,
  setOptions() {
    throw new Error('setOptions function must be overridden');
  },
  setPage() {
    throw new Error('setPage function must be overridden');
  },
  setCanContinueFetching() {
    throw new Error('setCanContinueFetching function must be overridden');
  },
  setCanFilter() {
    throw new Error('setCanFilter function must be overridden');
  },
  setSearchTerm() {
    throw new Error('setSearchTerm function must be overridden');
  },
  setValue() {
    throw new Error('setValue function must be overridden');
  },
  toggleOpen() {
    throw new Error('toggleOpen function must be overridden');
  },
});
