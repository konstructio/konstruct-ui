import {
  ComponentRef,
  createContext,
  Dispatch,
  RefObject,
  SetStateAction,
} from 'react';

import { Option } from '../Select.types';

export type SelectContextType = {
  highlightSearchEnabled: boolean;
  isOpen: boolean;
  searchTerm: string;
  value?: string;
  canFilter: boolean;
  canContinueFetching: boolean;
  page: number;
  options: Option[];
  isTyping?: boolean;
  setOptions: Dispatch<SetStateAction<Option[]>>;
  setPage: Dispatch<SetStateAction<number>>;
  setCanContinueFetching: Dispatch<SetStateAction<boolean>>;
  setCanFilter: Dispatch<SetStateAction<boolean>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setValue: (
    value: string,
    inputRef?: RefObject<ComponentRef<'input'> | null>,
  ) => void;
  toggleOpen: (value?: boolean) => void;
};

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
