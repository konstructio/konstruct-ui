import { Slot } from '@radix-ui/react-slot';
import { FC } from 'react';

import { cn } from '@/utils';

import { TagProps } from './Tag.types';
import { tagVariants } from './Tag.variants';

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
export const Tag: FC<TagProps> = ({
  label,
  color,
  rightIcon,
  leftIcon,
  className,
  'data-value': dataValue,
}) => (
  <div className={cn(tagVariants({ color, className }))} data-value={dataValue}>
    {leftIcon ? <Slot className="text-inherit">{leftIcon}</Slot> : null}
    <span className="text-inherit">{label}</span>
    {rightIcon ? <Slot className="text-inherit">{rightIcon}</Slot> : null}
  </div>
);
