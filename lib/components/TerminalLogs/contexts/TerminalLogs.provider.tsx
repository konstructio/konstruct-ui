import { useCallback, useEffect, useRef, useState } from 'react';

import { Terminal } from '../adapters';

import { TerminalLogsContext } from './TerminalLogs.context';
import { ProviderProps } from './TerminalLogs.types';

export const TerminalLogsProvider = ({ children, showLogs }: ProviderProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isVisibleLogs, setVisibleLogs] = useState<boolean>(showLogs ?? false);
  const terminalRef = useRef<Terminal>(
    Terminal.create({ showLogs: isVisibleLogs }),
  );

  const handleFitTerminal = useCallback(() => terminalRef.current?.fit(), []);
  const handleShowLogs = useCallback(() => setVisibleLogs((prev) => !prev), []);

  const handleSetElement = useCallback((element: HTMLElement) => {
    if (element) {
      terminalRef.current?.open(element);
    }
  }, []);

  const handleSearchValue = useCallback((text: string) => {
    setSearchValue(text);
    terminalRef.current?.searchValue(text);
  }, []);

  const handleWriteLog = useCallback((message: string) => {
    terminalRef.current?.write(message);
  }, []);

  useEffect(() => {
    const terminalInstance = terminalRef.current;

    return () => {
      terminalInstance.dispose();
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener('resize', () => terminalRef.current?.fit(), {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <TerminalLogsContext.Provider
      value={{
        terminal: terminalRef.current,
        showLogs: isVisibleLogs,
        searchValue,
        onChangeSearchValue: handleSearchValue,
        onSetElement: handleSetElement,
        onChangeLogsVisibility: handleShowLogs,
        onFitTerminal: handleFitTerminal,
        onWriteLog: handleWriteLog,
      }}
    >
      {children}
    </TerminalLogsContext.Provider>
  );
};
