import type { Meta, StoryObj } from '@storybook/react-vite';

import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A semantic HTML table with Head, Body, and Row sub-components. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
  },
  args: {},
  render: (args) => {
    const data = [
      { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
      { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
      { name: 'Alex Brown', email: 'alex@example.com', role: 'User' },
    ];

    return (
      <Table {...args}>
        <Table.Head>
          <Table.Row>
            <th className="px-3 py-2 text-left text-sm font-medium">Name</th>
            <th className="px-3 py-2 text-left text-sm font-medium">Email</th>
            <th className="px-3 py-2 text-left text-sm font-medium">Role</th>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map((row) => {
            return (
              <Table.Row key={row.email}>
                <td className="px-3 py-2 text-sm">{row.name}</td>
                <td className="px-3 py-2 text-sm">{row.email}</td>
                <td className="px-3 py-2 text-sm">{row.role}</td>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Playground: Story = {};
