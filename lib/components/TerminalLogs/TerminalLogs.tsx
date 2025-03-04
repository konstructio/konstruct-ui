import { FC } from 'react';

import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { Wrapper } from './components';
import { TerminalLogsProvider } from './contexts';
import { TerminalLogsProps } from './TerminalLogs.types';
import { wrapperTerminalLogsVariants } from './TerminalLogs.variants';

export const TerminalLogs: FC<TerminalLogsProps> = ({
  theme,
  className,
  showLogs,
  ...delegated
}) => {
  const { theme: contexTheme } = useTheme();
  const inheritTheme = theme ?? contexTheme;

  return (
    <TerminalLogsProvider showLogs={showLogs}>
      <Wrapper
        className={cn(
          wrapperTerminalLogsVariants({ className, theme: inheritTheme }),
        )}
        theme={inheritTheme}
        {...delegated}
      />
    </TerminalLogsProvider>
  );
};
