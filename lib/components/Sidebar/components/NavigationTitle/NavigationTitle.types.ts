import { VariantProps } from 'class-variance-authority';
import { HtmlHTMLAttributes } from 'react';

import { navigationTitleVariants } from './NavigationTitle.variants';

export interface NavigationTitleProps
  extends VariantProps<typeof navigationTitleVariants>,
    Pick<HtmlHTMLAttributes<HTMLHeadingElement>, 'className'> {
  title: string;
  className?: string;
}
