import { FC, useEffect, useRef } from 'react';

import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { Terminal } from './adapters';
import { Body, Header } from './components';
import { TerminalLogsProps } from './TerminalLogs.types';
import { wrapperTerminalLogsVariants } from './TerminalLogs.variants';

export const TerminalLogs: FC<TerminalLogsProps> = ({ theme, className }) => {
  const terminalRef = useRef<Terminal>(Terminal.create());
  const terminalWrapperRef = useRef<HTMLDivElement>(null);
  const { theme: contexTheme } = useTheme();
  const inheritTheme = theme ?? contexTheme;

  useEffect(() => {
    const terminalInstance = terminalRef.current;

    if (terminalWrapperRef.current) {
      terminalInstance.open(terminalWrapperRef.current);
    }

    return () => {
      terminalInstance.dispose();
    };
  }, []);

  return (
    <div
      className={cn(
        wrapperTerminalLogsVariants({ className, theme: inheritTheme }),
      )}
    >
      <Header />

      <Body>
        <div ref={terminalWrapperRef} className="w-full h-full" />
      </Body>
    </div>
  );
};
