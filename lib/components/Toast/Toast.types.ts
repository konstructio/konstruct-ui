import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren, ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { toastVariants } from './Toast.variants';

export interface ToastProps
  extends PropsWithChildren, VariantProps<typeof toastVariants> {
  className?: string;
  closeButtonClassName?: string;
  description: string | ReactNode;
  descriptionClassName?: string;
  duration?: number;
  open: boolean;
  showCloseButton?: boolean;
  theme?: Theme;
  title: string | ReactNode;
  titleClassName?: string;
  setOpen: (open: boolean) => void;
}
