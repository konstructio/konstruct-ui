import type { Meta, StoryObj } from '@storybook/react';

import { TerminalLogs as TerminalLogsComponent } from './TerminalLogs';

type Story = StoryObj<typeof TerminalLogsComponent>;

const meta = {
  title: 'Design System/TerminalLogs',
  component: TerminalLogsComponent,
} satisfies Meta<typeof TerminalLogsComponent>;

export const TerminalLogs = {
  render: () => {
    return (
      <div className="w-[600px] h-[600px]">
        <TerminalLogsComponent showLogs />
      </div>
    );
  },
} satisfies Story;

export default meta;
