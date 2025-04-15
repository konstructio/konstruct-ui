import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { Theme } from '@/domain/theme';

import { breadcrumbVariants } from './Breadcrumb.variants';

export type Step = {
  label: string;
  to?: string;
  target?: '_self' | '_blank';
  isActive?: boolean;
};

export interface BreadcrumbProps
  extends VariantProps<typeof breadcrumbVariants>,
    HTMLAttributes<HTMLOListElement> {
  steps: Step[];
  wrapperClassName?: string;
  theme?: Theme;
}
