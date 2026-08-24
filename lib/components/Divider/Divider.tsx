import { FC } from 'react';

import { cn } from '@/utils';

import { Props } from './Divider.types';
import { dividerVariants } from './Divider.variants';

/**
 * A horizontal divider/separator line.
 *
 * @example
 * ```tsx
 * <div>
 *   <p>Section 1</p>
 *   <Divider />
 *   <p>Section 2</p>
 * </div>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-divider--docs Storybook}
 */
const Divider: FC<Props> = ({ className, component = 'div', ...delegated }) => {
  const Component = component as 'div';

  return (
    <Component className={cn(dividerVariants({ className }))} {...delegated} />
  );
};

Divider.displayName = 'Divider';

export { Divider };
