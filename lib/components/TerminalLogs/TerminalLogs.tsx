import { FC, useEffect, useRef } from 'react';

import { TerminalLogsProps } from './TerminalLogs.types';
import { Terminal } from './adapters';
import { cn } from '@/utils';
import { terminalLogsVariantas } from './TerminalLogs.variants';
import { useTheme } from '@/contexts';

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
      className={cn(terminalLogsVariantas({ className, theme: inheritTheme }))}
    >
      <div ref={terminalWrapperRef} />
    </div>
  );
};
