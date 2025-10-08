import { FC, JSX } from 'react';

import { Props, RowData } from './VirtualizedTable.types';
import { Actions, Body, Footer, Header, TruncateText } from './components';
import { Props as ActionProps } from './components/Actions/Actions.types';
import { TableProvider } from './contexts';

const VirtualizedTable = <T extends RowData = RowData>({
  ariaLabel,
  columns,
  data,
}: Props<T> & { TruncateText: FC; Actions: FC<ActionProps> }): JSX.Element => (
  <TableProvider<T> columns={columns} data={data}>
    <section>
      <div className="shadow rounded-t-lg">
        <table className="w-full border-collapse" aria-label={ariaLabel}>
          <Header />
          <Body />
        </table>
      </div>

      <Footer />
    </section>
  </TableProvider>
);

VirtualizedTable.displayName = 'KonstructVirtualizedTable';

VirtualizedTable.TruncateText = TruncateText;
VirtualizedTable.Actions = Actions;

export { TruncateText, VirtualizedTable };
