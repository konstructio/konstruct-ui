import { Terminal as TerminalPrimitive } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { SearchAddon } from 'xterm-addon-search';

import { TerminalPrimitiveConfig } from './terminal.types';

export class Terminal {
  private readonly terminalInstance: TerminalPrimitive;

  private constructor(terminal: TerminalPrimitive) {
    this.terminalInstance = terminal;
  }

  private static createNewIntance({
    convertEol = true,
    cols = 105,
    disableStdin = true,
    scrollback = 5000,
  }: TerminalPrimitiveConfig = {}): TerminalPrimitive {
    return new TerminalPrimitive({
      convertEol,
      cols,
      disableStdin,
      logLevel: 'off',
      scrollback,
      theme: {
        foreground: 'white',
        background: '#0f172a',
      },
    });
  }

  static create(config?: TerminalPrimitiveConfig): Terminal {
    const terminal = Terminal.createNewIntance(config);
    const searchAddon = new SearchAddon();
    const fitAddon = new FitAddon();

    terminal.loadAddon(fitAddon);
    terminal.loadAddon(searchAddon);

    return new Terminal(terminal);
  }

  open(container: HTMLElement): void {
    this.terminalInstance.open(container);
  }

  dispose(): void {
    this.terminalInstance.dispose();
  }
}
