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
      cursorBlink: true,
      fontFamily: 'inherit',
      lineHeight: 2,
      convertEol,
      disableStdin,
      logLevel: 'off',
      scrollback,
      theme: {
        background: '#0F172A',
        black: '#000000',
        blue: '#bd93f9',
        brightBlack: '#555555',
        brightBlue: '#d6acff',
        brightCyan: '#a4ffff',
        brightGreen: '#69ff94',
        brightMagenta: '#ff92df',
        brightRed: '#ff6e6e',
        brightWhite: '#ffffff',
        brightYellow: '#ffffa5',
        cyan: '#8be9fd',
        foreground: '#ffffff',
        green: '#50fa7b',
        magenta: '#ff79c6',
        red: '#ff5555',
        white: '#bbbbbb',
        yellow: '#f1fa8c',
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
    this.emitter.on(TerminalEvent.TERMINAL_LOADED, () => this.fitAddon.fit());
    this.emitter.on(TerminalEvent.WRITE_LOG, (event) => {
      this.terminalInstance.writeln(event.message);
      this.logs.push(event.message);
    });
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

  write(message: string): void {
    this.emitter.emit(TerminalEvent.WRITE_LOG, { message });
  }
}
