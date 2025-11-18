import { ComponentRef, createContext, RefObject } from 'react';

import { Option } from '../Dropdown.types';

export type DropdownContextType = {
  highlightSearchEnabled: boolean;
  isOpen: boolean;
  searchTerm: string;
  value?: string;
  canFilter: boolean;
  canContinueFetching: boolean;
  page: number;
  options: Option[];
  setOptions: (options: Option[]) => void;
  setPage: (page: number) => void;
  setCanContinueFetching: (canFilter: boolean) => void;
  setCanFilter: (canFilter: boolean) => void;
  setSearchTerm: (term: string) => void;
  setValue: (
    value: string,
    inputRef?: RefObject<ComponentRef<'input'> | null>,
  ) => void;
  toggleOpen: (value?: boolean) => void;
};

export const DropdownContext = createContext<DropdownContextType>({
  highlightSearchEnabled: false,
  isOpen: false,
  searchTerm: '',
  value: undefined,
  canFilter: true,
  canContinueFetching: true,
  page: 1,
  options: [],
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
