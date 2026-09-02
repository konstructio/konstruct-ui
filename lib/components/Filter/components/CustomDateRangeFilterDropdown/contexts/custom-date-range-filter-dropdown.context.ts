import { createContext } from 'react';

import { State } from './custom-date-range-filter-dropdown.types';

export const CustomDateRangeFilterDropdownContext = createContext<State | null>(
  null,
);
