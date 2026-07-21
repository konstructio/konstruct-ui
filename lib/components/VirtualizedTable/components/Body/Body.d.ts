import { RowData } from '../../VirtualizedTable.types';
import { BodyProps } from './Body.types';
export declare const Body: <TData extends RowData = RowData>({ isLoading, showPagination, emptyState, errorState, }: BodyProps<TData>) => import("react").JSX.Element;
