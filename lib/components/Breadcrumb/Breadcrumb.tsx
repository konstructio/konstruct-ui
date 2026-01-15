import { FC, Fragment, useId } from 'react';
import { ChevronRight } from 'react-feather';

import { cn } from '@/utils';

import { BreadcrumbProps } from './Breadcrumb.types';
import {
  breadcrumbVariants,
  breadcrumbWrapperVariants,
} from './Breadcrumb.variants';
import { Item } from './components';

/**
 * A breadcrumb navigation component showing the current location in a hierarchy.
 *
 * @example
 * ```tsx
 * // Basic breadcrumb
 * <Breadcrumb
 *   steps={[
 *     { label: 'Home', to: '/' },
 *     { label: 'Settings', to: '/settings' },
 *     { label: 'Profile', isActive: true },
 *   ]}
 * />
 *
 * // With custom Link component (e.g., react-router)
 * <Breadcrumb
 *   steps={[
 *     { label: 'Dashboard', to: '/dashboard', component: Link },
 *     { label: 'Users', to: '/users', component: Link },
 *     { label: 'Edit User', isActive: true },
 *   ]}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-breadcrumb--docs Storybook}
 */
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
