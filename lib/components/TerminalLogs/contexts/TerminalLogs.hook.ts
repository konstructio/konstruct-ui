import { useContext } from 'react';

import { TerminalLogsContext } from './TerminalLogs.context';

export const useTerminalLogs = () => {
  const context = useContext(TerminalLogsContext);

  if (!context) {
    throw new Error(
      'useTerminalLogs must be used within a TerminalLogsProvider',
    );
  }

  return context;
};
