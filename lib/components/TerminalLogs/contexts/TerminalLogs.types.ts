import { ReactNode } from 'react';

import { Terminal } from '../adapters';

export type State = {
  terminal: Terminal | null;
  showLogs: boolean;
  searchValue: string;
  onSetElement: (element: HTMLElement) => void;
  onChangeLogsVisibility: (visible: boolean) => void;
  onChangeSearchValue: (text: string) => void;
  onFitTerminal: VoidFunction;
};

export type ProviderProps = {
  children: ReactNode;
  showLogs?: boolean;
};
