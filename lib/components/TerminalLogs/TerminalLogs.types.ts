import { VariantProps } from 'class-variance-authority';

import { wrapperTerminalLogsVariants } from './TerminalLogs.variants';

export type TerminalLogsProps = VariantProps<
  typeof wrapperTerminalLogsVariants
> & {
  className?: string;
};
