import { PropsWithChildren, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';

import { tooltipVariants } from './Tooltip.variants';

export interface TooltipProps
  extends PropsWithChildren,
    VariantProps<typeof tooltipVariants> {
  content: ReactNode | string;
  className?: string;
  wrapperClassName?: string;
}
