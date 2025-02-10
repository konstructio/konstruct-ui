import { Terminal as TerminalPrimitive } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { SearchAddon } from '@xterm/addon-search';

import { TerminalPrimitiveConfig } from './terminal.types';
import { EventBus, TerminalEvent } from '../../event-bus';

const SEARCH_OPTIONS = { caseSensitive: false };

export class Terminal {
  private emitter: EventBus;
  private readonly terminalInstance: TerminalPrimitive;
  private searchAddon!: SearchAddon;

  private constructor(terminal: TerminalPrimitive, showLogs: boolean) {
    this.terminalInstance = terminal;
    this.emitter = new EventBus({ showLogs });
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

  static create(
    config?: TerminalPrimitiveConfig & { showLogs?: boolean },
  ): Terminal {
    const { showLogs = false, ...restConfig } = config ?? {};
    const terminalPrimitive = Terminal.createNewIntance(restConfig);
    const terminal = new Terminal(terminalPrimitive, showLogs);

    terminal.addAddons();
    terminal.bindEvents();
    terminal.emitter.emit(TerminalEvent.TERMINAL_LOADED);

    return terminal;
  }

  private addAddons() {
    const searchAddon = new SearchAddon();
    const fitAddon = new FitAddon();

    this.terminalInstance.loadAddon(fitAddon);
    this.terminalInstance.loadAddon(searchAddon);
    this.searchAddon = searchAddon;
  }

  private bindEvents() {
    this.emitter.on(TerminalEvent.WRITE_LOG, (event) => {
      this.terminalInstance.writeln(event.message);
    });

    let i = 0;

    const interval = setInterval(() => {
      i++;

      this.emitter.emit(TerminalEvent.WRITE_LOG, {
        message: 'Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ',
      });

      if (i === 20) {
        clearInterval(interval);
      }
    }, 1000);
  }

  open(container: HTMLElement): void {
    this.terminalInstance.open(container);
  }

  dispose(): void {
    this.emitter.removeAllListeners();
    this.terminalInstance.dispose();
  }

  findPrevious(term: string): void {
    this.searchAddon.findPrevious(term, SEARCH_OPTIONS);
  }

  findNext(term: string): void {
    this.searchAddon.findNext(term, SEARCH_OPTIONS);
  }
}
