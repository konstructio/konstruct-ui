import { VariantProps } from 'class-variance-authority';
import { HtmlHTMLAttributes, PropsWithChildren } from 'react';

import { navigationGroupsVariants } from './NavigationGroup.variants';

export interface Props
  extends
    PropsWithChildren,
    VariantProps<typeof navigationGroupsVariants>,
    Pick<HtmlHTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  title?: string;
  titleClassName?: string;
  isVisible?: boolean;
}

/** @deprecated Use Props instead */
export type NavigationGroupProps = Props;
