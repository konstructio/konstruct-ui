import { useContext } from 'react';

import { SelectContext, SelectContextType } from './select.context';

export const useSelectContext = (): SelectContextType => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error('useSelectContext must be used within a SelectProvider');
  }

  return context;
};
