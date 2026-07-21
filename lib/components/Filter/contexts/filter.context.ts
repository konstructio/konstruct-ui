import { createContext } from 'react';

export type FilterContextType = {
  closeOnApply: boolean;
  theme?: string;
};

export const FilterContext = createContext<FilterContextType>({
  closeOnApply: true,
});
