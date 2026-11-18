import { createContext, useContext } from 'react';

import type { ContextValue } from './Drawer.types';

export type { ContextValue } from './Drawer.types';

export const DrawerContext = createContext<ContextValue>({});

export const useDrawerContext = () => useContext(DrawerContext);
