import { VariantProps } from 'class-variance-authority';

import { Theme } from '@/domain/theme';

import { progressBarVariants } from './ProgressBar.variants';

export interface ProgressBarProps
  extends VariantProps<typeof progressBarVariants> {
  className?: string;
  label?: string;
  percent: number;
  theme?: Theme;
  status?: 'success' | 'progress';
}
