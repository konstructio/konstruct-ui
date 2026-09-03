import { CellContext } from '@tanstack/react-table';

import { Props as CopyButtonProps } from '@/components/CopyButton/CopyButton.types';
import { Props as TooltipProps } from '@/components/Tooltip/Tooltip.types';
import { Props as TypographyProps } from '@/components/Typography/Typography.types';

import { RowData } from '../../VirtualizedTable.types';

export type Props<TData extends RowData = RowData> = Partial<
  CellContext<TData, string>
> &
  Partial<Omit<TooltipProps, 'content' | 'children' | 'textClassName'>> & {
    component?: TypographyProps['component'];
    copyable?: boolean;
    copyButtonProps?: Partial<Omit<CopyButtonProps, 'text'>>;
    textClassName?: string;
    value?: string;
    variant?: TypographyProps['variant'];
  };
