import { FC } from 'react';

import { cn } from '@/utils';

import { useSidebarContext } from '../../contexts';

import { Props } from './NavigationOption.types';
import { navigationOptionVariants } from './NavigationOption.variants';

const NavigationOption: FC<Props> = ({
  children,
  className,
  isVisible = true,
  isActive,
  ...delegated
}) => {
  const { isCollapsed, expandOnHover } = useSidebarContext();
  const isHoverExpandable = isCollapsed && expandOnHover;

  if (!isVisible) {
    return null;
  }

  return (
    <li
      {...delegated}
      role="option"
      className={cn(
        navigationOptionVariants({
          className,
          isActive,
        }),
        isHoverExpandable && [
          'group/sidebar-option',
          'relative',
          'hover:z-50',
          'hover:shadow-lg',
          'hover:bg-kubefirst-dark-blue-900',
        ],
      )}
    >
      {children}
    </li>
  );
};

NavigationOption.displayName = 'KonstructSidebarNavigationOption';

export { NavigationOption };
