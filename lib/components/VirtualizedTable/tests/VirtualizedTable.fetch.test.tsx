import {
  QueryClient,
  QueryClientProvider,
  keepPreviousData,
} from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { VirtualizedTable } from '../VirtualizedTable';
import { ColumnDef, Props } from '../VirtualizedTable.types';

type Item = {
  id: string;
  name: string;
};

type FetchResponse = { data: Item[]; totalItemsCount?: number };

const columns: ColumnDef<Item>[] = [
  {
    header: 'Name',
    accessorKey: 'name',
  },
];

const alpha: Item = { id: '1', name: 'Alpha' };
const beta: Item = { id: '2', name: 'Beta' };

const createDeferredFetchData = () => {
  const deferreds: Array<{
    resolve: (value: FetchResponse) => void;
    reject: (error: Error) => void;
  }> = [];

  const fetchData = vi.fn(() => {
    return new Promise<FetchResponse>((resolve, reject) => {
      deferreds.push({ resolve, reject });
    });
  });

  const resolveFetch = (index: number, value: FetchResponse) => {
    deferreds[index].resolve(value);
  };

  const rejectFetch = (index: number, error: Error) => {
    deferreds[index].reject(error);
  };

  return { fetchData, resolveFetch, rejectFetch };
};

const isSkeletonVisible = () => {
  return !!document.querySelector('tbody .animate-pulse');
};

const setup = (
  props?: Partial<Props<Item>> & Record<string, unknown>,
  fetchDataOverride?: Props<Item>['fetchData'],
) => {
  const { fetchData, resolveFetch, rejectFetch } = createDeferredFetchData();

  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  const defaultProps = {
    id: 'fetch-table',
    ariaLabel: 'Fetch table',
    columns,
    data: [] as Item[],
    fetchData: fetchDataOverride ?? fetchData,
    showFilter: true,
    showFilterInput: true,
    filterSearchPlaceholder: 'Search items',
    showPagination: true,
    totalItems: 0,
  } as unknown as Props<Item>;

  const utils = render(
    <QueryClientProvider client={queryClient}>
      <VirtualizedTable<Item> {...defaultProps} {...(props as object)} />
    </QueryClientProvider>,
  );

  const user = userEvent.setup();
  const getSearchInput = () => {
    return screen.getByRole('textbox');
  };

  return {
    ...utils,
    user,
    queryClient,
    fetchData,
    resolveFetch,
    rejectFetch,
    getSearchInput,
  };
};

