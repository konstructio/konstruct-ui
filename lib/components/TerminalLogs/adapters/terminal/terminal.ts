import { Terminal as TerminalPrimitive } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { SearchAddon } from '@xterm/addon-search';

import { TerminalPrimitiveConfig } from './terminal.types';
import { EventBus, TerminalEvent } from '../../event-bus';

const SEARCH_OPTIONS = { caseSensitive: false };

export class Terminal {
  private emitter: EventBus;
  private readonly terminalInstance: TerminalPrimitive;
  private searchAddon: SearchAddon;
  private fitAddon: FitAddon;
  private logs: string[] = [];

  private constructor(terminal: TerminalPrimitive, showLogs: boolean) {
    this.terminalInstance = terminal;
    this.searchAddon = new SearchAddon();
    this.fitAddon = new FitAddon();
    this.emitter = new EventBus({ showLogs });
  }

  private static createNewIntance({
    convertEol = true,
    disableStdin = true,
    scrollback = 5000,
  }: TerminalPrimitiveConfig = {}): TerminalPrimitive {
    return new TerminalPrimitive({
      convertEol,
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
    this.terminalInstance.loadAddon(this.fitAddon);
    this.terminalInstance.loadAddon(this.searchAddon);
  }

  private bindEvents() {
    this.emitter.on(TerminalEvent.TERMINAL_LOADED, () => {
      this.fitAddon.fit();
    });

    this.emitter.on(TerminalEvent.WRITE_LOG, (event) => {
      this.terminalInstance.writeln(event.message);
      this.logs.push(event.message);
    });

    let i = 0;

    const interval = setInterval(() => {
      i++;

      this.emitter.emit(TerminalEvent.WRITE_LOG, {
        message: `Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ${i}`,
      });

      if (i === 20) {
        clearInterval(interval);
      }
    }, 1);
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

  fit() {
    this.fitAddon.fit();
  }

  changeVisibilityLogs(showLogs: boolean): void {
    this.emitter.emit(TerminalEvent.CHANGE_VISIBILITY_LOGS, { showLogs });
  }

  searchValue(term: string): void {
    this.searchAddon.findNext(term);
  }
}
