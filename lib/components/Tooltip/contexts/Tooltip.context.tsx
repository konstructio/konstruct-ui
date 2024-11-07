import { createContext } from 'react';

import { State } from './Tooltip.types';

const initialState: State = {
  isOpen: false,
};

export const TooltipContext = createContext<State>(initialState);
