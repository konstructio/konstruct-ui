import { FC, JSX } from 'react';

import { Props, RowData } from './VirtualizedTable.types';
import {
  Actions,
  Body,
  Filter,
  Pagination,
  Header,
  TruncateText,
} from './components';
import { Props as ActionProps } from './components/Actions/Actions.types';
import { TableProvider } from './contexts';

const VirtualizedTable = <T extends RowData = RowData>({
  ariaLabel,
  columns,
  data,
  showFilter = false,
  showPagination = true,
  showTotalItems,
  showDropdownPagination,
  showDotPagination,
  showFormPagination,
}: Props<T> & { TruncateText: FC; Actions: FC<ActionProps> }): JSX.Element => (
  <TableProvider<T> columns={columns} data={data}>
    <section>
      {showFilter && <Filter />}

      <div className="shadow rounded-t-lg">
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

VirtualizedTable.displayName = 'KonstructVirtualizedTable';

VirtualizedTable.TruncateText = TruncateText;
VirtualizedTable.Actions = Actions;

export { TruncateText, VirtualizedTable };
