import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren<{
  classNameExpandedCell?: string;
  classNameExpandedContent?: string;
  classNameExpandedRow?: string;
  colSpan: number;
  id: string;
  isExpanded: boolean;
  isLastRow?: boolean;
}>;
