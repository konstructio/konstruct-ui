import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EyeIcon } from 'lucide-react';
import {
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from 'react';

import { Button } from '@/components/Button/Button';
import { Typography } from '@/components/Typography/Typography';

import { getPokemons, Pokemon } from '../../../../mocks';
import { DEFAULT_PAGE_SIZE } from '../constants';
import { VirtualizedTable as VirtualizedTableComponent } from '../VirtualizedTable';
import { ColumnDef, Props } from '../VirtualizedTable.types';

type Story = StoryObj<typeof VirtualizedTableComponent>;

type PokemonResponse = {
  page?: number;
  pageSize?: number;
  termOfSearch?: string;
  type?: ('grass' | 'fire' | 'water' | 'bug' | 'normal')[];
};

const meta: Meta<typeof VirtualizedTableComponent> = {
  title: 'In Review/VirtualizedTable/Dark',
  component: VirtualizedTableComponent,
};

const queryClient = new QueryClient();

type DateField = 'created' | 'updated' | 'expires' | 'deleted';

type PokemonWithDates = Pokemon & Record<DateField, Date>;

const DATE_FIELDS: DateField[] = ['created', 'updated', 'expires', 'deleted'];

/** Midnight today, shared by the synthetic dates and the filters' caps. */
const startOfToday = (() => {
  const now = new Date();

  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
})();

const columns: ColumnDef<Pokemon>[] = [
  {
    header: 'Id',
    accessorKey: 'id',
    meta: {
      headerClassName: 'whitespace-nowrap w-0',
    },
  },
  {
    header: 'Name',
    accessorKey: 'name',
    cell: (props) => (
      <VirtualizedTableComponent.TruncateText
        {...props}
        copyable
        value={`${props.getValue().charAt(0).toUpperCase()}${props
          .getValue()
          .slice(1)}`}
      />
    ),
  },
  {
    header: 'Type',
    accessorKey: 'type',
    cell: (props) => (
      <VirtualizedTableComponent.TruncateText
        {...props}
        value={`${props.getValue().charAt(0).toUpperCase()}${props
          .getValue()
          .slice(1)}`}
      />
    ),
  },
  {
    header: 'Height',
    accessorKey: 'height',
  },
  {
    header: 'Weight',
    accessorKey: 'weight',
  },
  {
    header: 'Ability',
    accessorKey: 'ability',
    cell: (props) => (
      <VirtualizedTableComponent.TruncateText
        {...props}
        value={`${props.getValue().charAt(0).toUpperCase()}${props
          .getValue()
          .slice(1)}`}
      />
    ),
  },
  {
    id: 'actions',
    enableSorting: false,
    enableResizing: false,
    cell: (props) => (
      <VirtualizedTableComponent.Actions
        {...props}
        actions={[
          {
            label: (
              <span className="flex items-center gap-2">
                <EyeIcon className="w-4 h-4" />
                First Action
              </span>
            ),
            onClick: (row) => {
              console.log(`Viewing details for ${JSON.stringify(row)}`);
            },
            className: 'text-slate-800',
          },
          {
            label: 'Second Action',
            onClick: (row) => {
              console.log(`Viewing details for ${JSON.stringify(row)}`);
            },
          },
        ]}
      />
    ),
    header: () => <span className="sr-only">Action Buttons</span>,
    meta: {
      headerClassName: 'w-23',
      className: 'flex justify-center',
    },
  },
];

const args = {
  showFilter: true,
  showResetButton: true,
  showPagination: true,
  isLoading: false,
  ariaLabel: 'List of pokemons',
  pageSizes: [5, 10, 20, 30, 50],
  filters: [
    {
      key: 'type',
      label: 'Type',
      options: [
        {
          id: 'grass',
          label: 'Grass',
          variant: 'success',
        },
        {
          id: 'fire',
          label: 'Fire',
          variant: 'danger',
        },
        {
          id: 'water',
          label: 'Water',
          variant: 'info',
        },
        {
          id: 'bug',
          label: 'Bug',
          variant: 'warning',
        },
        {
          id: 'normal',
          label: 'Normal',
          variant: undefined,
        },
      ],
    },
    {
      type: 'action',
      label: 'Export',
      variant: 'secondary',
      onClick: () => {
        console.log('Export');
      },
    },
    {
      key: 'created',
      type: 'date',
      label: 'Created',
    },
    {
      key: 'time',
      type: 'time',
      label: 'Time',
      showTimePicker: false,
      presets: [
        { label: 'Last 15 mins', value: new Date(Date.now() - 15 * 60 * 1000) },
        { label: 'Last 30 mins', value: new Date(Date.now() - 30 * 60 * 1000) },
        { label: 'Last 1 hour', value: new Date(Date.now() - 60 * 60 * 1000) },
        {
          label: 'Last 6 hours',
          value: new Date(Date.now() - 6 * 60 * 60 * 1000),
        },
      ],
    },
  ],
} satisfies Partial<Props<unknown>>;

export const Default: Story = {
  args,
  render: (args) => {
    const id = useId();
    const [{ data, totalItemsCount }, setData] = useState<{
      data: Pokemon[];
      totalItemsCount: number;
    }>({
      data: [],
      totalItemsCount: 0,
    });

    useEffect(() => {
      const init = async () => {
        const result = await getPokemons({
          page: 1,
          pageSize: DEFAULT_PAGE_SIZE,
        });

        setData({
          data: result.results,
          totalItemsCount: result.totalItemsCount,
        });
      };

      init();
    }, []);

    useEffect(() => {
      document.body.setAttribute('data-theme', 'dark');
      document.body.classList.add('bg-metal-900');

      return () => {
        document.body.removeAttribute('data-theme');
        document.body.classList.remove('bg-metal-900');
      };
    }, []);

    const getNewData = useCallback(
      async ({
        page = 1,
        pageSize = DEFAULT_PAGE_SIZE,
        termOfSearch = undefined,
        type = undefined,
      }: PokemonResponse) => {
        const result = await getPokemons({
          page,
          pageSize,
          termOfSearch,
          type,
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));

        return {
          data: result.results,
          totalItemsCount: result.totalItemsCount,
        };
      },
      [getPokemons],
    );

    if (data.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent<Pokemon>
          {...args}
          id={id}
          data={data}
          columns={columns}
          showPagination={true}
          fetchData={getNewData}
          totalItems={totalItemsCount}
        />
      </QueryClientProvider>
    );
  },
};

export const PaginationWithFewItems: Story = {
  render: () => {
    const id = useId();
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
      const init = async () => {
        const result = await getPokemons({ page: 1, pageSize: 5 });

        setPokemons(result.results);
      };

      init();
    }, []);

    useEffect(() => {
      document.body.setAttribute('data-theme', 'dark');
      document.body.classList.add('bg-metal-900');

      return () => {
        document.body.removeAttribute('data-theme');
        document.body.classList.remove('bg-metal-900');
      };
    }, []);

    return (
      <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent<Pokemon>
          id={id}
          ariaLabel="List of pokemons"
          classNameWrapperTable="overflow-visible"
          data={pokemons}
          columns={columns}
          showPagination={true}
          totalItems={pokemons.length}
        />
      </QueryClientProvider>
    );
  },
};

