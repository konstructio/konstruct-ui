import { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@/utils';

import { useBreadcrumb } from '../../hooks/useBreadcrumb';

import { ItemProps } from './Item.types';
import {
  breadcrumbLabelVariants,
  breadcrumbLinkVariants,
} from './Item.variants';

export const Item: FC<ItemProps> = ({
  isActive,
  isLast,
  label,
  target,
  theme,
  to,
  component,
}) => {
  const { isInsideRouter } = useBreadcrumb();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (to === '#') {
      e.preventDefault();
    }
  };

  if (!to) {
    return (
      <li
        aria-current={isLast ? 'page' : undefined}
        className="group font-medium text-inherit"
        data-theme={theme}
      >
        <span className={cn(breadcrumbLabelVariants({ isActive }))}>
          {label}
        </span>
      </li>
    );
  }

  const linkProps = {
    target,
    className: cn(breadcrumbLinkVariants({ isActive })),
    'aria-disabled': isActive ? ('true' as const) : ('false' as const),
    onClick: handleClick,
  };

  const renderLink = () => {
    if (isInsideRouter) {
      return (
        <Link to={to} {...linkProps}>
          {label}
        </Link>
      );
    }

    if (component) {
      const Component = component;

      return (
        <Component to={to} {...linkProps}>
          {label}
        </Component>
      );
    }

    return (
      <a href={to} {...linkProps}>
        {label}
      </a>
    );
  };

  return (
    <li
      aria-current={isLast ? 'page' : undefined}
      className="group font-medium text-inherit"
      data-theme={theme}
    >
      {renderLink()}
    </li>
  );
};
