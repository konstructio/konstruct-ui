import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '../../contexts';

import { BreadcrumbProps } from './Breadcrumb.types';
import {
  breadcrumbItemVariants,
  breadcrumbVariants,
} from './Breadcrumb.variants';

export const Breadcrumb: FC<BreadcrumbProps> = ({
  steps,
  theme,
  className,
}) => {
  const { theme: contextTheme } = useTheme();
  const inheritTheme = theme ?? contextTheme;

  return (
    <nav aria-label="breadcrumb">
      <ol className={breadcrumbVariants({ theme: inheritTheme, className })}>
        {steps.map(({ label, to, target }) => (
          <li
            key={label}
            className={breadcrumbItemVariants({ theme: inheritTheme })}
          >
            {to ? (
              <Link to={to} target={target}>
                {label}
              </Link>
            ) : (
              <span aria-current="page">{label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
