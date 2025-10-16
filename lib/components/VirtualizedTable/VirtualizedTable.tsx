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
  fetchData,
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
    >
      <section className={className}>
        {showFilter && (
          <Filter
            placeholder={filterSearchPlaceholder}
            multiSelectFilter={multiSelectFilter}
            showFilterInput={showFilterInput}
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
            <Body />
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
