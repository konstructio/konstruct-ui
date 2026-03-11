import { createContext } from 'react';

export type FilterContextType = {
  closeOnApply: boolean;
};

export const FilterContext = createContext<FilterContextType>({
  closeOnApply: true,
});