describe('VirtualizedTable / fetchData integration', () => {
  it('shows the skeleton during the initial load and the rows once it resolves', async () => {
    const { fetchData, resolveFetch } = setup();

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
    expect(isSkeletonVisible()).toBe(true);
    expect(screen.queryByText('Alpha')).not.toBeInTheDocument();

    resolveFetch(0, { data: [alpha], totalItemsCount: 1 });

    expect(await screen.findByText('Alpha')).toBeInTheDocument();
    expect(isSkeletonVisible()).toBe(false);
    expect(fetchData).toHaveBeenCalledTimes(1);
  });

  it('shows the skeleton again when the search term changes and renders the new rows', async () => {
    const { user, fetchData, resolveFetch, getSearchInput } = setup();

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
    resolveFetch(0, { data: [alpha], totalItemsCount: 1 });
    await screen.findByText('Alpha');

    await user.type(getSearchInput(), 'beta');

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(2);
    });
    expect(isSkeletonVisible()).toBe(true);

    resolveFetch(1, { data: [beta], totalItemsCount: 1 });

    expect(await screen.findByText('Beta')).toBeInTheDocument();
    expect(isSkeletonVisible()).toBe(false);
  });

  it('keeps the rows visible during a background refetch instead of flashing the skeleton', async () => {
    const { fetchData, resolveFetch, queryClient } = setup();

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
    resolveFetch(0, { data: [alpha], totalItemsCount: 25 });
    await screen.findByText('Alpha');

    queryClient.refetchQueries();

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(2);
    });
    expect(screen.getByText('Alpha')).toBeInTheDocument();
    expect(isSkeletonVisible()).toBe(false);
    expect(screen.getByText('25 Results')).toBeInTheDocument();

    resolveFetch(1, { data: [alpha, beta], totalItemsCount: 26 });

    expect(await screen.findByText('Beta')).toBeInTheDocument();
    expect(isSkeletonVisible()).toBe(false);
  });

  it('never strands the table when the consumer suppresses notifications with notifyOnChangeProps', async () => {
    const { fetchData, resolveFetch, queryClient } = setup({
      queryOptions: { notifyOnChangeProps: ['data', 'error'] },
    });

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
    resolveFetch(0, { data: [alpha], totalItemsCount: 25 });
    await screen.findByText('Alpha');
    await screen.findByText('25 Results');

    queryClient.refetchQueries();

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(2);
    });

    resolveFetch(1, { data: [alpha], totalItemsCount: 30 });

    expect(await screen.findByText('30 Results')).toBeInTheDocument();
    expect(screen.getByText('Alpha')).toBeInTheDocument();
    expect(isSkeletonVisible()).toBe(false);
  });

  it('clears the skeleton after a search that resolves to structurally-equal data', async () => {
    const { user, fetchData, resolveFetch, getSearchInput } = setup({
      queryOptions: { notifyOnChangeProps: ['data', 'error'] },
    });

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
    resolveFetch(0, { data: [alpha], totalItemsCount: 1 });
    await screen.findByText('Alpha');

    await user.type(getSearchInput(), 'alpha');

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(2);
    });
    expect(isSkeletonVisible()).toBe(true);

    resolveFetch(1, { data: [alpha], totalItemsCount: 1 });

    await waitFor(() => {
      expect(isSkeletonVisible()).toBe(false);
    });
    expect(screen.getByText('Alpha')).toBeInTheDocument();
  });

  it('keeps the previous rows during a search when the consumer opts into keepPreviousData', async () => {
    const { user, fetchData, resolveFetch, getSearchInput } = setup({
      queryOptions: { placeholderData: keepPreviousData },
    });

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
    resolveFetch(0, { data: [alpha], totalItemsCount: 1 });
    await screen.findByText('Alpha');

    await user.type(getSearchInput(), 'beta');

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(2);
    });
    expect(isSkeletonVisible()).toBe(false);
    expect(screen.getByText('Alpha')).toBeInTheDocument();

    resolveFetch(1, { data: [beta], totalItemsCount: 1 });

    expect(await screen.findByText('Beta')).toBeInTheDocument();
    expect(screen.queryByText('Alpha')).not.toBeInTheDocument();
  });

  it('does not mutate the consumer id array while building the query key', async () => {
    const id = ['fetch-table', 'scoped'];
    const { user, fetchData, resolveFetch, getSearchInput } = setup({ id });

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
    resolveFetch(0, { data: [alpha], totalItemsCount: 1 });
    await screen.findByText('Alpha');

    await user.type(getSearchInput(), 'alpha');

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(2);
    });

    expect(id).toEqual(['fetch-table', 'scoped']);
  });

  it('renders preloaded rows immediately without fetching on mount', () => {
    const { fetchData } = setup({ data: [alpha] });

    expect(screen.getByText('Alpha')).toBeInTheDocument();
    expect(isSkeletonVisible()).toBe(false);
    expect(fetchData).not.toHaveBeenCalled();
  });

  it('shows the errorState when the initial fetch fails with no rows', async () => {
    const { fetchData, rejectFetch } = setup({
      errorState: <span>Something went wrong</span>,
    });

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
    rejectFetch(0, new Error('boom'));

    expect(await screen.findByText('Something went wrong')).toBeInTheDocument();
    expect(isSkeletonVisible()).toBe(false);
  });

  it('passes the error to the errorState render function', async () => {
    const { fetchData, rejectFetch } = setup({
      errorState: (error: Error) => {
        return <span>{error.message}</span>;
      },
    });

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
    rejectFetch(0, new Error('boom'));

    expect(await screen.findByText('boom')).toBeInTheDocument();
  });

  it('keeps the rows visible when a background refetch fails', async () => {
    const { fetchData, resolveFetch, rejectFetch, queryClient } = setup({
      errorState: <span>Something went wrong</span>,
    });

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
    resolveFetch(0, { data: [alpha], totalItemsCount: 1 });
    await screen.findByText('Alpha');

    queryClient.refetchQueries();

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(2);
    });
    rejectFetch(1, new Error('boom'));

    await waitFor(() => {
      expect(screen.getByText('Alpha')).toBeInTheDocument();
    });
    expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
  });

  it('prefers the errorState over the emptyState on error', async () => {
    const { fetchData, rejectFetch } = setup({
      emptyState: <span>No results</span>,
      errorState: <span>Something went wrong</span>,
    });

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
    rejectFetch(0, new Error('boom'));

    expect(await screen.findByText('Something went wrong')).toBeInTheDocument();
    expect(screen.queryByText('No results')).not.toBeInTheDocument();
  });

  it('shows the emptyState when the fetch resolves empty and both props are set', async () => {
    const { fetchData, resolveFetch } = setup({
      emptyState: <span>No results</span>,
      errorState: <span>Something went wrong</span>,
    });

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
    resolveFetch(0, { data: [] });

    expect(await screen.findByText('No results')).toBeInTheDocument();
    expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
  });
});
