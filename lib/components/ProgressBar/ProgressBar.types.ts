import { VariantProps } from 'class-variance-authority';

import { Theme } from '@/domain/theme';

import { progressBarVariants } from './ProgressBar.variants';

/**
 * Props for the ProgressBar component.
 *
 * @example
 * ```tsx
 * <ProgressBar percent={75} label="Progress" />
 * <ProgressBar percent={100} status="success" />
 * ```
 */
export interface ProgressBarProps extends VariantProps<
  typeof progressBarVariants
> {
  /** CSS classes for the background bar */
  backgroundBarClassName?: string;
  /** Additional CSS classes */
  className?: string;
  /** Label text displayed above the progress bar */
  label?: string;
  /** CSS classes for the label */
  labelClassName?: string;
  /** CSS classes for the label wrapper */
  labelWrapperClassName?: string;
  /** Progress percentage (0-100) */
  percent: number;
  /** CSS classes for the percent text */
  percentClassName?: string;
  /** CSS classes for the progress bar fill */
  progressBarClassName?: string;
  /** Visual status of the progress bar */
  status?: 'success' | 'progress';
  /** Theme override for this component */
  theme?: Theme;
  /** CSS classes for the outer wrapper */
  wrapperClassName?: string;
}
