import { ComponentRef, FC, useEffect, useRef } from 'react';
import { Root } from '@radix-ui/react-tabs';

import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { Terminal } from './adapters';
import { Body, Header } from './components';
import { TerminalLogsProps } from './TerminalLogs.types';
import { wrapperTerminalLogsVariants } from './TerminalLogs.variants';

export const TerminalLogs: FC<TerminalLogsProps> = ({
  theme,
  className,
  showLogs,
}) => {
  const terminalRef = useRef<Terminal>(Terminal.create({ showLogs }));
  const terminalWrapperRef = useRef<ComponentRef<'div'>>(null);
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
      <Root defaultValue="tab-1" orientation="horizontal" asChild={true}>
        <>
          <Header />
          <Body ref={terminalWrapperRef} />
        </>
      </Root>
    </div>
  );
};