type PokemonWithMeta = Pokemon & {
  meta?: { expandedRow?: ReactNode };
};

const addExpandedContent = (results: Pokemon[]): PokemonWithMeta[] =>
  results.map((pokemon) => ({
    ...pokemon,
    meta: {
      expandedRow: (
        <div className="flex flex-col gap-2 py-2">
          <Typography variant="body3" className="text-metal-400">
            Details for {pokemon.name}
          </Typography>
          <div className="flex gap-4">
            <div className="flex flex-col gap-1">
              <Typography
                variant="body3"
                className="font-medium text-metal-300"
              >
                Type
              </Typography>
              <Typography variant="body2">{pokemon.type}</Typography>
            </div>
            <div className="flex flex-col gap-1">
              <Typography
                variant="body3"
                className="font-medium text-metal-300"
              >
                Ability
              </Typography>
              <Typography variant="body2">{pokemon.ability}</Typography>
            </div>
            <div className="flex flex-col gap-1">
              <Typography
                variant="body3"
                className="font-medium text-metal-300"
              >
                Height / Weight
              </Typography>
              <Typography variant="body2">
                {pokemon.height} / {pokemon.weight}
              </Typography>
            </div>
          </div>
        </div>
      ),
    },
  }));

export const ExpandableRows: Story = {
  args: {
    ...args,
    enableExpandedRow: true,
    ariaLabel: 'List of pokemons with expandable rows',
  },
  render: (storyArgs) => {
    const id = useId();
    const [{ data, totalItemsCount }, setData] = useState<{
      data: PokemonWithMeta[];
      totalItemsCount: number;
    }>({ data: [], totalItemsCount: 0 });

    useEffect(() => {
      const init = async () => {
        const result = await getPokemons({
          page: 1,
          pageSize: DEFAULT_PAGE_SIZE,
        });

        setData({
          data: addExpandedContent(result.results),
          totalItemsCount: result.totalItemsCount,
        });
      };

      init();
    }, []);

    useEffect(() => {
      document.body.setAttribute('data-theme', 'dark');
      document.body.classList.add('bg-metal-900');

      return () => {
        document.body.removeAttribute('data-theme');
        document.body.classList.remove('bg-metal-900');
      };
    }, []);

    const getNewData = useCallback(
      async ({
        page = 1,
        pageSize = DEFAULT_PAGE_SIZE,
        termOfSearch = undefined,
        type = undefined,
      }: PokemonResponse) => {
        const result = await getPokemons({
          page,
          pageSize,
          termOfSearch,
          type,
        });

        await new Promise((resolve) => setTimeout(resolve, 500));

        return {
          data: addExpandedContent(result.results),
          totalItemsCount: result.totalItemsCount,
        };
      },
      [],
    );

    if (data.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent<PokemonWithMeta>
          {...storyArgs}
          enableHoverRow
          id={id}
          data={data}
          columns={columns as ColumnDef<PokemonWithMeta>[]}
          showPagination={true}
          fetchData={getNewData}
          totalItems={totalItemsCount}
          enableExpandedRow
        />
      </QueryClientProvider>
    );
  },
};

