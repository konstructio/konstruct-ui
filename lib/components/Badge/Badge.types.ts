import { VariantProps } from 'class-variance-authority';

import { badgeVariants } from './Badge.variants';

export type BadgeProps = VariantProps<typeof badgeVariants> & {
  label: string;
  className?: string;
  loading?: boolean;
  dismissible?: true;
  onClick?: VoidFunction;
  onDismiss?: VoidFunction;
};
