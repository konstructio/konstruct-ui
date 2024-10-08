import { FC, PropsWithChildren, useState } from 'react';
import Cookies from 'js-cookie';

import { isClient } from '../utils';

import { ThemeContext, ThemeContextType } from './theme.context';

type Props = PropsWithChildren & {
  theme?: ThemeContextType['theme'];
};

export const ThemeProvider: FC<Props> = ({ children, theme: themeName }) => {
  const [theme, setTheme] = useState<ThemeContextType['theme']>(() => {
    if (themeName) {
      return themeName;
    }

    if (isClient) {
      return Cookies.get('konstruct-theme') as ThemeContextType['theme'];
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
