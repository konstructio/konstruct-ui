import { useContext } from 'react';

import { CustomDateRangeFilterDropdownContext } from './custom-date-range-filter-dropdown.context';

export const useCustomDateRangeFilterDropdown = () => {
  const context = useContext(CustomDateRangeFilterDropdownContext);

  if (!context) {
    throw new Error(
      'useCustomDateRangeFilterDropdown must be used within a CustomDateRangeFilterDropdownProvider',
    );
  }

  return context;
};
