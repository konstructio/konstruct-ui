import { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@/utils';

import { useBreadcrumb } from '../../hooks/useBreadcrumb';

import { Props } from './Item.types';
import {
  breadcrumbLabelVariants,
  breadcrumbLinkVariants,
} from './Item.variants';

export const Item: FC<Props> = ({
  isActive,
  isLast,
  label,
  leftIcon,
  rightIcon,
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

  const hasIcons = Boolean(leftIcon || rightIcon);

  const content = hasIcons ? (
    <span className="flex items-center gap-1">
      {leftIcon && (
        <span className="flex items-center shrink-0">{leftIcon}</span>
      )}

      <span className="flex items-center">{label}</span>

      {rightIcon && (
        <span className="flex items-center shrink-0">{rightIcon}</span>
      )}
    </span>
  ) : (
    label
  );

  const Component = component;

  return (
    <li
      aria-current={isLast ? 'page' : undefined}
      className="group font-medium text-inherit flex items-center"
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
              {content}
            </Link>
          ) : (
            <Component
              href={Component === 'a' ? to : undefined}
              to={Component !== 'a' ? to : undefined}
              target={target}
              className={cn(breadcrumbLinkVariants({ isActive }))}
              aria-disabled={isActive ? 'true' : 'false'}
              onClick={handleClick}
            >
              {content}
            </Component>
          )}
        </>
      ) : (
        <span className={cn(breadcrumbLabelVariants({ isActive }))}>
          {content}
        </span>
      )}
    </li>
  );
};
