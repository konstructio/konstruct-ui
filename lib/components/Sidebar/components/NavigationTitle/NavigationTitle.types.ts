import { VariantProps } from 'class-variance-authority';
import { HtmlHTMLAttributes } from 'react';

import { navigationTitleVariants } from './NavigationTitle.variants';

export interface Props
  extends
    VariantProps<typeof navigationTitleVariants>,
    Pick<HtmlHTMLAttributes<HTMLHeadingElement>, 'className'> {
  title: string;
  className?: string;
  isVisible?: boolean;
}

/** @deprecated Use Props instead */
export type NavigationTitleProps = Props;
