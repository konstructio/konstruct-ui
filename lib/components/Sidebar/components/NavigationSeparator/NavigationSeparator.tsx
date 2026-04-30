import { FC } from 'react';

import { cn } from '@/utils';

import { Props } from './NavigationSeparator.types';
import { navigationSeparatorVariant } from './NavigationSeparator.variants';

const NavigationSeparator: FC<Props> = ({ className }) => (
  <div
    data-konstruct-sidebar-separator=""
    role="separator"
    aria-orientation="horizontal"
    className={cn(navigationSeparatorVariant({ className }))}
  />
);

NavigationSeparator.displayName = 'KonstructSidebarNavigationSeparator';

export { NavigationSeparator };
