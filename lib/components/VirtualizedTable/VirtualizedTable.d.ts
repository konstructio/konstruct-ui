import { JSX } from '../../../../node_modules/react';
import { Props, RowData } from './VirtualizedTable.types';
import { TruncateText } from './components';
import { Props as ActionProps } from './components/Actions/Actions.types';
type VirtualizedTableCompound = (<TData extends RowData>(props: Props<TData>) => JSX.Element) & {
    TruncateText: typeof TruncateText;
    Actions: <TData extends RowData>(props: ActionProps<TData>) => JSX.Element | null;
    Events: {
        sendExpandRowEvent: (tableId: string, rowId: string) => void;
        sendCollapseRowEvent: (tableId: string, rowId: string) => void;
        sendToggleRowEvent: (tableId: string, rowId: string) => void;
    };
    displayName?: string;
};
declare const VirtualizedTable: VirtualizedTableCompound;
export { TruncateText, VirtualizedTable };
