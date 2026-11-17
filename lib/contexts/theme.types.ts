import type { PropsWithChildren } from 'react';

import type { Theme } from '@/domain/theme';

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export type ThemeProps = {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
};

/**
 * Props for the ThemeProvider component.
 */
export type ThemeContextProps = PropsWithChildren & {
  /** Initial theme to use */
  theme?: ThemeContextType['theme'];
};
