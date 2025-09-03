import { FC } from 'react';

import { cn } from '@/utils';

import { NavigationSeparatorProps } from './NavigationSeparator.types';
import { navigationSeparatorVariant } from './NavigationSeparator.variants';

const NavigationSeparator: FC<NavigationSeparatorProps> = ({ className }) => (
  <div className={cn(navigationSeparatorVariant({ className }))} />
);

NavigationSeparator.displayName = 'KonstructSidebarNavigationSeparator';

export { NavigationSeparator };
