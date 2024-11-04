import { VariantProps } from 'class-variance-authority';

import { progressBarVariants } from './ProgressBar.variants';

export interface ProgressBarProps
  extends VariantProps<typeof progressBarVariants> {
  className?: string;
  label?: string;
  percent: number;
  status?: 'success' | 'progress' | 'error';
}
