import { ComponentRef, createContext, RefObject } from 'react';

export type DropdownContextType = {
  highlightSearchEnabled: boolean;
  isOpen: boolean;
  searchTerm: string;
  value?: string;
  canFilter: boolean;
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
