import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  act,
  queryByAttribute,
  render,
  screen,
  within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { VirtualizedTable } from '../VirtualizedTable';
import { ColumnDef, Props } from '../VirtualizedTable.types';

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
  const setup = (
    pagination?: { totalItems: number },
    extraProps?: Record<string, unknown>,
  ) => {
    const defaultProps = {
      id: 'test-table',
      ariaLabel: 'Test table',
      columns,
      data,
      ...extraProps,
    } as unknown as Props<Item>;

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

  it('should render the headerContent band above the column headers with the top corners', () => {
    setup(undefined, { headerContent: <span>Monthly usage</span> });

    const bandCell = document.querySelector(
      'thead tr[data-header-content] th',
    ) as HTMLTableCellElement;

    expect(bandCell).not.toBeNull();
    expect(bandCell.colSpan).toBe(columns.length);
    expect(screen.getByText('Monthly usage')).toBeInTheDocument();
    expect(bandCell).toHaveClass('rounded-tl-lg');
    expect(bandCell).toHaveClass('rounded-tr-lg');
  });

  it('should remove the top corners from the column headers when the band is present', () => {
    setup(undefined, { headerContent: <span>Monthly usage</span> });

    const columnHeaders = screen.getAllByRole('columnheader').filter((th) => {
      return !th.closest('[data-header-content]');
    });

    expect(columnHeaders).toHaveLength(columns.length);
    columnHeaders.forEach((th) => {
      expect(th.className).not.toContain('first:rounded-tl-lg');
      expect(th.className).not.toContain('last:rounded-tr-lg');
    });
  });

  it('should keep the top corners on the column headers without the band', () => {
    setup();

    const columnHeaders = screen.getAllByRole('columnheader');

    columnHeaders.forEach((th) => {
      expect(th.className).toContain('first:rounded-tl-lg');
      expect(th.className).toContain('last:rounded-tr-lg');
    });
  });

  it('should render the band together with the empty state', () => {
    setup(undefined, {
      data: [],
      headerContent: <span>Monthly usage</span>,
      emptyState: <span>No results</span>,
    });

    expect(screen.getByText('Monthly usage')).toBeInTheDocument();
    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  it('should not reassign the expand-column corner when the band is present', () => {
    setup(undefined, {
      headerContent: <span>Monthly usage</span>,
      enableExpandedRow: true,
      renderExpandedRow: () => {
        return <span>expanded</span>;
      },
    });

    const headers = Array.from(document.querySelectorAll('th'));

    expect(
      headers.some((th) => {
        return th.className.includes('[&+th]:rounded-tl-lg');
      }),
    ).toBe(false);
  });

  it('should reassign the expand-column corner without the band', () => {
    setup(undefined, {
      enableExpandedRow: true,
      renderExpandedRow: () => {
        return <span>expanded</span>;
      },
    });

    const headers = Array.from(document.querySelectorAll('th'));

    expect(
      headers.some((th) => {
        return th.className.includes('[&+th]:rounded-tl-lg');
      }),
    ).toBe(true);
  });

  it('should change the page size from the pagination dropdown', async () => {
    const user = userEvent.setup();

    setup({ totalItems: 25 });

    await user.click(screen.getByRole('button', { name: /rows per page/i }));
    await user.click(screen.getByRole('option', { name: '20' }));

    expect(
      screen.getByRole('button', { name: /rows per page/i }),
    ).toHaveTextContent('20');
  });

  it('should open the page-size dropdown in the fixed direction from dropdownPaginationDirection', async () => {
    const user = userEvent.setup();

    setup({ totalItems: 25 }, { dropdownPaginationDirection: 'up' });

    await user.click(screen.getByRole('button', { name: /rows per page/i }));

    expect(
      screen.getByRole('listbox', { name: /rows per page/i }),
    ).toHaveAttribute('data-side', 'top');
  });

  it('should wrap the table and pagination in the scroll container, leaving the filter outside', () => {
    setup(
      { totalItems: 25 },
      {
        classNameScrollContainer: 'overflow-x-auto',
        showFilter: true,
        showFilterInput: true,
      },
    );

    const scrollDiv = document.querySelector(
      'section > div.overflow-x-auto',
    ) as HTMLElement;

    expect(scrollDiv).not.toBeNull();

    const sizer = scrollDiv.querySelector(':scope > div.min-w-fit');

    expect(sizer).not.toBeNull();
    expect(sizer!.contains(screen.getByRole('table'))).toBe(true);
    expect(sizer!.contains(screen.getByText(/results/i))).toBe(true);
    expect(scrollDiv.contains(screen.getByRole('textbox'))).toBe(false);
  });

  it('should reset only the targeted table filters when the reset event is scoped', async () => {
    const user = userEvent.setup();
    const filterOptions = [
      { id: 'active', label: 'Active' },
      { id: 'inactive', label: 'Inactive' },
    ];
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <VirtualizedTable<Item>
          id="table-a"
          ariaLabel="Table A"
          columns={columns}
          data={data}
          showFilter
          filters={[
            { key: 'status', label: 'Status A', options: filterOptions },
          ]}
        />
        <VirtualizedTable<Item>
          id="table-b"
          ariaLabel="Table B"
          columns={columns}
          data={data}
          showFilter
          filters={[
            { key: 'status', label: 'Status B', options: filterOptions },
          ]}
        />
      </QueryClientProvider>,
    );

    const triggerA = screen.getByRole('button', { name: /status a/i });
    const triggerB = screen.getByRole('button', { name: /status b/i });

    await user.click(triggerA);
    await user.click(queryByAttribute('data-label', document.body, 'active')!);
    await user.click(screen.getByRole('button', { name: /apply/i }));

    await user.click(triggerB);
    await user.click(queryByAttribute('data-label', document.body, 'active')!);
    await user.click(screen.getByRole('button', { name: /apply/i }));

    expect(within(triggerA).getByText('1')).toBeInTheDocument();
    expect(within(triggerB).getByText('1')).toBeInTheDocument();

    act(() => {
      VirtualizedTable.Events.sendResetFiltersEvent('table-a');
    });

    expect(within(triggerA).queryByText('1')).not.toBeInTheDocument();
    expect(within(triggerB).getByText('1')).toBeInTheDocument();
  });
});
