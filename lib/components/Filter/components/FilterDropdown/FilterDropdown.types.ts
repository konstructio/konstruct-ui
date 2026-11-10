import { PropsWithChildren, ReactNode } from 'react';

export type Props = PropsWithChildren & {
  isOpen: boolean;
  trigger: ReactNode;
  triggerClassName?: string;
  position?: 'left' | 'right';
  contentClassName?: string;
  /** Heading of the phone sheet used below md */
  sheetTitle?: ReactNode;
  /** Step shown by the phone sheet; changing it slides the content */
  sheetStep?: number;
  /** What the previous sheet step shows now, for the back preview */
  sheetPreviousContent?: ReactNode;
  /** Goes back one step in the phone sheet */
  onSheetBack?: () => void;
  onOpenChange: (open: boolean) => void;
};
