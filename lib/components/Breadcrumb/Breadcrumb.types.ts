import { VariantProps } from 'class-variance-authority';

import { breadcrumbVariants } from './Breadcrumb.variants';

export type Step = {
  label: string;
  to?: string;
  target?: '_self' | '_blank';
};

export interface BreadcrumbProps
  extends VariantProps<typeof breadcrumbVariants> {
  steps: Step[];
  className?: string;
}
