import { FC, Fragment, useId } from 'react';
import { ChevronRight } from 'react-feather';

import { cn } from '@/utils';

import { Props } from './Breadcrumb.types';
import {
  breadcrumbVariants,
  breadcrumbWrapperVariants,
} from './Breadcrumb.variants';
import { BackButton, CollapsedSteps, Item } from './components';

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
 *
 * // With an optional back button and step icons
 * <Breadcrumb
 *   backButton={{ onClick: () => navigate(-1) }}
 *   steps={[
 *     { label: 'Home', to: '/', leftIcon: <HomeIcon /> },
 *     { label: 'Profile', isActive: true },
 *   ]}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-breadcrumb--docs Storybook}
 */
export const Breadcrumb: FC<Props> = ({
  'aria-label': ariaLabel = 'breadcrumb',
  backButton,
  className,
  collapsedLabel = 'Show hidden steps',
  maxVisibleItems,
  steps,
  theme,
  wrapperClassName,
  ...delegated
}) => {
  const id = useId();
  const shouldCollapse =
    maxVisibleItems !== undefined &&
    maxVisibleItems >= 2 &&
    steps.length > maxVisibleItems;
  const tailStart = steps.length - (maxVisibleItems ?? 0) + 1;
  const hiddenSteps = shouldCollapse ? steps.slice(1, tailStart) : [];
  const visibleSteps = shouldCollapse
    ? [steps[0], ...steps.slice(tailStart)]
    : steps;

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
      {backButton && <BackButton {...backButton} theme={theme} />}

      <ol
        className={cn(
          breadcrumbVariants({ className }),
          backButton && 'max-md:hidden',
        )}
        {...delegated}
      >
        {visibleSteps.map(({ label, ...delegated }, index) => (
          <Fragment key={`${id}-${label}`}>
            <Item
              {...delegated}
              label={label}
              isLast={index === visibleSteps.length - 1}
            />

            {index !== visibleSteps.length - 1 && (
              <li aria-hidden="true" className="flex items-center">
                <ChevronRight className="text-gray-400 w-5 h-5" />
              </li>
            )}

            {index === 0 && hiddenSteps.length > 0 && (
              <>
                <CollapsedSteps label={collapsedLabel} steps={hiddenSteps} />

                <li aria-hidden="true" className="flex items-center">
                  <ChevronRight className="text-gray-400 w-5 h-5" />
                </li>
              </>
            )}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
};
