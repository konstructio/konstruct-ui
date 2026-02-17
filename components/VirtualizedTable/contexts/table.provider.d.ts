import { RowData } from '../VirtualizedTable.types';
import { Props } from './table.types';
export declare const TableProvider: <TData extends RowData = RowData>({ children, classNameExpandedCell, classNameExpandedContent, classNameExpandedRow, classNameExpandedHeader, columns, data: defaultData, defaultExpanded, enableExpandedRow, expandedState, id, isPaginationEnabled, queryOptions, totalItems, fetchData, onExpandedChange, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
