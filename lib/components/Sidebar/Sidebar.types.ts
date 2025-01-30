import { VariantProps } from 'class-variance-authority';

import { wrapperSiderbarVariants } from './Sidebar.variants';

export interface SidebarProps
  extends VariantProps<typeof wrapperSiderbarVariants> {
  wrapperClassName?: string;
}
