import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { ComponentProps } from 'react';

import { renderWithProviders } from '@tests/utils/renderWithProviders';

import {
  VirtualizedTableEvent,
  VirtualizedTableEventDetail,
} from '../../events';
import { VirtualizedTable } from '../../VirtualizedTable';
import { ColumnDef } from '../../VirtualizedTable.types';

type Item = { id: string; name: string };

const columns: ColumnDef<Item>[] = [{ header: 'Name', accessorKey: 'name' }];

const setup = (
  props: ComponentProps<typeof VirtualizedTable.EmptyResults> = {},
) => {
  const user = userEvent.setup();
  const onResetFiltersEvent = vi.fn();

  document.addEventListener(
    VirtualizedTableEvent.RESET_FILTERS,
    (event) => {
      onResetFiltersEvent(
        (event as CustomEvent<VirtualizedTableEventDetail>).detail,
      );
    },
    { once: true },
  );

  const utils = renderWithProviders(
    <VirtualizedTable<Item>
      id="test-table"
      ariaLabel="Test table"
      columns={columns}
      data={[]}
      emptyState={<VirtualizedTable.EmptyResults {...props} />}
    />,
  );

  return { ...utils, user, onResetFiltersEvent };
};

describe('EmptyResults', () => {
  it('should render the default copy inside the table', () => {
    setup();

    expect(
      screen.getByRole('heading', { level: 2, name: 'No results' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Filters may be too restrictive.'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Reset filters' }),
    ).toBeInTheDocument();
  });

  it('should send the reset filters event for its own table', async () => {
    const { user, onResetFiltersEvent } = setup();

    await user.click(screen.getByRole('button', { name: 'Reset filters' }));

    expect(onResetFiltersEvent).toHaveBeenCalledWith({
      tableId: 'test-table',
    });
  });

  it('should call onResetFilters instead of sending the event when provided', async () => {
    const onResetFilters = vi.fn();
    const { user, onResetFiltersEvent } = setup({ onResetFilters });

    await user.click(screen.getByRole('button', { name: 'Reset filters' }));

    expect(onResetFilters).toHaveBeenCalledTimes(1);
    expect(onResetFiltersEvent).not.toHaveBeenCalled();
  });

  it('should allow overriding the copy and the image', () => {
    setup({
      title: 'Nothing matches',
      description: 'Try a broader search.',
      resetLabel: 'Clear',
      image: <img alt="Magnifier" src="search.svg" />,
    });

    expect(
      screen.getByRole('heading', { level: 2, name: 'Nothing matches' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Try a broader search.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Clear' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Magnifier' })).toBeInTheDocument();
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = setup();

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
