import { createContext, useContext } from 'react';

import { ClassNames } from '../Drawer.types';

export type ContextValue = {
  classNames?: ClassNames;
  headerId?: string;
};

export const DrawerContext = createContext<ContextValue>({});

export const useDrawerContext = () => useContext(DrawerContext);
