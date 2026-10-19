import { screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { renderWithProviders } from '@tests/utils/renderWithProviders';

import { VirtualizedTable } from '../VirtualizedTable';
import { ColumnDef } from '../VirtualizedTable.types';
import { preloadVirtualizedTable } from '../utils';

type Item = {
  id: string;
  name: string;
};

const columns: ColumnDef<Item>[] = [{ header: 'Name', accessorKey: 'name' }];

const data: Item[] = [
  { id: '1', name: 'Alpha' },
  { id: '2', name: 'Beta' },
];

beforeAll(async () => {
  await preloadVirtualizedTable();
});

describe('VirtualizedTable with preloaded content', () => {
  const setup = () => {
    const { container } = renderWithProviders(
      <VirtualizedTable<Item>
        id="preloaded-table"
        ariaLabel="Preloaded table"
        columns={columns}
        data={data}
      />,
    );

    return { container };
  };

  it('should render the table in the first commit without the suspense fallback', () => {
    const { container } = setup();

    expect(
      screen.getByRole('table', { name: 'Preloaded table' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Alpha')).toBeInTheDocument();
    expect(container.querySelector('[aria-busy="true"]')).toBeNull();
  });

  it('should have no accessibility violations', async () => {
    const { container } = setup();

    expect(await axe(container)).toHaveNoViolations();
  });
});
