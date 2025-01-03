import { createContext } from 'react';

export type Theme = 'kubefirst' | 'colony' | 'civo' | undefined;

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
