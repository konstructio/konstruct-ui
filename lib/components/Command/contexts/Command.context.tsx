import { createContext } from 'react';

import { State } from './Command.types';

const initialState: State = {
  isOpen: false,
  setOpen: () => {
    throw new Error('onOpen is not implemented');
  },
  toggleOpen: () => {
    throw new Error('toggleOpen is not implemented');
  },
};

export const CommandContext = createContext<State>(initialState);
