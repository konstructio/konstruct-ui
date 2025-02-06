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
      <div className="w-[350px] flex flex-col gap-3">
        <TerminalLogsComponent />
      </div>
    );
  },
} satisfies Story;

export default meta;
