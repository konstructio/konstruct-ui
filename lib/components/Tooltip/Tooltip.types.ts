import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren, ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { tooltipVariants } from './Tooltip.variants';

/**
 * Props for the Tooltip component.
 *
 * @example
 * ```tsx
 * <Tooltip content="Click to edit">
 *   <Button>Edit</Button>
 * </Tooltip>
 *
 * <Tooltip content="More info here" position="bottom">
 *   <InfoIcon />
 * </Tooltip>
 * ```
 */
export interface TooltipProps
  extends PropsWithChildren, VariantProps<typeof tooltipVariants> {
  /** Tooltip text or content */
  content: ReactNode | string;
  /** CSS classes for the trigger element */
  className?: string;
  /** CSS classes for the tooltip wrapper */
  wrapperClassName?: string;
  /** Theme override for this component */
  theme?: Theme;
}
