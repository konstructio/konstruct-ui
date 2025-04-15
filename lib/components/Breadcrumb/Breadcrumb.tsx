import { FC, Fragment, useId } from 'react';
import { ChevronRight } from 'react-feather';

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

  return (
    <nav
      aria-label={ariaLabel}
      data-theme={theme}
      className={cn(
        breadcrumbWrapperVariants({
          className: wrapperClassName,
        }),
      )}
    >
      <ol
        className={cn(breadcrumbVariants({ className, size }))}
        {...delegated}
      >
        {steps.map(({ label, ...delegated }, index) => (
          <Fragment key={`${id}-${label}`}>
            <Item
              {...delegated}
              label={label}
              isLast={index === steps.length - 1}
              size={size}
            />

            {index !== steps.length - 1 && (
              <li aria-hidden="true">
                <ChevronRight className={cn(chevronVariants({ size }))} />
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
};
