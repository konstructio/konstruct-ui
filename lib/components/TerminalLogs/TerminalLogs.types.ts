import { VariantProps } from 'class-variance-authority';

import { terminalLogsVariantas } from './TerminalLogs.variants';

export type TerminalLogsProps = VariantProps<typeof terminalLogsVariantas> & {
  className?: string;
};
