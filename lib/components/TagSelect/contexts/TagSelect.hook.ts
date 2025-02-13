import { useContext } from 'react';

import { TagSelectContext } from './TagSelect.context';

export const useTagSelect = () => {
  const context = useContext(TagSelectContext);

  if (!context) {
    throw new Error('useTagSelect must be used within a TagSelectProvider');
  }

  return context;
};
