import type { Meta, StoryObj } from '@storybook/react-vite';

import { VirtualizedTable as VirtualizedTableComponent } from './VirtualizedTable';

type Story = StoryObj<typeof VirtualizedTableComponent>;

const meta: Meta<typeof VirtualizedTableComponent> = {
  title: 'In Review/VirtualizedTable',
  component: VirtualizedTableComponent,
};

export const VirtualizedTable: Story = {
  args: {},
  render: () => (
    <div className="max-w-[350px]">
      <VirtualizedTableComponent />
    </div>
  ),
};

export default meta;
