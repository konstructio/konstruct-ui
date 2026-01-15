import { JSX, useMemo } from 'react';

import { cn } from '@/utils';

import { Props, RowData } from './VirtualizedTable.types';
import {
  Actions,
  Body,
  Filter,
  Header,
  Pagination,
  TruncateText,
  WrapperBody,
} from './components';
import { Props as ActionProps } from './components/Actions/Actions.types';
import { TableProvider } from './contexts';

/**
 * A feature-rich data table component with filtering, pagination, and sorting.
 * Built on TanStack Table with support for server-side data fetching.
 *
 * @example
 * ```tsx
 * <VirtualizedTable
 *   id="orders-table"
 *   columns={[
 *     { accessorKey: 'id', header: 'Order ID' },
 *     { accessorKey: 'status', header: 'Status' },
 *     { accessorKey: 'total', header: 'Total' },
 *   ]}
 *   data={orders}
 *   totalItems={totalOrders}
 *   showPagination
 *   showDropdownPagination
 *   showFilter
 *   showFilterInput
 *   filterSearchPlaceholder="Search orders..."
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-virtualizedtable--docs Storybook}
 */
const VirtualizedTableInner = <TData extends RowData>({
  id,
  ariaLabel,
  columns,
  data,
  totalItems = -Infinity,
  className,
  classNameHeaderActiveArrows,
  classNameHeaderArrows,
  classNameHeaderTable,
  classNameTable,
  classNameWrapperTable,
  isLoading,
  fetchData,
  queryOptions,
  // Pagination
  showPagination: showPaginationProp,
  showTotalItems,
  showDropdownPagination,
  showDotPagination,
  showFormPagination,
  pageSizes,
  // Filter
  showFilter = false,
  showFilterInput,
  filterSearchPlaceholder = '',
  multiSelectFilter,
  filterActions,
  showResetButton = true,
  resetButtonClassName,
}: Props<TData>): JSX.Element => {
  const showPagination = useMemo(
    () =>
      showPaginationProp ||
      [
        showTotalItems,
        showDropdownPagination,
        showDotPagination,
        showFormPagination,
      ].some(Boolean),
    [],
  );

  return (
    <TableProvider<TData>
      id={id}
      columns={columns}
      data={data}
      fetchData={fetchData}
      totalItems={totalItems}
      queryOptions={queryOptions}
      isPaginationEnabled={showPagination}
    >
      <section className={cn('w-full min-w-fit', className)}>
        {showFilter && (
          <Filter
            actions={filterActions}
            multiSelectFilter={multiSelectFilter}
            placeholder={filterSearchPlaceholder}
            showFilterInput={showFilterInput}
            showResetButton={showResetButton}
            resetButtonClassName={resetButtonClassName}
          />
        )}

        <WrapperBody
          showPagination={showPagination}
          classNameWrapperTable={classNameWrapperTable}
          isLoading={isLoading}
        >
          <table
            className={cn(
              'w-full border-collapse table-auto',
              'dark:border-separate dark:border-spacing-0',
              classNameTable,
            )}
            aria-label={ariaLabel}
          >
            <Header
              className={classNameHeaderTable}
              classNameArrows={classNameHeaderArrows}
              classNameActiveArrows={classNameHeaderActiveArrows}
            />
            <Body isLoading={isLoading} showPagination={showPagination} />
          </table>
        </WrapperBody>

        {showPagination && (
          <Pagination
            showTotalItems={showTotalItems}
            showDropdownPagination={showDropdownPagination}
            showDotPagination={showDotPagination}
            showFormPagination={showFormPagination}
            pageSizes={pageSizes}
            isLoading={isLoading}
          />
        )}
      </section>
    </TableProvider>
  );
};

type VirtualizedTableCompound = (<TData extends RowData>(
  props: Props<TData>,
) => JSX.Element) & {
  TruncateText: typeof TruncateText;
  Actions: <TData extends RowData>(
    props: ActionProps<TData>,
  ) => JSX.Element | null;
  displayName?: string;
};

const VirtualizedTable = VirtualizedTableInner as VirtualizedTableCompound;

VirtualizedTable.displayName = 'KonstructVirtualizedTable';

VirtualizedTable.TruncateText = TruncateText;
VirtualizedTable.Actions = Actions;

export { TruncateText, VirtualizedTable };
