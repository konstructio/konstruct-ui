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
  ariaLabel,
  columns,
  data,
  // Pagination
  showPagination: showPaginationProp,
  showTotalItems,
  showDropdownPagination,
  showDotPagination,
  showFormPagination,
  // Filter
  showFilter = false,
  filterSearchPlaceholder = '',
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
    <TableProvider<T> columns={columns} data={data}>
      <section>
        {showFilter && <Filter placeholder={filterSearchPlaceholder} />}

        <div
          className={cn('shadow rounded-t-lg', {
            'overflow-hidden rounded-lg': !showPagination,
          })}
        >
          <table className="w-full border-collapse" aria-label={ariaLabel}>
            <Header />
            <Body />
          </table>
        </div>

        {showPagination && (
          <Pagination
            showTotalItems={showTotalItems}
            showDropdownPagination={showDropdownPagination}
            showDotPagination={showDotPagination}
            showFormPagination={showFormPagination}
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
