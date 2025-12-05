import { useContext } from 'react';

import { MultiSelectDropdownContext } from './MultiSelectDropdown.context';

export const useMultiSelectDropdown = () => {
  const context = useContext(MultiSelectDropdownContext);

  if (!context) {
    throw new Error(
      'useMultiSelectDropdown must be used within a MultiSelectDropdownProvider',
    );
  }

  return context;
};
