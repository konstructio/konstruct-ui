import type { Meta, StoryObj } from '@storybook/react';

import { Table as TableComponent } from './Table';
import { Typography } from '../Typography/Typography';
import { useState } from 'react';
import { Button } from '../Button/Button';

type Story = StoryObj<typeof TableComponent>;

const meta = {
  title: 'In Review/Table',
  component: TableComponent,
} satisfies Meta<typeof TableComponent>;

const data = [
  { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
  { name: 'Jane Doe', age: 25, email: 'jane.doe@example.com' },
];

export const Table = {
  render: () => {
    const [filter, setFilter] = useState('');

    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <div className="w-full kubefirst-table">
        <TableComponent.Filter
          placeholder="Search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <Button variant="primary">Add cloud account</Button>
        </TableComponent.Filter>

        <TableComponent className="">
          <TableComponent.Head>
            <TableComponent.Row width="100px">
              <th className="w-[100px]">
                <Typography variant="labelMedium" className="text-slate-500">
                  Name
                </Typography>
              </th>
              <th>
                <Typography variant="labelMedium" className="text-slate-500">
                  Age
                </Typography>
              </th>
              <th>
                <Typography variant="labelMedium" className="text-slate-500">
                  Email
                </Typography>
              </th>
            </TableComponent.Row>
          </TableComponent.Head>
          <TableComponent.Body>
            {filteredData.map((item) => (
              <TableComponent.Row key={item.name}>
                <td>
                  <Typography variant="body2">{item.name}</Typography>
                </td>
                <td>
                  <Typography variant="body2">30</Typography>
                </td>
                <td>
                  <Typography variant="body2">john.doe@example.com</Typography>
                </td>
              </TableComponent.Row>
            ))}
          </TableComponent.Body>
        </TableComponent>
      </div>
    );
  },
} satisfies Story;

export default meta;
