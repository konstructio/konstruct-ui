import { CellContext } from '@tanstack/react-table';
import { Props as TooltipProps } from '../../../../../components/Tooltip/Tooltip.types';
import { RowData } from '../../VirtualizedTable.types';
export type Props<TData extends RowData> = CellContext<TData, string> & Partial<Omit<TooltipProps, 'content' | 'children' | 'textClassName'>> & {
    value?: string;
    /** Additional className for the text element */
    textClassName?: string;
};
