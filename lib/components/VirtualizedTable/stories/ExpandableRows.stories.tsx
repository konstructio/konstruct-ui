import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useCallback, useEffect, useId, useState } from 'react';

import { getPokemons, Pokemon } from '../../../../mocks';

import { DEFAULT_PAGE_SIZE } from '../constants';
import { VirtualizedTable as VirtualizedTableComponent } from '../VirtualizedTable';
import { ColumnDef } from '../VirtualizedTable.types';

type PokemonResponse = {
  page?: number;
  pageSize?: number;
  termOfSearch?: string;
  type?: ('grass' | 'fire' | 'water' | 'bug' | 'normal')[];
};

const queryClient = new QueryClient();

const meta: Meta<typeof VirtualizedTableComponent> = {
  title: 'In Review/VirtualizedTable/Expandable Rows',
  component: VirtualizedTableComponent,
};

export default meta;

type Story = StoryObj<typeof VirtualizedTableComponent>;

const columns: ColumnDef<Pokemon>[] = [
  {
    header: 'Id',
    accessorKey: 'id',
    meta: { headerClassName: 'whitespace-nowrap w-0' },
  },
  { header: 'Name', accessorKey: 'name' },
  { header: 'Type', accessorKey: 'type' },
  { header: 'Height', accessorKey: 'height' },
  { header: 'Weight', accessorKey: 'weight' },
];

type PokemonWithMeta = Pokemon & {
  meta?: { expandedRow?: React.ReactNode };
};

const addExpandedContent = (results: Pokemon[]): PokemonWithMeta[] =>
  results.map((pokemon, index) => ({
    ...pokemon,
    meta:
      index % 2 === 0
        ? {
            expandedRow: (
              <div className="flex flex-col gap-2 py-2">
                <p className="text-xs text-gray-500 dark:text-metal-400">
                  Details for {pokemon.name}
                </p>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium text-gray-700 dark:text-metal-300">
                      Type
                    </span>
                    <span className="text-sm">{pokemon.type}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium text-gray-700 dark:text-metal-300">
                      Ability
                    </span>
                    <span className="text-sm">{pokemon.ability}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium text-gray-700 dark:text-metal-300">
                      Height / Weight
                    </span>
                    <span className="text-sm">
                      {pokemon.height} / {pokemon.weight}
                    </span>
                  </div>
                </div>
              </div>
            ),
          }
        : undefined,
  }));

export const Default: Story = {
  args: {
    showPagination: true,
    showFilter: true,
    showFilterInput: true,
    enableExpandedRow: true,
    ariaLabel: 'List of pokemons with expandable rows',
    pageSizes: [5, 10, 20],
  },
  render: (args) => {
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
          {...args}
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
