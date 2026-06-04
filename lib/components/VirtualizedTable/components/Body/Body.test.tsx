import { render, screen } from '@testing-library/react';
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
  rows?: unknown[];
};

const buildContext = ({
  tableLoading = false,
  tableFetching = false,
  rows = [],
}: ContextOverrides) => ({
  table: {
    getRowModel: () => ({ rows }),
    getVisibleLeafColumns: () => [{ id: 'name' }],
    getAllColumns: () => [{ id: 'name', columnDef: {} }],
  },
  pageSize: 3,
  tableLoading,
  tableFetching,
  enableExpandedRow: false,
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

  it('has no accessibility violations on the empty state', async () => {
    const { container } = setup({ tableLoading: false, rows: [] });

    expect(await axe(container)).toHaveNoViolations();
  });
});
