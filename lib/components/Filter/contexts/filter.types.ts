import type { PropsWithChildren } from 'react';

export type FilterContextType = {
  closeOnApply: boolean;
  mobileSheet?: boolean;
  sheetDraggable?: boolean;
  resetScope?: string;
  theme?: string;
};

export type Props = PropsWithChildren<FilterContextType>;
