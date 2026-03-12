import { FC } from 'react';

import { cn } from '@/utils';

import { Props } from './NavigationSeparator.types';
import { navigationSeparatorVariant } from './NavigationSeparator.variants';

const NavigationSeparator: FC<Props> = ({ className }) => (
  <div className={cn(navigationSeparatorVariant({ className }))} />
);

NavigationSeparator.displayName = 'KonstructSidebarNavigationSeparator';

export { NavigationSeparator };
