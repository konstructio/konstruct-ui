import { FC, Fragment } from 'react';
import { ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';

import { useTheme } from '../../contexts';
import { cn } from '../../utils';

import { BreadcrumbProps } from './Breadcrumb.types';
import {
  breadcrumbItemVariants,
  breadcrumbVariants,
  chevronVariants,
} from './Breadcrumb.variants';
import { useBreadcrumb } from './hooks/useBreadcrumb';

export const Breadcrumb: FC<BreadcrumbProps> = ({
  className,
  size,
  steps,
  theme,
}) => {
  const { theme: contextTheme } = useTheme();
  const { isInsideRouter } = useBreadcrumb();
  const inheritTheme = theme ?? contextTheme;

  return (
    <nav aria-label="breadcrumb">
      <ol
        className={cn(
          breadcrumbVariants({ theme: inheritTheme, className, size }),
        )}
      >
        {steps.map(({ label, to, target }, index) => (
          <Fragment key={label}>
            <li
              className={cn(
                breadcrumbItemVariants({ theme: inheritTheme, size }),
              )}
            >
              {to ? (
                <>
                  {isInsideRouter ? (
                    <Link
                      to={to}
                      target={target}
                      className="hover:underline hover:underline-offset-2"
                    >
                      {label}
                    </Link>
                  ) : (
                    <a
                      href={to}
                      target={target}
                      className="hover:underline hover:underline-offset-2"
                    >
                      {label}
                    </a>
                  )}
                </>
              ) : (
                <span aria-current="page">{label}</span>
              )}
            </li>

            {index !== steps.length - 1 && (
              <li>
                <ChevronRight
                  className={cn(chevronVariants({ size, theme: inheritTheme }))}
                />
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
};
