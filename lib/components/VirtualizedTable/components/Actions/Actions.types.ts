import { CellContext } from '@tanstack/react-table';
import { ElementType, ReactNode } from 'react';

import { Props as TooltipProps } from '@/components/Tooltip/Tooltip.types';

import { RowData } from '../../VirtualizedTable.types';

export type Action<TData> = {
  className?: string;
  disabled?: boolean;
  disabledReason?: ReactNode;
  disabledReasonSide?: TooltipProps['side'];
  id?: string;
  onClick: (rowData: TData) => void;
} & (
  | {
      component: ElementType;
      label?: string | ReactNode;
      componentProps?: Record<string, unknown>;
    }
  | {
      component?: undefined;
      label: string | ReactNode;
      componentProps?: never;
    }
);

export type Props<TData extends RowData> = CellContext<TData, unknown> & {
  actions: Action<TData>[];
  disabledReasonSide?: TooltipProps['side'];
  iconTriggerButtonClassName?: string;
  isPortal?: boolean;
  openOnHover?: boolean;
  triggerButtonClassName?: string;
  wrapperActionsClassName?: string;
  wrapperClassName?: string;
  wrapperContentActionsClassName?: string;
};
