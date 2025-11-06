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
} from './components';
import { Props as ActionProps } from './components/Actions/Actions.types';
import { TableProvider } from './contexts';

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
          />
        )}

        <div
          className={cn(
            'shadow rounded-t-lg',
            {
              'overflow-hidden rounded-lg': !showPagination,
            },
            classNameWrapperTable,
          )}
        >
          <table
            className={cn('w-full border-collapse', classNameTable)}
            aria-label={ariaLabel}
          >
            <Header
              className={classNameHeaderTable}
              classNameArrows={classNameHeaderArrows}
              classNameActiveArrows={classNameHeaderActiveArrows}
            />
            <Body isLoading={isLoading} />
          </table>
        </div>

        {showPagination && (
          <Pagination
            showTotalItems={showTotalItems}
            showDropdownPagination={showDropdownPagination}
            showDotPagination={showDotPagination}
            showFormPagination={showFormPagination}
            pageSizes={pageSizes}
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
