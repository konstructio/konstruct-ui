import { RowData } from '../../../../VirtualizedTable.types';
import { Props } from '../../Actions.types';
export declare const PortalActions: <TData extends RowData>({ actions, wrapperClassName, triggerButtonClassName, iconTriggerButtonClassName, wrapperActionsClassName, wrapperContentActionsClassName, ...delegated }: Omit<Props<TData>, "isPortal">) => import("react").JSX.Element;
