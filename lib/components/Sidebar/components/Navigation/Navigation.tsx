import { Children, FC, Fragment, isValidElement, ReactElement } from 'react';

import { cn } from '@/utils';

import { useSidebarContext } from '../../contexts';
import { NavigationGroup } from '../NavigationGroup/NavigationGroup';
import { NavigationOption } from '../NavigationOption/NavigationOption';
import { NavigationSeparator } from '../NavigationSeparator/NavigationSeparator';
import { NavigationTitle } from '../NavigationTitle/NavigationTitle';

import { NavigationChildrenProps, Props } from './Navigation.types';
import { navigationVariants } from './Navigation.variants';

const isGroup = (child: unknown): child is ReactElement => {
  return isValidElement(child) && child.type === NavigationGroup;
};

const isSeparator = (child: unknown): child is ReactElement => {
  return isValidElement(child) && child.type === NavigationSeparator;
};

const Navigation: FC<Props> & NavigationChildrenProps = ({
  className,
  children,
}) => {
  const { isCollapsed, separatorClassName } = useSidebarContext();

  const renderedChildren = (() => {
    if (!isCollapsed) {
      return children;
    }

    const items = Children.toArray(children);
    const output: ReactElement[] = [];

    items.forEach((child, index) => {
      if (!isValidElement(child)) {
        return;
      }

      const prev = output[output.length - 1];
      const shouldInsertSeparator =
        isGroup(child) && !!prev && isGroup(prev) && !isSeparator(prev);

      if (shouldInsertSeparator) {
        output.push(
          <NavigationSeparator
            key={`sidebar-auto-separator-${index}`}
            className={separatorClassName}
          />,
        );
      }

      output.push(child);
    });

    return output.map((node, index) => (
      <Fragment key={node.key ?? `sidebar-nav-child-${index}`}>{node}</Fragment>
    ));
  })();

  return (
    <nav className={cn(navigationVariants({ className }))}>
      {renderedChildren}
    </nav>
  );
};

Navigation.displayName = 'KonstructSidebarNavigation';

Navigation.NavigationGroup = NavigationGroup;
Navigation.NavigationOption = NavigationOption;
Navigation.NavigationSeparator = NavigationSeparator;
Navigation.NavigationTitle = NavigationTitle;

export { Navigation };
