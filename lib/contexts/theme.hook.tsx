import { useContext } from 'react';

import { Theme, ThemeContext } from './theme.context';

type ThemeProps = {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
};

export const useTheme = (): ThemeProps => {
  const context = useContext(ThemeContext);

  return context;
};
