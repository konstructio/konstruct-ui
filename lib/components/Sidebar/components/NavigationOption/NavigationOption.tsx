import { FC } from 'react';

import { cn } from '@/utils';

import { useSidebarContext } from '../../contexts';

import { Props } from './NavigationOption.types';
import { navigationOptionVariants } from './NavigationOption.variants';

const NavigationOption: FC<Props> = ({
  children,
  className,
  closeDrawerOnClick = true,
  isVisible = true,
  isActive,
  ...delegated
}) => {
  const { isCollapsed, expandOnHover, closeDrawer } = useSidebarContext();
  const isHoverExpandable = isCollapsed && expandOnHover;

  if (!isVisible) {
    return null;
  }

  const userOnClick =
    'onClick' in delegated
      ? (delegated.onClick as VoidFunction | undefined)
      : undefined;

  const handleClick = () => {
    if (closeDrawerOnClick) {
      closeDrawer();
    }
    userOnClick?.();
  };

  return (
    <li
      {...delegated}
      role="option"
      onClick={handleClick}
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
