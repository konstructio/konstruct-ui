import { createContext } from 'react';

export type DropdownContextType = {
  isOpen: boolean;
  toggleOpen: (value?: boolean) => void;
  value?: string;
  setValue: (value: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export const DropdownContext = createContext<DropdownContextType>({
  isOpen: false,
  toggleOpen() {
    throw new Error('toggleOpen function must be overridden');
  },
  value: undefined,
  setValue() {
    throw new Error('setValue function must be overridden');
  },
  searchTerm: '',
  setSearchTerm() {
    throw new Error('setSearchTerm function must be overridden');
  },
});
