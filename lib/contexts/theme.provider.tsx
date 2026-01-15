import { FC, PropsWithChildren, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import { isClient } from '../utils';

import { ThemeContext, ThemeContextType } from './theme.context';

/**
 * Props for the ThemeProvider component.
 */
export type ThemeContextProps = PropsWithChildren & {
  /** Initial theme to use */
  theme?: ThemeContextType['theme'];
};

/**
 * Theme provider component that wraps your app to enable theming.
 * Sets the `data-theme` attribute on the body element and persists theme choice in cookies.
 *
 * @example
 * ```tsx
 * // Wrap your app with ThemeProvider
 * import { ThemeProvider } from '@konstructio/ui';
 *
 * function App() {
 *   return (
 *     <ThemeProvider theme="kubefirst">
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 *
 * // Access theme in components
 * import { useTheme } from '@konstructio/ui';
 *
 * function MyComponent() {
 *   const { theme, setTheme } = useTheme();
 *   return <button onClick={() => setTheme('dark')}>Dark Mode</button>;
 * }
 * ```
 *
 * Available themes: 'kubefirst' | 'light' | 'kubefirst-dark' | 'dark'
 */
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
