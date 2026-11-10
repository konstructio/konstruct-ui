import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '@tests/utils/renderWithProviders';

import { VirtualizedTable } from '../VirtualizedTable';
import { ColumnDef } from '../VirtualizedTable.types';

type Item = { id: string; name: string };

const columns: ColumnDef<Item>[] = [{ accessorKey: 'name', header: 'Name' }];
const data: Item[] = [{ id: '1', name: 'alpha' }];

class FiringResizeObserver {
  constructor(
    private readonly callback: (entries: unknown[], observer: unknown) => void,
  ) {}

  observe() {
    this.callback([], this);
  }

  unobserve() {}

  disconnect() {}
}

const mockViewport = (isMobile: boolean) => {
  vi.stubGlobal(
    'matchMedia',
    vi.fn((query: string) => ({
      matches: isMobile && query.includes('max-width'),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  );
};

const mockWrappedFilterBar = () => {
  vi.stubGlobal('ResizeObserver', FiringResizeObserver);
  vi.spyOn(HTMLElement.prototype, 'offsetTop', 'get').mockImplementation(
    function (this: HTMLElement) {
      return this.classList.contains('kvt-filter-actions') ? 56 : 0;
    },
  );
};

const setup = async () => {
  const user = userEvent.setup();

  renderWithProviders(
    <VirtualizedTable<Item>
      id="align-table"
      ariaLabel="Align table"
      columns={columns}
      data={data}
      showFilter
      showFilterInput
      filters={[
        {
          key: 'status',
          label: 'Status',
          options: [{ id: 'active', label: 'Active' }],
        },
      ]}
    />,
  );

  await user.click(await screen.findByRole('button', { name: /status/i }));

  return waitFor(() => {
    const content = document.querySelector(
      '[data-radix-popper-content-wrapper] > *',
    );

    expect(content).not.toBeNull();

    return content;
  });
};

describe('VirtualizedTable filter dropdown alignment', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockWrappedFilterBar();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('should keep the dropdown aligned to the trigger end from md up, even if the bar wraps', async () => {
    mockViewport(false);

    const content = await setup();

    expect(content).toHaveAttribute('data-align', 'end');
  });

  it('should align the dropdown to the trigger start on phones when the bar wraps', async () => {
    mockViewport(true);

    const content = await setup();

    expect(content).toHaveAttribute('data-align', 'start');
  });
});
