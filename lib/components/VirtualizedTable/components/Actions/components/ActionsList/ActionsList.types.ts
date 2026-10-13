import { Props as TooltipProps } from '@/components/Tooltip/Tooltip.types';

import { RowData } from '../../../../VirtualizedTable.types';
import { Action } from '../../Actions.types';

export type Props<TData extends RowData> = {
  actions: Action<TData>[];
  className?: string;
  disabledReasonSide?: TooltipProps['side'];
  isMenu?: boolean;
  rowData: TData;
  onSelect?: () => void;
};
