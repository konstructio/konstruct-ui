import type { Meta, StoryObj } from '@storybook/react-vite';

import { VirtualizedTable } from './VirtualizedTable';
import type { ColumnDef } from './VirtualizedTable.types';

type Row = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const data: Row[] = Array.from({ length: 50 }, (_, i) => {
  return {
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i % 3 === 0 ? 'Admin' : 'User',
  };
});

const columns: ColumnDef<Row>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'role', header: 'Role' },
];

const meta: Meta<typeof VirtualizedTable<Row>> = {
  title: 'Components/VirtualizedTable',
  component: VirtualizedTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A feature-rich virtualized data table with optional filtering, pagination, and sorting. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    isLoading: {
      control: { type: 'boolean' },
      description: 'Whether the table is in a loading state',
    },
    enableHoverRow: {
      control: { type: 'boolean' },
      description: 'Highlight rows on hover',
    },
  },
  args: {
    id: 'users-table',
    ariaLabel: 'Users list',
    columns,
    data,
    isLoading: false,
    enableHoverRow: true,
  },
};

export default meta;

type Story = StoryObj<typeof VirtualizedTable<Row>>;

export const Playground: Story = {};
