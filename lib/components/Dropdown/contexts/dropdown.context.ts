import { createContext } from 'react';

export type DropdownContextType = {
  highlightSearchEnabled: boolean;
  isOpen: boolean;
  searchTerm: string;
  value?: string;
  setSearchTerm: (term: string) => void;
  setValue: (value: string) => void;
  toggleOpen: (value?: boolean) => void;
};

export const DropdownContext = createContext<DropdownContextType>({
  highlightSearchEnabled: false,
  isOpen: false,
  searchTerm: '',
  value: undefined,
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
