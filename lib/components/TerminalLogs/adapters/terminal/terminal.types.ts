import { type ITerminalInitOnlyOptions, type ITerminalOptions } from 'xterm';

export type TerminalPrimitiveConfig = ITerminalOptions &
  ITerminalInitOnlyOptions;
