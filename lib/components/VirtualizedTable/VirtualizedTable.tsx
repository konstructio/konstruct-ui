import { FC, JSX, useMemo } from 'react';

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

const VirtualizedTable = <T extends RowData = RowData>({
  id,
  ariaLabel,
  columns,
  data,
  totalItems,
  classNameHeaderTable,
  classNameHeaderArrows,
  classNameHeaderActiveArrows,
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
}: Props<T> & { TruncateText: FC; Actions: FC<ActionProps> }): JSX.Element => {
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
    <TableProvider<T>
      id={id}
      columns={columns}
      data={data}
      fetchData={fetchData}
      totalItems={totalItems}
    >
      <section>
        {showFilter && (
          <Filter
            placeholder={filterSearchPlaceholder}
            multiSelectFilter={multiSelectFilter}
            showFilterInput={showFilterInput}
          />
        )}

        <div
          className={cn('shadow rounded-t-lg', {
            'overflow-hidden rounded-lg': !showPagination,
          })}
        >
          <table className="w-full border-collapse" aria-label={ariaLabel}>
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

VirtualizedTable.displayName = 'KonstructVirtualizedTable';

VirtualizedTable.TruncateText = TruncateText;
VirtualizedTable.Actions = Actions;

export { TruncateText, VirtualizedTable };
