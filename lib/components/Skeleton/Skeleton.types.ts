import { VariantProps } from 'class-variance-authority';

import { Theme } from '@/domain/theme';

import { skeletonVariants } from './Skeleton.variants';

export interface Props extends VariantProps<typeof skeletonVariants> {
  /** Additional CSS classes for each placeholder block, e.g. a width or height */
  className?: string;
  /** Number of placeholder blocks to render */
  count?: number;
  /** Accessible name announced while the content loads */
  label?: string;
  /** Theme override for this component */
  theme?: Theme;
  /** Additional CSS classes for the wrapper */
  wrapperClassName?: string;
}

export type SkeletonProps = Props;
