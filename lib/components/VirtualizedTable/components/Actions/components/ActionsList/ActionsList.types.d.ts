import { RowData } from '../../../../VirtualizedTable.types';
import { Action } from '../../Actions.types';
export type Props<TData extends RowData> = {
    actions: Action<TData>[];
    className?: string;
    isMenu?: boolean;
    rowData: TData;
    onSelect?: () => void;
};
