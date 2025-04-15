import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

import { alertVariants } from './Alert.variants';
import { Theme } from '@/domain/theme';

export interface AlertProps extends VariantProps<typeof alertVariants> {
  dismissible?: boolean;
  content: string | ReactNode;
  isVisible?: boolean;
  showCloseButton?: boolean;
  theme?: Theme;
}
