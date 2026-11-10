import { CellContext } from '@tanstack/react-table';
import { ElementType, ReactNode } from 'react';

import { Props as TooltipProps } from '@/components/Tooltip/Tooltip.types';

import { RowData } from '../../VirtualizedTable.types';

export type Action<TData> = {
  className?: string;
  /** Style the action as destructive in the phone action sheet */
  destructive?: boolean;
  disabled?: boolean;
  disabledReason?: ReactNode;
  disabledReasonSide?: TooltipProps['side'];
  id?: string;
  onClick: (rowData: TData) => void;
  /** Draw a divider above the action in the phone action sheet */
  separator?: boolean;
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
  /** Open the actions in a sheet docked to the bottom of the screen on phones (default: false) */
  mobileSheet?: boolean;
  /** Let a finger drag the phone action sheet closed (default: true) */
  sheetDraggable?: boolean;
  /** Heading of the phone action sheet (default: 'Actions') */
  sheetTitle?: ReactNode | ((rowData: TData) => ReactNode);
  triggerButtonClassName?: string;
  wrapperActionsClassName?: string;
  wrapperClassName?: string;
  wrapperContentActionsClassName?: string;
};
