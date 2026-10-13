import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { ComponentProps } from 'react';

import { renderWithProviders } from '@tests/utils/renderWithProviders';

import {
  VirtualizedTableEvent,
  VirtualizedTableRefreshEventDetail,
} from '../../events';
import { VirtualizedTable } from '../../VirtualizedTable';
import { ColumnDef, Props } from '../../VirtualizedTable.types';

type Item = { id: string; name: string };

const columns: ColumnDef<Item>[] = [{ header: 'Name', accessorKey: 'name' }];

const setup = (
  props: ComponentProps<typeof VirtualizedTable.ErrorState> = {},
  errorState?: Props<Item>['errorState'],
) => {
  const user = userEvent.setup();
  const onRefreshEvent = vi.fn();
  const fetchData = vi.fn().mockRejectedValue(new Error('Network down'));

  document.addEventListener(
    VirtualizedTableEvent.REFRESH,
    (event) => {
      onRefreshEvent(
        (event as CustomEvent<VirtualizedTableRefreshEventDetail>).detail,
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
      fetchData={fetchData}
      queryOptions={{ retry: false }}
      errorState={errorState ?? <VirtualizedTable.ErrorState {...props} />}
    />,
  );

  const findHeading = (name = 'Something went wrong') => {
    return screen.findByRole('heading', { level: 2, name });
  };

  return { ...utils, user, fetchData, onRefreshEvent, findHeading };
};

describe('ErrorState', () => {
  it('should render the default copy once the fetch fails', async () => {
    const { findHeading } = setup();

    expect(await findHeading()).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Refresh' })).toBeInTheDocument();
  });

  it('should send the refresh event for its own table and refetch', async () => {
    const { user, fetchData, onRefreshEvent, findHeading } = setup();

    await findHeading();
    await user.click(screen.getByRole('button', { name: 'Refresh' }));

    expect(onRefreshEvent).toHaveBeenCalledWith({ tableId: 'test-table' });
    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(2);
    });
  });

  it('should call onRetry instead of sending the event when provided', async () => {
    const onRetry = vi.fn();
    const { user, onRefreshEvent, findHeading } = setup({ onRetry });

    await findHeading();
    await user.click(screen.getByRole('button', { name: 'Refresh' }));

    expect(onRetry).toHaveBeenCalledTimes(1);
    expect(onRefreshEvent).not.toHaveBeenCalled();
  });

  it('should render the fetch error message when used through the errorState callback', async () => {
    const { findHeading } = setup({}, (error) => (
      <VirtualizedTable.ErrorState
        title="Clusters could not be loaded"
        description={error.message}
        retryLabel="Try again"
      />
    ));

    expect(
      await findHeading('Clusters could not be loaded'),
    ).toBeInTheDocument();
    expect(screen.getByText('Network down')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Try again' }),
    ).toBeInTheDocument();
  });

  it('should allow replacing the icon', async () => {
    const { findHeading } = setup({
      icon: <img alt="Broken plug" src="error.svg" />,
    });

    await findHeading();

    expect(
      screen.getByRole('img', { name: 'Broken plug' }),
    ).toBeInTheDocument();
  });

  it("shouldn't have accessibility violations", async () => {
    const { container, findHeading } = setup();

    await findHeading();

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
