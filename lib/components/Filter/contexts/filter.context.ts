import { createContext } from 'react';

import type { FilterContextType } from './filter.types';

export type { FilterContextType } from './filter.types';

export const FilterContext = createContext<FilterContextType>({
  closeOnApply: true,
});
