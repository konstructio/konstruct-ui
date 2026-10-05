import { JSX, lazy, Suspense } from 'react';

import { cn } from '@/utils';

import { Props, RowData } from './VirtualizedTable.types';
import { Actions } from './components/Actions/Actions';
import { Props as ActionProps } from './components/Actions/Actions.types';
import { TruncateText } from './components/TruncateText/TruncateText';
import {
  sendCollapseRowEvent,
  sendExpandRowEvent,
  sendRefreshEvent,
  sendResetFiltersEvent,
  sendToggleRowEvent,
} from './events';

const VirtualizedTableContent = lazy(() =>
  import('./components/VirtualizedTableContent/VirtualizedTableContent').then(
    (module) => ({ default: module.VirtualizedTableContent }),
  ),
) as unknown as <TData extends RowData>(props: Props<TData>) => JSX.Element;

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
const VirtualizedTableInner = <TData extends RowData>(
  props: Props<TData>,
): JSX.Element => (
  <Suspense
    fallback={
      <section
        className={cn('kvt', 'w-full min-w-fit', props.className)}
        aria-busy="true"
      />
    }
  >
    <VirtualizedTableContent<TData> {...props} />
  </Suspense>
);

type VirtualizedTableCompound = (<TData extends RowData>(
  props: Props<TData>,
) => JSX.Element) & {
  TruncateText: typeof TruncateText;
  Actions: <TData extends RowData>(
    props: ActionProps<TData>,
  ) => JSX.Element | null;
  Events: {
    sendExpandRowEvent: (tableId: string, rowId: string) => void;
    sendCollapseRowEvent: (tableId: string, rowId: string) => void;
    sendToggleRowEvent: (tableId: string, rowId: string) => void;
    sendResetFiltersEvent: (tableId: string) => void;
    sendRefreshEvent: (tableId?: string) => void;
  };
  displayName?: string;
};

const VirtualizedTable = VirtualizedTableInner as VirtualizedTableCompound;

VirtualizedTable.displayName = 'KonstructVirtualizedTable';

VirtualizedTable.TruncateText = TruncateText;
VirtualizedTable.Actions = Actions;
VirtualizedTable.Events = {
  sendExpandRowEvent,
  sendCollapseRowEvent,
  sendToggleRowEvent,
  sendResetFiltersEvent,
  sendRefreshEvent,
};

export { TruncateText, VirtualizedTable };
