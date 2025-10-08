import { JSX } from 'react';

import { Props, RowData } from './VirtualizedTable.types';
import { Body, Header } from './components';
import { TableProvider } from './contexts';

const VirtualizedTable = <T extends RowData = RowData>({
  data,
  columns,
}: Props<T>): JSX.Element => (
  <TableProvider<T> columns={columns} data={data}>
    <table className="w-full border-collapse" aria-label="List of accounts">
      <Header<T> />
      <Body />
    </table>
  </TableProvider>
);

VirtualizedTable.displayName = 'KonstructVirtualizedTable';

export { VirtualizedTable };
