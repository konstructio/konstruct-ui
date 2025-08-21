import { VariantProps } from 'class-variance-authority';

import { Theme } from '@/domain/theme';

import { progressBarVariants } from './ProgressBar.variants';

export interface ProgressBarProps
  extends VariantProps<typeof progressBarVariants> {
  backgroundBarClassName?: string;
  className?: string;
  label?: string;
  labelClassName?: string;
  labelWrapperClassName?: string;
  percent: number;
  percentClassName?: string;
  progressBarClassName?: string;
  status?: 'success' | 'progress';
  theme?: Theme;
  wrapperClassName?: string;
}
