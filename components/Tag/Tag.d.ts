import { FC } from '../../../node_modules/react';
import { TagProps } from './Tag.types';
/**
 * A small label component for categorization, status display, or filtering.
 * Supports multiple color variants and optional icons.
 *
 * @example
 * ```tsx
 * <Tag id="1" label="New" color="green" />
 * <Tag id="2" label="Pending" color="gold" leftIcon={<Clock />} />
 * <Tag id="3" label="Error" color="pink" rightIcon={<X />} />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-tag--docs Storybook}
 */
export declare const Tag: FC<TagProps>;
