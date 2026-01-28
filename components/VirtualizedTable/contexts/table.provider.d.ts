import { ColumnDef } from '@tanstack/react-table';
import { PropsWithChildren } from '../../../../node_modules/react';
import { RowData, Props as TableProps } from '../VirtualizedTable.types';
type Props<TData extends RowData = RowData> = PropsWithChildren & {
    id: string | string[] | number | number[];
    data: TData[];
    columns: ColumnDef<TData, string>[];
    totalItems: number;
    queryOptions?: TableProps<TData>['queryOptions'];
    isPaginationEnabled?: boolean;
    fetchData?: (params: Record<string, string | number | string[] | number[] | undefined>) => Promise<{
        data: TData[];
        totalItemsCount?: number;
    }>;
};
export declare const TableProvider: <TData extends RowData = RowData>({ children, id, data: defaultData, columns, totalItems, isPaginationEnabled, queryOptions, fetchData, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
