import { PropsWithChildren, ReactNode } from 'react';

export type Props = PropsWithChildren & {
  isOpen: boolean;
  trigger: ReactNode;
  triggerClassName?: string;
  position?: 'left' | 'right';
  contentClassName?: string;
  onOpenChange: (open: boolean) => void;
};
