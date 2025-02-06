import { Terminal as TerminalPrimitive } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { SearchAddon } from 'xterm-addon-search';

import { TerminalPrimitiveConfig } from './terminal.types';

const SEARCH_OPTIONS = { caseSensitive: false };

export class Terminal {
  private readonly terminalInstance: TerminalPrimitive;
  private searchAddon!: SearchAddon;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //  @ts-expect-error
  private logs: string[] = [];

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
    const terminalPrimitive = Terminal.createNewIntance(config);
    const terminal = new Terminal(terminalPrimitive);

    terminal.addAddons();

    return terminal;
  }

  private addAddons() {
    const searchAddon = new SearchAddon();
    const fitAddon = new FitAddon();

    this.terminalInstance.loadAddon(fitAddon);
    this.terminalInstance.loadAddon(searchAddon);
    this.searchAddon = searchAddon;
  }

  open(container: HTMLElement): void {
    this.terminalInstance.open(container);
  }

  dispose(): void {
    this.terminalInstance.dispose();
  }

  findPrevious(term: string): void {
    this.searchAddon.findPrevious(term, SEARCH_OPTIONS);
  }

  findNext(term: string): void {
    this.searchAddon.findNext(term, SEARCH_OPTIONS);
  }
}
