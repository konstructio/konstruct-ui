import { useContext } from 'react';

import { DropdownContext, DropdownContextType } from './dropdown.context';

export const useDropdownContext = (): DropdownContextType => {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error('useTheme must be used within a DropdownProvider');
  }

  return context;
};