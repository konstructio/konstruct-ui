import { FC } from '../../../node_modules/react';
import { TooltipProps } from './Tooltip.types';
/**
 * A tooltip component that shows on hover.
 * Wraps any element and displays content on mouse enter.
 *
 * @example
 * ```tsx
 * // Basic tooltip
 * <Tooltip content="Click to save">
 *   <Button>Save</Button>
 * </Tooltip>
 *
 * // Tooltip with position
 * <Tooltip content="More information" position="bottom">
 *   <InfoIcon />
 * </Tooltip>
 *
 * // Tooltip on text
 * <Tooltip content="This is a helpful tip">
 *   <span>Hover me</span>
 * </Tooltip>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-tooltip--docs Storybook}
 */
export declare const Tooltip: FC<TooltipProps>;
