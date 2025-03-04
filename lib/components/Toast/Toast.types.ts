import { PropsWithChildren, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';

import { toastVariants } from './Toast.variants';

export interface ToastProps
  extends PropsWithChildren,
    VariantProps<typeof toastVariants> {
  className?: string;
  description: string | ReactNode;
  descriptionClassName?: string;
  duration?: number;
  showCloseButton?: boolean;
  title: string | ReactNode;
  titleClassName?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  closeButtonClassName?: string;
}
