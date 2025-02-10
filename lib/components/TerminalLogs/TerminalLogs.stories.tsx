import type { Meta, StoryObj } from '@storybook/react';

import { TerminalLogs as TerminalLogsComponent } from './TerminalLogs';
import { TerminalEvent, TerminalEventCallback } from './event-bus';

type Story = StoryObj<typeof TerminalLogsComponent>;

const meta = {
  title: 'Design System/TerminalLogs',
  component: TerminalLogsComponent,
} satisfies Meta<typeof TerminalLogsComponent>;

export const TerminalLogs = {
  render: () => {
    const listeners = {
      [TerminalEvent.TERMINAL_LOADED]: (event) => {
        console.log(event);
      },
    } satisfies Record<TerminalEvent, TerminalEventCallback<TerminalEvent>>;

    return (
      <div className="w-[600px] h-[600px]">
        <TerminalLogsComponent listeners={listeners} />
      </div>
    );
  },
} satisfies Story;

export default meta;
