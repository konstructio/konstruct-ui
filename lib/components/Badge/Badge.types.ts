import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

import { badgeVariants } from './Badge.variants';

export type BadgeProps = VariantProps<typeof badgeVariants> & {
  className?: string;
  dismissible?: true;
  isSelectable?: boolean;
  label: string;
  leftIcon?: ReactNode;
  loading?: boolean;
  rightIcon?: ReactNode;
  onClick?: VoidFunction;
  onDismiss?: VoidFunction;
};
