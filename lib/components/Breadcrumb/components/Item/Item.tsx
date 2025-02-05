import { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { useBreadcrumb } from '../../hooks/useBreadcrumb';

import { ItemProps } from './Item.types';
import {
  breadcrumbItemVariants,
  breadcrumbLabelVariants,
  breadcrumbLinkVariants,
} from './Item.variants';

export const Item: FC<ItemProps> = ({
  isActive,
  isLast,
  label,
  size,
  target,
  theme,
  to,
}) => {
  const { theme: contextTheme } = useTheme();
  const { isInsideRouter } = useBreadcrumb();
  const inheritTheme = theme ?? contextTheme;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (to === '#') {
      e.preventDefault();
    }
  };

  return (
    <li
      aria-current={isLast ? 'page' : undefined}
      className={cn(breadcrumbItemVariants({ theme: inheritTheme, size }))}
    >
      {to ? (
        <>
          {isInsideRouter ? (
            <Link
              to={to}
              target={target}
              className={cn(
                breadcrumbLinkVariants({ theme: inheritTheme, isActive }),
              )}
              aria-disabled={isActive ? 'true' : 'false'}
              onClick={handleClick}
            >
              {label}
            </Link>
          ) : (
            <a
              href={to}
              target={target}
              className={cn(
                breadcrumbLinkVariants({ theme: inheritTheme, isActive }),
              )}
              aria-disabled={isActive ? 'true' : 'false'}
              onClick={handleClick}
            >
              {label}
            </a>
          )}
        </>
      ) : (
        <span
          className={cn(
            breadcrumbLabelVariants({ theme: inheritTheme, isActive }),
          )}
        >
          {label}
        </span>
      )}
    </li>
  );
};
