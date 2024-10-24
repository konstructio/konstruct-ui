import { createContext } from 'react';

export type DropdownContextType = {
  value: string;
  isOpen: boolean;
  setValue: (value: string) => void;
  toggleOpen: (value?: boolean) => void;
};

export const DropdownContext = createContext<DropdownContextType>({
  value: '',
  isOpen: false,
  toggleOpen() {
    throw new Error('toggleOpen function must be overridden');
  },
  setValue() {
    throw new Error('setValue function must be overridden');
  },
});
