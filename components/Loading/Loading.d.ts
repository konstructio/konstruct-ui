import { FC } from '../../../node_modules/react';
import { LoadingProps } from './Loading.types';
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
declare const Loading: FC<LoadingProps>;
export { Loading };
