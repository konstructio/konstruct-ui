import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren<{
  classNameExpandedCell?: string;
  classNameExpandedContent?: string;
  classNameExpandedRow?: string;
  colSpan: number;
  id: string;
  isCollapsing?: boolean;
  isExpanded: boolean;
  isLastRow?: boolean;
  onCollapseEnd?: (id: string) => void;
}>;
