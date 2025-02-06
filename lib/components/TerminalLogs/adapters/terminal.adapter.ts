import { Terminal as XTerminal } from 'xterm';

export class Terminal {
  private terminalInstance: XTerminal | undefined;

  private constructor() {}

  static create(
    this: Terminal,
    { convertEol = true, cols = 105, disableStdin = true, scrollback = 5000 },
  ) {
    this.terminalInstance = new XTerminal({
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

    return this.terminalInstance;
  }
}
