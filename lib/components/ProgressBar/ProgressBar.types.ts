import { ReactNode } from 'react';

import { VariantProps } from 'class-variance-authority';

import { Theme } from '@/domain/theme';

import { progressBarFillVariants } from './ProgressBar.variants';

export interface ProgressBarProps extends VariantProps<
  typeof progressBarFillVariants
> {
  /** Additional CSS classes for the outer wrapper */
  className?: string;
  /** Custom CSS class for the progress bar fill (e.g., "bg-purple-500") */
  fillClassName?: string;
  /** Content displayed on the left side (e.g., "26%") */
  leftContent?: ReactNode;
  /** Progress percentage (0-100) */
  percent: number;
  /** Content displayed on the right side (e.g., "130/500 GB") */
  rightContent?: ReactNode;
  /** Theme override for this component */
  theme?: Theme;
  /** Custom CSS class for the track background (e.g., "bg-gray-200") */
  trackClassName?: string;
}
