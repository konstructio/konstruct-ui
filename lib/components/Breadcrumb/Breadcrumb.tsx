import { FC, Fragment, useId } from 'react';
import { ChevronRight } from 'react-feather';

import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { BreadcrumbProps } from './Breadcrumb.types';
import {
  breadcrumbVariants,
  breadcrumbWrapperVariants,
  chevronVariants,
} from './Breadcrumb.variants';
import { Item } from './components';

export const Breadcrumb: FC<BreadcrumbProps> = ({
  className,
  size,
  steps,
  theme,
  'aria-label': ariaLabel = 'breadcrumb',
  wrapperClassName,
  ...delegated
}) => {
  const id = useId();
  const { theme: contextTheme } = useTheme();
  const inheritTheme = theme ?? contextTheme;

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        breadcrumbWrapperVariants({
          className: wrapperClassName,
          theme: inheritTheme,
        }),
      )}
    >
      <ol
        className={cn(
          breadcrumbVariants({ theme: inheritTheme, className, size }),
        )}
        {...delegated}
      >
        {steps.map(({ label, ...delegated }, index) => (
          <Fragment key={`${id}-${label}`}>
            <Item
              {...delegated}
              label={label}
              isLast={index === steps.length - 1}
              size={size}
              theme={inheritTheme}
            />

            {index !== steps.length - 1 && (
              <li aria-hidden="true">
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
