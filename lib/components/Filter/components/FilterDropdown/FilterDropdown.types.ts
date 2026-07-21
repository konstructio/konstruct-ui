import { PropsWithChildren, ReactNode } from 'react';

export type FilterDropdownProps = PropsWithChildren & {
  isOpen: boolean;
  trigger: ReactNode;
  triggerClassName?: string;
  position?: 'left' | 'right';
  contentClassName?: string;
  onOpenChange: (open: boolean) => void;
};
