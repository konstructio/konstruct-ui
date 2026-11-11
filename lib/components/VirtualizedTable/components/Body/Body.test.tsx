import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { ReactNode } from 'react';

import { Body } from './Body';

const { useTableContextMock } = vi.hoisted(() => ({
  useTableContextMock: vi.fn(),
}));

vi.mock('../../contexts', async (importActual) => ({
  ...(await importActual<typeof import('../../contexts')>()),
  useTableContext: useTableContextMock,
}));

type ContextOverrides = {
  tableLoading?: boolean;
  tableFetching?: boolean;
  enableExpandedRow?: boolean;
  rows?: unknown[];
};

const buildRow = (id: string, { isExpanded = false } = {}) => ({
  id,
  original: { name: id, meta: { expandedRow: <span>{id} details</span> } },
  getIsExpanded: () => isExpanded,
  getVisibleCells: () => [
    {
      id: `${id}_name`,
      column: {
        id: 'name',
        columnDef: { cell: () => id },
        getIsPinned: () => false,
      },
      getContext: () => ({}),
    },
  ],
});

const buildContext = ({
  tableLoading = false,
  tableFetching = false,
  enableExpandedRow = false,
  rows = [],
}: ContextOverrides) => ({
  table: {
    getRowModel: () => ({ rows }),
    getVisibleLeafColumns: () => [
      { id: 'name', columnDef: {}, getIsPinned: () => false },
    ],
  },
  pinnedWidths: {},
  pageSize: 3,
  tableLoading,
  tableFetching,
  enableExpandedRow,
  isBorderOnAdjacentCell: false,
  isExpandColumnVisible: false,
});

const setup = (
  overrides: ContextOverrides,
  props?: { isLoading?: boolean; emptyState?: ReactNode },
) => {
  useTableContextMock.mockReturnValue(buildContext(overrides));

  return render(
    <table>
      <Body
        isLoading={props?.isLoading}
        emptyState={props?.emptyState ?? <span>No results</span>}
      />
    </table>,
  );
};

describe('VirtualizedTable / Body', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the skeleton (not the empty state) while loading the initial data', () => {
    setup({ tableLoading: true, rows: [] });

    expect(screen.queryByText('No results')).not.toBeInTheDocument();
  });

  it('renders the empty state when there is no data and it is not loading', () => {
    setup({ tableLoading: false, rows: [] });

    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  it('keeps the empty state during a background refetch (isFetching without isLoading)', () => {
    // Regression guard: a background refetch (refetchInterval / keepPreviousData)
    // sets isFetching=true but isLoading=false. The body must stay on the empty
    // state instead of flashing back to the skeleton — otherwise consumers that
    // suppress fetch-state re-renders never see the empty state settle.
    setup({ tableLoading: false, tableFetching: true, rows: [] });

    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  it('renders the skeleton when the external isLoading prop is set', () => {
    setup({ tableLoading: false, rows: [] }, { isLoading: true });

    expect(screen.queryByText('No results')).not.toBeInTheDocument();
  });

  it('closes the bottom edge on the last row cells when its expanded row is collapsed', () => {
    setup({ enableExpandedRow: true, rows: [buildRow('a'), buildRow('b')] });

    const lastCell = screen.getByRole('cell', { name: 'b' });
    const lastExpandedCell = screen
      .getByText('b details')
      .closest('td') as HTMLElement;

    expect(lastCell).toHaveClass('dark:border-b', 'rounded-bl-lg');
    expect(lastExpandedCell).toHaveClass('border-y-0');
    expect(lastExpandedCell).not.toHaveClass('rounded-b-lg');
  });

  it('closes the bottom edge on the expanded row when the last row is expanded', () => {
    setup({
      enableExpandedRow: true,
      rows: [buildRow('a'), buildRow('b', { isExpanded: true })],
    });

    const lastCell = screen.getByRole('cell', { name: 'b' });
    const lastExpandedCell = screen
      .getByText('b details')
      .closest('td') as HTMLElement;

    expect(lastCell).not.toHaveClass('dark:border-b');
    expect(lastCell).not.toHaveClass('rounded-bl-lg');
    expect(lastExpandedCell).toHaveClass('border-b', 'rounded-b-lg');
  });

  it('keeps the bottom edge on the expanded row until its collapse transition ends', () => {
    const { rerender } = setup({
      enableExpandedRow: true,
      rows: [buildRow('a'), buildRow('b', { isExpanded: true })],
    });

    useTableContextMock.mockReturnValue(
      buildContext({
        enableExpandedRow: true,
        rows: [buildRow('a'), buildRow('b')],
      }),
    );
    rerender(
      <table>
        <Body emptyState={<span>No results</span>} />
      </table>,
    );

    const lastCell = screen.getByRole('cell', { name: 'b' });
    const lastExpandedCell = screen
      .getByText('b details')
      .closest('td') as HTMLElement;
    const transitionTarget = lastExpandedCell.firstElementChild as HTMLElement;

    expect(lastCell).not.toHaveClass('rounded-bl-lg');
    expect(lastExpandedCell).toHaveClass('border-b', 'rounded-b-lg');

    fireEvent.transitionEnd(transitionTarget);

    expect(lastCell).toHaveClass('dark:border-b', 'rounded-bl-lg');
    expect(lastExpandedCell).toHaveClass('border-y-0');
    expect(lastExpandedCell).not.toHaveClass('rounded-b-lg');
  });

  it('has no accessibility violations on the empty state', async () => {
    const { container } = setup({ tableLoading: false, rows: [] });

    expect(await axe(container)).toHaveNoViolations();
  });
});
