import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

import { badgeVariants } from './Badge.variants';

export type BadgeProps = VariantProps<typeof badgeVariants> & {
  className?: string;
  dismissible?: true;
  label: string;
  leftIcon?: ReactNode;
  loading?: boolean;
  isSelectable?: boolean;
  onClick?: VoidFunction;
  onDismiss?: VoidFunction;
};
