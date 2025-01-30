import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { wrapperSiderbarVariants } from './Sidebar.variants';

export interface SidebarProps
  extends VariantProps<typeof wrapperSiderbarVariants>,
    PropsWithChildren {
  wrapperClassName?: string;
  minWith?: number;
  maxWith?: number;
}
