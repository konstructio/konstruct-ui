import { useContext } from 'react';

import { Theme } from '@/domain/theme';

import { ThemeContext } from './theme.context';

type ThemeProps = {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
};

export const useTheme = (): ThemeProps => {
  const context = useContext(ThemeContext);

  return context;
};
