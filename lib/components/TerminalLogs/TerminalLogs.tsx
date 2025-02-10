import { FC, useEffect, useRef } from 'react';
import { Root } from '@radix-ui/react-tabs';

import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { eventAdapter, Terminal } from './adapters';
import { Body, Header } from './components';
import { TerminalLogsProps } from './TerminalLogs.types';
import { wrapperTerminalLogsVariants } from './TerminalLogs.variants';

export const TerminalLogs: FC<TerminalLogsProps> = ({
  theme,
  className,
  listeners,
}) => {
  const emitter = useRef(eventAdapter(listeners));
  const terminalRef = useRef<Terminal>(Terminal.create({}, emitter.current));
  const terminalWrapperRef = useRef<HTMLDivElement>(null);
  const { theme: contexTheme } = useTheme();
  const inheritTheme = theme ?? contexTheme;

  useEffect(() => {
    const terminalInstance = terminalRef.current;
    const currentEmitter = emitter.current;

    if (terminalWrapperRef.current) {
      terminalInstance.open(terminalWrapperRef.current);
    }

    return () => {
      terminalInstance.dispose();
      currentEmitter?.removeAllListeners();
    };
  }, []);

  return (
    <div
      className={cn(
        wrapperTerminalLogsVariants({ className, theme: inheritTheme }),
      )}
    >
      <Root defaultValue="tab-1" orientation="horizontal">
        <Header />
        <Body>
          <div ref={terminalWrapperRef} className="relative" />
        </Body>
      </Root>
    </div>
  );
};
