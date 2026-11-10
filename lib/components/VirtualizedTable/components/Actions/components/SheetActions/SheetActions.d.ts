import { RowData } from '../../../../VirtualizedTable.types';
import { Props } from '../../Actions.types';
export declare const SheetActions: <TData extends RowData>({ actions, sheetTitle, sheetDraggable, wrapperClassName, triggerButtonClassName, iconTriggerButtonClassName, row, }: Omit<Props<TData>, "isPortal">) => import('../../../../../../../node_modules/react').JSX.Element;
