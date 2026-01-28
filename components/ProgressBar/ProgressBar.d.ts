import { FC } from '../../../node_modules/react';
import { ProgressBarProps } from './ProgressBar.types';
/**
 * A progress bar component showing completion percentage.
 *
 * @example
 * ```tsx
 * // Basic progress bar
 * <ProgressBar percent={50} />
 *
 * // With label
 * <ProgressBar percent={75} label="Upload Progress" />
 *
 * // Completed state
 * <ProgressBar percent={100} status="success" label="Complete" />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-progressbar--docs Storybook}
 */
export declare const ProgressBar: FC<ProgressBarProps>;
