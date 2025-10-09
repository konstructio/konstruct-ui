import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useId } from 'react';

import { VirtualizedTable as VirtualizedTableComponent } from './VirtualizedTable';

type Story = StoryObj<typeof VirtualizedTableComponent>;

const meta: Meta<typeof VirtualizedTableComponent> = {
  title: 'In Review/VirtualizedTable',
  component: VirtualizedTableComponent,
};

const queryClient = new QueryClient();

export const VirtualizedTable: Story = {
  args: {
    showFilter: true,
    filterSearchPlaceholder: 'Search by name, email or role...',
    showPagination: true,
    ariaLabel: 'List of accounts',
    columns: [
      {
        header: 'Name',
        accessorKey: 'name',
        cell: (props) => <VirtualizedTableComponent.TruncateText {...props} />,
      },
      {
        header: 'Email',
        accessorKey: 'email',
        cell: (props) => <VirtualizedTableComponent.TruncateText {...props} />,
      },
      {
        header: 'Title',
        accessorKey: 'title',
        cell: (props) => <VirtualizedTableComponent.TruncateText {...props} />,
      },
      {
        header: 'Department',
        accessorKey: 'department',
        cell: (props) => <VirtualizedTableComponent.TruncateText {...props} />,
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: (props) => <VirtualizedTableComponent.TruncateText {...props} />,
      },
      {
        header: 'Role',
        accessorKey: 'role',
        cell: (props) => <VirtualizedTableComponent.TruncateText {...props} />,
      },
      {
        id: 'actions',
        enableSorting: false,
        size: 44,
        enableResizing: false,
        cell: (props) => <VirtualizedTableComponent.Actions {...props} />,
        header: () => <span className="sr-only">Action Buttons</span>,
      },
    ],
    multiSelectFilter: [
      {
        label: 'Status',
        options: [
          {
            id: 'active',
            label: 'Active',
            variant: 'success',
          },
          {
            id: 'inactive',
            label: 'Inactive',
            variant: 'danger',
          },
        ],
      },
    ],
  },
  render: (args) => {
    const id = useId();

    const data = Array.from({ length: 10 }).map((_, index) => ({
      name: faker.person.firstName() + ' ' + faker.person.lastName(),
      email: faker.internet.email(),
      title: faker.person.jobTitle(),
      department: faker.commerce.department(),
      status: index % 2 === 0 ? 'Active' : 'Inactive',
      role: faker.person.jobType(),
    }));

    return (
      <div className="w-full">
        <QueryClientProvider client={queryClient}>
          <VirtualizedTableComponent {...args} id={id} data={data} />
        </QueryClientProvider>
      </div>
    );
  },
};

export default meta;
