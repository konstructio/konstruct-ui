import { TerminalLogsProps } from '../../TerminalLogs.types';

export type WrapperProps = {
  className?: string;
  showLogs?: TerminalLogsProps['showLogs'];
  theme?: TerminalLogsProps['theme'];
  handleMethods?: TerminalLogsProps['handleMethods'];
};
