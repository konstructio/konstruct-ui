import { VariantProps } from 'class-variance-authority';

import { navigationVariants } from './Navigation.variants';
import { PropsWithChildren } from 'react';

export type NavigationProps = PropsWithChildren &
  VariantProps<typeof navigationVariants>;
