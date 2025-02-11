import { createContext } from 'react';

import { State } from './TerminalLogs.types';

const initialState: State = {
  terminal: null,
  showLogs: false,
  searchValue: '',
  onSetElement: () => {
    throw new Error('setElement method not implemented');
  },
  onChangeLogsVisibility: () => {
    throw new Error('setElement method not implemented');
  },
  onChangeSearchValue: () => {
    throw new Error('setElement method not implemented');
  },
  onFitTerminal: () => {
    throw new Error('setElement method not implemented');
  },
};

export const TerminalLogsContext = createContext<State>(initialState);
