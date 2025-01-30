import { VariantProps } from 'class-variance-authority';

import { navigationVariants } from './Navigation.variants';
import { PropsWithChildren } from 'react';

export interface NavigationProps
  extends PropsWithChildren,
    VariantProps<typeof navigationVariants> {
  className?: string;
}
