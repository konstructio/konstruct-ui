import { createContext } from 'react';

import { Theme } from '@/domain/theme';

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: undefined,
  setTheme() {
    throw new Error('setTheme function must be overridden');
  },
});
