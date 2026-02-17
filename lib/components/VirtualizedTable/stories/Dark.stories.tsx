import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EyeIcon } from 'lucide-react';
import { ReactNode, useCallback, useEffect, useId, useState } from 'react';

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
      headerClassName: 'w-[92px]',
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

type PokemonWithMeta = Pokemon & {
  meta?: { expandedRow?: ReactNode };
};

const addExpandedContent = (results: Pokemon[]): PokemonWithMeta[] =>
  results.map((pokemon, index) => ({
    ...pokemon,
    meta:
      index % 2 === 0
        ? {
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
          }
        : undefined,
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

export default meta;