const EXTERNAL_TRIGGER_TABLE_ID = 'external-trigger-table';

export const ExpandableRowsWithExternalTrigger: Story = {
  args: {
    ...args,
    enableExpandedRow: true,
    ariaLabel: 'List of pokemons with external expand trigger',
  },
  render: (storyArgs) => {
    const [{ data, totalItemsCount }, setData] = useState<{
      data: Pokemon[];
      totalItemsCount: number;
    }>({ data: [], totalItemsCount: 0 });
    const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>(
      {},
    );

    const handleToggleSelect = (rowId: string) => {
      setSelectedRows((prev) => {
        const isSelected = !prev[rowId];

        if (isSelected) {
          VirtualizedTableComponent.Events.sendExpandRowEvent(
            EXTERNAL_TRIGGER_TABLE_ID,
            rowId,
          );
        } else {
          VirtualizedTableComponent.Events.sendCollapseRowEvent(
            EXTERNAL_TRIGGER_TABLE_ID,
            rowId,
          );
        }

        return { ...prev, [rowId]: isSelected };
      });
    };

    useEffect(() => {
      const init = async () => {
        const result = await getPokemons({
          page: 1,
          pageSize: DEFAULT_PAGE_SIZE,
        });

        setData({
          data: result.results,
          totalItemsCount: result.totalItemsCount,
        });
      };

      init();
    }, []);

    useEffect(() => {
      document.body.setAttribute('data-theme', 'dark');
      document.body.classList.add('bg-metal-900');

      return () => {
        document.body.removeAttribute('data-theme');
        document.body.classList.remove('bg-metal-900');
      };
    }, []);

    const getNewData = useCallback(
      async ({
        page = 1,
        pageSize = DEFAULT_PAGE_SIZE,
        termOfSearch = undefined,
        type = undefined,
      }: PokemonResponse) => {
        const result = await getPokemons({
          page,
          pageSize,
          termOfSearch,
          type,
        });

        await new Promise((resolve) => setTimeout(resolve, 500));

        return {
          data: result.results,
          totalItemsCount: result.totalItemsCount,
        };
      },
      [],
    );

    const columnsWithSelectButton: ColumnDef<Pokemon>[] = [
      ...columns.filter((col) => col.id !== 'actions'),
      {
        id: 'select-action',
        enableSorting: false,
        enableResizing: false,
        cell: ({ row }) => (
          <Button
            variant={selectedRows[row.id] ? 'primary' : 'secondary'}
            appearance="compact"
            onClick={() => handleToggleSelect(row.id)}
          >
            {selectedRows[row.id] ? 'Remove' : 'Add'}
          </Button>
        ),
        header: () => <span className="sr-only">Select</span>,
        meta: {
          headerClassName: 'w-37.5',
          className: 'flex justify-center h-12 items-center',
        },
      },
    ];

    if (data.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent<Pokemon>
          {...storyArgs}
          enableHoverRow
          id={EXTERNAL_TRIGGER_TABLE_ID}
          data={data}
          getRowId={(row) => String(row.id)}
          columns={columnsWithSelectButton}
          showPagination={true}
          fetchData={getNewData}
          totalItems={totalItemsCount}
          enableExpandedRow
          keepExpandColumnVisible={selectedRows}
          renderExpandedRow={(rowData) => (
            <div className="flex flex-col gap-2 py-2">
              <Typography variant="body3" className="text-metal-400">
                Configuration for {(rowData as Pokemon).name}
              </Typography>
              <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                  <Typography
                    variant="body3"
                    className="font-medium text-metal-300"
                  >
                    Type
                  </Typography>
                  <Typography variant="body2">
                    {(rowData as Pokemon).type}
                  </Typography>
                </div>
                <div className="flex flex-col gap-1">
                  <Typography
                    variant="body3"
                    className="font-medium text-metal-300"
                  >
                    Ability
                  </Typography>
                  <Typography variant="body2">
                    {(rowData as Pokemon).ability}
                  </Typography>
                </div>
                <div className="flex flex-col gap-1">
                  <Typography
                    variant="body3"
                    className="font-medium text-metal-300"
                  >
                    Height / Weight
                  </Typography>
                  <Typography variant="body2">
                    {(rowData as Pokemon).height} /{' '}
                    {(rowData as Pokemon).weight}
                  </Typography>
                </div>
              </div>
            </div>
          )}
        />
      </QueryClientProvider>
    );
  },
};

