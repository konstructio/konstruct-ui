import { createContext } from 'react';

export type FilterContextType = {
  closeOnApply: boolean;
  resetScope?: string;
  theme?: string;
};

export const FilterContext = createContext<FilterContextType>({
  closeOnApply: true,
});
