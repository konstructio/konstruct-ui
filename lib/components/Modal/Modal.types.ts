import { PropsWithChildren, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';

import { modalVariants } from './components/Wrapper/Wrapper.variants';
import { Theme } from '@/domain/theme';

export interface ModalProps
  extends PropsWithChildren,
    VariantProps<typeof modalVariants> {
  buttonCloseClassName?: string;
  className?: string;
  container?: Element | DocumentFragment;
  isOpen?: boolean;
  showCloseButton?: boolean;
  theme?: Theme;
  onClose?: () => void;
}

export type ModalChildProps = {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
};
