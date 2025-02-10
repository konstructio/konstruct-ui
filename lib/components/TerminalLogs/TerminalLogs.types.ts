import { VariantProps } from 'class-variance-authority';

import { wrapperTerminalLogsVariants } from './TerminalLogs.variants';
import { TerminalEvent, TerminalEventCallback } from './event-bus';

export type TerminalLogsProps = VariantProps<
  typeof wrapperTerminalLogsVariants
> & {
  className?: string;
  listeners?: Record<TerminalEvent, TerminalEventCallback<TerminalEvent>>;
};
