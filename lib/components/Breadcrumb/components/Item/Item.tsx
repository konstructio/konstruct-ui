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
  component = 'a',
}) => {
  const { isInsideRouter } = useBreadcrumb();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (to === '#') {
      e.preventDefault();
    }
  };

  const Component = component;

  return (
    <li
      aria-current={isLast ? 'page' : undefined}
      className="group font-medium text-inherit"
      data-theme={theme}
    >
      {to ? (
        <>
          {isInsideRouter ? (
            <Link
              to={to}
              target={target}
              className={cn(breadcrumbLinkVariants({ isActive }))}
              aria-disabled={isActive ? 'true' : 'false'}
              onClick={handleClick}
            >
              {label}
            </Link>
          ) : (
            <Component
              href={to}
              target={target}
              className={cn(breadcrumbLinkVariants({ isActive }))}
              aria-disabled={isActive ? 'true' : 'false'}
              onClick={handleClick}
            >
              {label}
            </Component>
          )}
        </>
      ) : (
        <span className={cn(breadcrumbLabelVariants({ isActive }))}>
          {label}
        </span>
      )}
    </li>
  );
};
