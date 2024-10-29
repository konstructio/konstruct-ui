import { createContext } from 'react';

import { Option } from '../Dropdown.types';

export type DropdownContextType = {
  value: Option | null;
  isOpen: boolean;
  setValue: (value: Option) => void;
  toggleOpen: (value?: boolean) => void;
};

export const DropdownContext = createContext<DropdownContextType>({
  value: null,
  isOpen: false,
  toggleOpen() {
    throw new Error('toggleOpen function must be overridden');
  },
  setValue() {
    throw new Error('setValue function must be overridden');
  },
});
