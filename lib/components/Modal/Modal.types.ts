import { PropsWithChildren, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';

import { modalVariants } from './components/Wrapper/Wrapper.variants';

export interface ModalProps
  extends PropsWithChildren,
    VariantProps<typeof modalVariants> {
  className?: string;
  buttonCloseClassName?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export type ModalChildProps = {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
};
