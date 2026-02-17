import { PropsWithChildren } from '../../../../../node_modules/react';
export type Props = PropsWithChildren<{
    classNameExpandedCell?: string;
    classNameExpandedContent?: string;
    classNameExpandedRow?: string;
    colSpan: number;
    id: string;
    isExpanded: boolean;
}>;
