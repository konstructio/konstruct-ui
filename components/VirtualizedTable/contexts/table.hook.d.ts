import { RowData } from '../VirtualizedTable.types';
import { ContextType } from './table.context';
export declare const useTableContext: <TData extends RowData = RowData>() => ContextType<TData>;