const useDarkTheme = () => {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'dark');
    document.body.classList.add('bg-metal-900');

    return () => {
      document.body.removeAttribute('data-theme');
      document.body.classList.remove('bg-metal-900');
    };
  }, []);
};

export const HeaderContent: Story = {
  render: () => {
    const id = useId();
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useDarkTheme();

    useEffect(() => {
      const init = async () => {
        const result = await getPokemons({
          page: 1,
          pageSize: DEFAULT_PAGE_SIZE,
        });

        setPokemons(result.results);
      };

      init();
    }, []);

    return (
      <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent<Pokemon>
          id={id}
          ariaLabel="List of pokemons"
          data={pokemons}
          columns={columns}
          headerContent={
            <div className="flex w-full items-center justify-between">
              <span>Usage for billing period 1 - 31 March 2026</span>
              <span className="font-semibold">$0.00</span>
            </div>
          }
        />
      </QueryClientProvider>
    );
  },
};

export const ErrorState: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'With React Query default retry (3 attempts) the errorState appears after retries are exhausted; pass `queryOptions={{ retry: false }}` to show it immediately. A background refetch failure keeps the current rows visible.',
      },
    },
  },
  render: () => {
    const id = useId();

    useDarkTheme();

    const fetchWithError = useCallback(async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      throw new Error('Failed to load pokemons');
    }, []);

    return (
      <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent<Pokemon>
          id={id}
          ariaLabel="List of pokemons"
          data={[]}
          columns={columns}
          fetchData={fetchWithError}
          queryOptions={{ retry: false }}
          errorState={(error) => (
            <div className="flex flex-col items-center gap-2 py-12">
              <Typography
                variant="body2"
                className="font-medium dark:text-metal-50"
              >
                Something went wrong
              </Typography>
              <Typography
                variant="body3"
                className="text-gray-500 dark:text-metal-400"
              >
                {error.message}
              </Typography>
            </div>
          )}
        />
      </QueryClientProvider>
    );
  },
};

