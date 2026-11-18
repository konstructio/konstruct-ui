import { createContext, useContext } from 'react';

import type { NavigationOptionContextValue } from './NavigationOption.types';

export type { NavigationOptionContextValue } from './NavigationOption.types';

export const NavigationOptionContext =
  createContext<NavigationOptionContextValue | null>(null);

export const useNavigationOptionContext =
  (): NavigationOptionContextValue | null =>
    useContext(NavigationOptionContext);
