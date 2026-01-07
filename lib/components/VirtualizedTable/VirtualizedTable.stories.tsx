import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EyeIcon } from 'lucide-react';
import { useCallback, useEffect, useId, useState } from 'react';

import { getPokemons, Pokemon } from '../../../mocks';

import { DEFAULT_PAGE_SIZE } from './constants';
import { VirtualizedTable as VirtualizedTableComponent } from './VirtualizedTable';
import { ColumnDef, Props } from './VirtualizedTable.types';

type Story = StoryObj<typeof VirtualizedTableComponent>;

type PokemonResponse = {
  page?: number;
  pageSize?: number;
  termOfSearch?: string;
  type?: ('grass' | 'fire' | 'water' | 'bug' | 'normal')[];
};

const meta: Meta<typeof VirtualizedTableComponent> = {
  title: 'In Review/VirtualizedTable',
  component: VirtualizedTableComponent,
};

const queryClient = new QueryClient();

const columns: ColumnDef<Pokemon>[] = [
  {
    header: 'Id',
    accessorKey: 'id',
    meta: {
      headerClassName: 'w-12',
    },
  },
  {
    header: 'Name',
    accessorKey: 'name',
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
              <span className="text-blue-800 flex items-center gap-2">
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
      headerClassName: 'w-[92px]',
      className: 'flex justify-center',
    },
  },
];

const args = {
  showFilter: true,
  showResetButton: true,
  filterSearchPlaceholder: 'Search by name...',
  showPagination: true,
  isLoading: false,
  ariaLabel: 'List of pokemons',
  pageSizes: [5, 10, 20, 30, 50],
  filterActions: [
    {
      label: 'Export',
      variant: 'secondary',
      onClick: () => {
        console.log('Export');
      },
    },
  ],
  multiSelectFilter: [
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
  ],
} satisfies Partial<Props<unknown>>;

export const Light: Story = {
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
      <div className="w-full p-4">
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
      </div>
    );
  },
};

export const Dark: Story = {
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
      <div className="w-full bg-metal-900 p-4 rounded-lg" data-theme="dark">
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
      </div>
    );
  },
};

export default meta;
