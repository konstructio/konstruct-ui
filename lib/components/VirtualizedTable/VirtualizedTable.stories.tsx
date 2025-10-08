import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { VirtualizedTable as VirtualizedTableComponent } from './VirtualizedTable';

type Story = StoryObj<typeof VirtualizedTableComponent>;

const meta: Meta<typeof VirtualizedTableComponent> = {
  title: 'In Review/VirtualizedTable',
  component: VirtualizedTableComponent,
};

const queryClient = new QueryClient();

export const VirtualizedTable: Story = {
  args: {
    columns: [
      {
        header: 'Name',
        accessorKey: 'name',
        cell: (props) => <div>{props.getValue()}</div>,
      },
    ],
    data: [
      { name: 'John Doe' },
      { name: 'Jane Smith' },
      { name: 'Bob Johnson' },
    ],
  },
  render: (args) => (
    <div className="max-w-[350px]">
      <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent {...args} />
      </QueryClientProvider>
    </div>
  ),
};

export default meta;
