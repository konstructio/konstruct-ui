import type { Meta, StoryObj } from '@storybook/react';

import { TableVirtualized as TableVirtualizedComponent } from './TableVirtualized';

type Story = StoryObj<typeof TableVirtualizedComponent>;

const meta = {
  title: 'In Review/Table',
  component: TableVirtualizedComponent,
} satisfies Meta<typeof TableVirtualizedComponent>;

const data = [
  { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
  { name: 'Jane Doe', age: 25, email: 'jane.doe@example.com' },
];

export const TableVirtualized = {
  render: () => {
    return (
      <div className="w-[80%]">
        <TableVirtualizedComponent data={data} />
      </div>
    );
  },
} satisfies Story;

export default meta;
