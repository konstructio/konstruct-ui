import { useContext } from 'react';

import { ThemeContext } from './theme.context';
import type { ThemeProps } from './theme.types';

export const useTheme = (): ThemeProps => {
  const context = useContext(ThemeContext);

  return context;
};