export const HorizontalScrollWithFilters: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The scroll container (classNameScrollContainer) wraps the table and the pagination bar so both scroll together; the filter row stays fixed to the container width. Filter dropdowns always render in a portal, and the page-size dropdown does so automatically when classNameScrollContainer is set, so the overflow container never clips them.',
      },
    },
  },
  render: () => {
    const id = useId();
    const [{ data, totalItemsCount }, setData] = useState<{
      data: Pokemon[];
      totalItemsCount: number;
    }>({ data: [], totalItemsCount: 0 });

    useDarkTheme();

    useEffect(() => {
      const init = async () => {
        const result = await getPokemons({
          page: 1,
          pageSize: DEFAULT_PAGE_SIZE,
        });

        setData({
          data: result.results,
          totalItemsCount: result.totalItemsCount,
        });
      };

      init();
    }, []);

    const getNewData = useCallback(
      async ({
        page = 1,
        pageSize = DEFAULT_PAGE_SIZE,
        termOfSearch = undefined,
        type = undefined,
      }: PokemonResponse) => {
        const result = await getPokemons({
          page,
          pageSize,
          termOfSearch,
          type,
        });

        await new Promise((resolve) => setTimeout(resolve, 500));

        return {
          data: result.results,
          totalItemsCount: result.totalItemsCount,
        };
      },
      [],
    );

    if (data.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <QueryClientProvider client={queryClient}>
        <div className="max-w-3xl">
          <VirtualizedTableComponent<Pokemon>
            id={id}
            ariaLabel="List of pokemons"
            data={data}
            columns={columns}
            classNameTable="min-w-300"
            classNameScrollContainer="overflow-x-auto contain-inline-size"
            showPagination={true}
            pageSizes={[5, 10, 20, 30, 50]}
            showFilter
            showFilterInput
            showResetButton
            filterSearchPlaceholder="Search pokemons..."
            filters={args.filters}
            fetchData={getNewData}
            totalItems={totalItemsCount}
          />
        </div>
      </QueryClientProvider>
    );
  },
};

export default meta;

/**
 * The date range filters from the Product Design System rendered in the table's
 * own filter row, one per synthetic date column, each in a different shape:
 * "Created" on a single-month calendar with each applied end in its own badge,
 * "Updated" with presets only, "Expires" with its own rolling windows confirmed
 * by hand, and "Deleted" moving both months as a pair with numeric inputs.
 *
 * The table reloads through `fetchData`, which receives every applied window
 * under its filter's key, so picking a preset visibly narrows the rows.
 */
