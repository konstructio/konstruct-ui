import { JSX } from '../../../node_modules/react';
import { Props, RowData } from './VirtualizedTable.types';
import { Props as ActionProps } from './components/Actions/Actions.types';
import { EmptyResults } from './components/EmptyResults/EmptyResults';
import { EmptyState } from './components/EmptyState/EmptyState';
import { ErrorState } from './components/ErrorState/ErrorState';
import { TruncateText } from './components/TruncateText/TruncateText';
type VirtualizedTableCompound = (<TData extends RowData>(props: Props<TData>) => JSX.Element) & {
    TruncateText: typeof TruncateText;
    EmptyState: typeof EmptyState;
    EmptyResults: typeof EmptyResults;
    ErrorState: typeof ErrorState;
    Actions: <TData extends RowData>(props: ActionProps<TData>) => JSX.Element | null;
    Events: {
        sendExpandRowEvent: (tableId: string, rowId: string) => void;
        sendCollapseRowEvent: (tableId: string, rowId: string) => void;
        sendToggleRowEvent: (tableId: string, rowId: string) => void;
        sendResetFiltersEvent: (tableId: string) => void;
        sendRefreshEvent: (tableId?: string) => void;
    };
    displayName?: string;
};
declare const VirtualizedTable: VirtualizedTableCompound;
export { EmptyResults, EmptyState, ErrorState, TruncateText, VirtualizedTable };
