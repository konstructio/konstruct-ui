import { FC, Fragment, useId } from 'react';
import { ChevronRight } from 'react-feather';

import { cn } from '@/utils';

import { BreadcrumbProps } from './Breadcrumb.types';
import {
  breadcrumbVariants,
  breadcrumbWrapperVariants,
} from './Breadcrumb.variants';
import { Item } from './components';

export const Breadcrumb: FC<BreadcrumbProps> = ({
  'aria-label': ariaLabel = 'breadcrumb',
  className,
  steps,
  theme,
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
      <ol className={cn(breadcrumbVariants({ className }))} {...delegated}>
        {steps.map(({ label, ...delegated }, index) => (
          <Fragment key={`${id}-${label}`}>
            <Item
              {...delegated}
              label={label}
              isLast={index === steps.length - 1}
            />

            {index !== steps.length - 1 && (
              <li aria-hidden="true">
                <ChevronRight className="text-gray-400 w-5 h-5 mt-0.5" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
};