export const CreatedDateRangeFilter: Story = {
  render: () => {
    const id = useId();
    const DAY_MS = 24 * 60 * 60 * 1000;

    // The pokemon fixture carries no dates, so the story gives each row four —
    // spread deterministically over different spans, so the same id always
    // lands on the same days and every preset has something to cut.
    const datesOf = useCallback(
      (pokemonId: number): Record<DateField, Date> => {
        const daysAgo = (span: number, salt: number) =>
          new Date(
            startOfToday.getTime() - ((pokemonId * salt) % span) * DAY_MS,
          );

        return {
          created: daysAgo(49, 1),
          updated: daysAgo(13, 3),
          expires: daysAgo(120, 7),
          deleted: daysAgo(400, 11),
        };
      },
      [DAY_MS],
    );

    const columnsWithDates: ColumnDef<PokemonWithDates>[] = useMemo(
      () => [
        ...(columns as ColumnDef<PokemonWithDates>[]).filter(
          (column) => column.id !== 'actions',
        ),
        ...DATE_FIELDS.map<ColumnDef<PokemonWithDates>>((field) => ({
          header: `${field.charAt(0).toUpperCase()}${field.slice(1)}`,
          accessorKey: field,
          cell: ({ row }) =>
            row.original[field].toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }),
        })),
      ],
      [],
    );

    const fetchData = useCallback(
      async (params: Record<string, unknown>) => {
        const { page = 1, pageSize = DEFAULT_PAGE_SIZE, termOfSearch } = params;

        const { results } = await getPokemons({
          page: 1,
          pageSize: 1000,
          termOfSearch: termOfSearch as string | undefined,
        });

        let rows: PokemonWithDates[] = results.map((pokemon) => ({
          ...pokemon,
          ...datesOf(pokemon.id),
        }));

        DATE_FIELDS.forEach((field) => {
          const window = params[field] as
            { from?: string; to?: string } | undefined;

          if (window?.from) {
            const from = new Date(window.from);
            rows = rows.filter((row) => row[field] >= from);
          }

          if (window?.to) {
            const to = new Date(window.to);
            rows = rows.filter((row) => row[field] <= to);
          }
        });

        const start = (Number(page) - 1) * Number(pageSize);

        return {
          data: rows.slice(start, start + Number(pageSize)),
          totalItemsCount: rows.length,
        };
      },
      [datesOf],
    );

    useEffect(() => {
      document.body.setAttribute('data-theme', 'dark');
      document.body.classList.add('bg-metal-900');

      return () => {
        document.body.removeAttribute('data-theme');
        document.body.classList.remove('bg-metal-900');
      };
    }, []);

    return (
      <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent<PokemonWithDates>
          id={id}
          data={[]}
          columns={columnsWithDates}
          fetchData={fetchData}
          showPagination
          totalItems={0}
          pageSizes={[10, 20, 50]}
          showFilter
          showResetButton
          ariaLabel="List of pokemons"
          filters={[
            {
              key: 'created',
              type: 'customDateRange',
              label: 'Created',
              labelTimePeriod: 'Created',
              revealCalendarOnCustom: true,
              applyOnPresetSelect: true,
              numberOfMonths: 1,
              showOutsideDays: true,
              appliedRangeDisplay: 'split',
              maxDate: startOfToday,
            },
            {
              key: 'updated',
              type: 'customDateRange',
              label: 'Updated',
              labelTimePeriod: 'Updated',
              revealCalendarOnCustom: true,
              applyOnPresetSelect: true,
              showCustomRange: false,
            },
            {
              key: 'expires',
              type: 'customDateRange',
              label: 'Expires',
              labelTimePeriod: 'Expires',
              revealCalendarOnCustom: true,
              labelCustomRange: 'Pick dates',
              rollingPresets: [
                { label: 'Past hour', duration: '1h' },
                { label: 'Past day', duration: '1day' },
                { label: 'Past week', duration: '7days' },
                { label: 'Past quarter', duration: '3months' },
                { label: 'Past year', duration: '1year' },
              ],
            },
            {
              key: 'deleted',
              type: 'customDateRange',
              label: 'Deleted',
              labelTimePeriod: 'Deleted',
              revealCalendarOnCustom: true,
              applyOnPresetSelect: true,
              navigationMode: 'together',
              dateDisplayFormat: 'numeric',
            },
          ]}
        />
      </QueryClientProvider>
    );
  },
};
