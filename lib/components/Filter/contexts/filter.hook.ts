import { useContext } from 'react';

import { FilterContext, FilterContextType } from './filter.context';

export const useFilterContext = (): FilterContextType => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }

  return context;
};
