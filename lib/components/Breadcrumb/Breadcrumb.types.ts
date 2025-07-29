import { VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';

import { Theme } from '@/domain/theme';

import { breadcrumbVariants } from './Breadcrumb.variants';

export type Step = {
  label: string;
  to?: string;
  target?: '_self' | '_blank';
  isActive?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: FC<any>;
};

export interface BreadcrumbProps
  extends VariantProps<typeof breadcrumbVariants>,
    HTMLAttributes<HTMLOListElement> {
  steps: Step[];
  wrapperClassName?: string;
  theme?: Theme;
}
