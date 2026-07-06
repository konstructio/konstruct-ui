import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { VirtualizedTable } from './VirtualizedTable';
import { ColumnDef, Props } from './VirtualizedTable.types';

type Item = {
  id: string;
  name: string;
  status: string;
};

const columns: ColumnDef<Item>[] = [
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Status',
    accessorKey: 'status',
  },
];

const data: Item[] = [
  { id: '1', name: 'Alpha', status: 'active' },
  { id: '2', name: 'Beta', status: 'inactive' },
  { id: '3', name: 'Gamma', status: 'active' },
];

describe('VirtualizedTable', () => {
  const setup = (pagination?: { totalItems: number }) => {
    const defaultProps = {
      id: 'test-table',
      ariaLabel: 'Test table',
      columns,
      data,
    } satisfies Props<Item>;

    const queryClient = new QueryClient();

    const { container } = render(
      <QueryClientProvider client={queryClient}>
        {pagination ? (
          <VirtualizedTable<Item>
            {...defaultProps}
            showPagination={true}
            totalItems={pagination.totalItems}
          />
        ) : (
          <VirtualizedTable<Item> {...defaultProps} />
        )}
      </QueryClientProvider>,
    );

    const getTable = () => screen.getByRole('table', { name: /test table/i });
    const getWrapperBody = () => getTable().parentElement as HTMLElement;
    const getLastCell = () => {
      const cells = screen.getAllByRole('cell');

      return cells[cells.length - 1];
    };
    const queryPaginationBar = () => screen.queryByText(/results/i);

    return {
      component: container,
      getTable,
      getWrapperBody,
      getLastCell,
      queryPaginationBar,
    };
  };

  it('should render the component', () => {
    const { getTable } = setup();

    expect(getTable()).toBeInTheDocument();
  });

  it('should render the rows', () => {
    setup();

    expect(screen.getByText('Alpha')).toBeInTheDocument();
    expect(screen.getByText('Beta')).toBeInTheDocument();
    expect(screen.getByText('Gamma')).toBeInTheDocument();
  });

  it('should close the bottom borders when pagination is disabled', () => {
    const { getWrapperBody, getLastCell, queryPaginationBar } = setup();

    expect(queryPaginationBar()).not.toBeInTheDocument();
    expect(getWrapperBody()).toHaveClass('rounded-lg');
    expect(getLastCell()).toHaveClass('rounded-br-lg');
  });

  it('should close the bottom borders when pagination is enabled but the bar is hidden for few items', () => {
    const { getWrapperBody, getLastCell, queryPaginationBar } = setup({
      totalItems: data.length,
    });

    expect(queryPaginationBar()).not.toBeInTheDocument();
    expect(getWrapperBody()).toHaveClass('rounded-lg');
    expect(getLastCell()).toHaveClass('rounded-br-lg');
  });

  it('should let the pagination bar close the bottom borders when it is visible', () => {
    const { getWrapperBody, getLastCell, queryPaginationBar } = setup({
      totalItems: 25,
    });

    expect(queryPaginationBar()).toBeInTheDocument();
    expect(getWrapperBody()).not.toHaveClass('rounded-lg');
    expect(getLastCell()).not.toHaveClass('rounded-br-lg');
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });
});
