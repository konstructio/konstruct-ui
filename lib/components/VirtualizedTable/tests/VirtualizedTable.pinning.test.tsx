import { screen, within } from '@testing-library/react';
import { axe } from 'jest-axe';

import { renderWithProviders } from '@tests/utils/renderWithProviders';

import { VirtualizedTable } from '../VirtualizedTable';
import { ColumnDef } from '../VirtualizedTable.types';

type Item = {
  id: string;
  name: string;
  region: string;
  status: string;
};

const columns: ColumnDef<Item>[] = [
  { header: 'Name', accessorKey: 'name' },
  {
    header: 'Region',
    accessorKey: 'region',
    meta: { hideBelow: 'sm' },
  },
  { header: 'Status', accessorKey: 'status' },
  {
    id: 'actions',
    header: 'Actions',
    cell: () => 'menu',
  },
];

const data: Item[] = [
  { id: '1', name: 'Alpha', region: 'lon1', status: 'active' },
  { id: '2', name: 'Beta', region: 'nyc1', status: 'inactive' },
];

beforeAll(async () => {
  await import('../components/VirtualizedTableContent/VirtualizedTableContent');
});

describe('VirtualizedTable column pinning', () => {
  const setup = async () => {
    const utils = renderWithProviders(
      <VirtualizedTable<Item>
        id="pinned-table"
        ariaLabel="Pinned table"
        columns={columns}
        data={data}
        columnPinning={{ left: ['name'], right: ['actions', 'status'] }}
      />,
    );

    await screen.findByRole('table', { name: /pinned table/i });

    const headers = screen.getAllByRole('columnheader');
    const firstRow = screen.getAllByRole('row')[1];
    const cells = within(firstRow).getAllByRole('cell');

    return { ...utils, headers, cells };
  };

  it('should render left-pinned columns first and right-pinned columns last', async () => {
    const { headers } = await setup();

    expect(headers.map((header) => header.textContent)).toEqual([
      'Name',
      'Region',
      'Actions',
      'Status',
    ]);
  });

  it('should make the pinned header and body cells sticky', async () => {
    const { headers, cells } = await setup();
    const [name, region, actions, status] = headers;

    expect(name).toHaveClass('sticky', 'kvt-pinned-left');
    expect(name).toHaveStyle({ left: '0px' });
    expect(region).not.toHaveClass('sticky');
    expect(actions).toHaveClass('sticky', 'kvt-pinned-right');
    expect(status).toHaveClass('sticky', 'kvt-pinned-right');
    expect(status).toHaveStyle({ right: '0px' });

    expect(cells[0]).toHaveClass('sticky', 'kvt-pinned-left');
    expect(cells[1]).not.toHaveClass('sticky');
    expect(cells[2]).toHaveClass('sticky', 'kvt-pinned-right');
    expect(cells[3]).toHaveClass('sticky', 'kvt-pinned-right');
  });

  it('should draw the divider only on the pinned columns next to the scrolling ones, while overflowing', async () => {
    const { headers, cells } = await setup();
    const [name, , actions, status] = headers;
    const dividerRight = '[[data-kvt-overflow]_&]:border-r';
    const dividerLeft = '[[data-kvt-overflow]_&]:border-l';

    expect(name).toHaveClass(dividerRight);
    expect(actions).toHaveClass(dividerLeft);
    expect(status).not.toHaveClass(dividerLeft);

    expect(cells[0]).toHaveClass(dividerRight);
    expect(cells[2]).toHaveClass(dividerLeft);
    expect(cells[3]).not.toHaveClass(dividerLeft);
  });

  it('should hide a column below its breakpoint in both header and body', async () => {
    const { headers, cells } = await setup();

    expect(headers[1]).toHaveClass('max-sm:hidden');
    expect(cells[1]).toHaveClass('max-sm:hidden');
    expect(headers[0]).not.toHaveClass('max-sm:hidden');
    expect(cells[0]).not.toHaveClass('max-sm:hidden');
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = await setup();

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
