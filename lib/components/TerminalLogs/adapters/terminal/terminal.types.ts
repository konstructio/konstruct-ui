import { ITerminalInitOnlyOptions, ITerminalOptions } from '@xterm/xterm';

export type TerminalPrimitiveConfig = ITerminalOptions &
  ITerminalInitOnlyOptions;
