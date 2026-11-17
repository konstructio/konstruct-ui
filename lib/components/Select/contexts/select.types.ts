import type { Option } from '../Select.types';
import type { Dispatch, SetStateAction, RefObject, ComponentRef } from 'react';

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
  showSelectedCheck: boolean;
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
