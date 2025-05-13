import { createContext } from 'react';

import { Option } from '../Filter.types';

export type FilterContextType = {
  isStatusOpen: boolean;
  isCreatedOpen: boolean;
  statusSelected: Option[];
  onAddSelectStatus: (option: Option) => void;
  onRemoveSelectStatus: (option: Option) => void;
  onOpenStatus: VoidFunction;
  onOpenCreated: VoidFunction;
};

export const FilterContext = createContext<FilterContextType>({
  isStatusOpen: false,
  isCreatedOpen: false,
  statusSelected: [],
  onAddSelectStatus: () => {},
  onRemoveSelectStatus: () => {},
  onOpenStatus: () => {},
  onOpenCreated: () => {},
});
