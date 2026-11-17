import { createContext } from 'react';

import type { ThemeContextType } from './theme.types';

export type { ThemeContextType } from './theme.types';

export const ThemeContext = createContext<ThemeContextType>({
  theme: undefined,
  setTheme() {
    throw new Error('setTheme function must be overridden');
  },
});
