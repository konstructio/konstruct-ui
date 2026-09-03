import { CellContext } from '@tanstack/react-table';
import { ElementType, ReactNode } from '../../../../../node_modules/react';
import { RowData } from '../../VirtualizedTable.types';
export type Action<TData> = {
    className?: string;
    id?: string;
    onClick: (rowData: TData) => void;
} & ({
    component: ElementType;
    label?: string | ReactNode;
    componentProps?: Record<string, unknown>;
} | {
    component?: undefined;
    label: string | ReactNode;
    componentProps?: never;
});
export type Props<TData extends RowData> = CellContext<TData, unknown> & {
    actions: Action<TData>[];
    iconTriggerButtonClassName?: string;
    isPortal?: boolean;
    triggerButtonClassName?: string;
    wrapperActionsClassName?: string;
    wrapperClassName?: string;
    wrapperContentActionsClassName?: string;
};
