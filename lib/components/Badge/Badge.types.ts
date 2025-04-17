import { VariantProps } from 'class-variance-authority';

import { badgeVariants } from './Badge.variants';

export type BadgeProps = VariantProps<typeof badgeVariants> & {
  label: string;
  className?: string;
  dismissible?: boolean;
  loading?: boolean;
  onClick?: () => void;
  onDismiss?: () => void;
};
