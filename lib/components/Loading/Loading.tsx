import { FC } from 'react';
import { LoaderCircle } from 'lucide-react';

import { cn } from '@/utils';

import { LoadingProps } from './Loading.types';
import { loadingVariants } from './Loading.variants';

/**
 * A spinning loading indicator.
 *
 * @example
 * ```tsx
 * // Default loading spinner
 * <Loading />
 *
 * // Custom size
 * <Loading className="w-8 h-8" />
 *
 * // In a button
 * <Button disabled>
 *   <Loading className="w-4 h-4 mr-2" />
 *   Loading...
 * </Button>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-loading--docs Storybook}
 */
const Loading: FC<LoadingProps> = ({ className, theme, ...delegated }) => (
  <LoaderCircle
    data-theme={theme}
    className={cn(
      loadingVariants({
        className,
      }),
    )}
    {...delegated}
  />
);

Loading.displayName = 'Loading';

export { Loading };
