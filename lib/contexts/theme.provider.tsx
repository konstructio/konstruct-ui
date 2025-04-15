import { FC, PropsWithChildren, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import { isClient } from '../utils';

import { ThemeContext, ThemeContextType } from './theme.context';

export type ThemeContextProps = PropsWithChildren & {
  theme?: ThemeContextType['theme'];
};

export const ThemeProvider: FC<ThemeContextProps> = ({
  children,
  theme: themeName,
}) => {
  const [theme, setTheme] = useState<ThemeContextType['theme']>(() => {
    if (themeName) {
      return themeName;
    }

    if (isClient) {
      return Cookies.get('konstruct-theme') as ThemeContextType['theme'];
    }

    return 'kubefirst';
  });

  useEffect(() => {
    document.querySelector('body')?.setAttribute('data-theme', theme!);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
