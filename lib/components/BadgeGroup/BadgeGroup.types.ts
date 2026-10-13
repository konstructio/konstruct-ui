import { ReactNode } from 'react';

import { Props as BadgeProps } from '../Badge/Badge.types';

export type BadgeGroupItem = Pick<BadgeProps, 'variant' | 'leftIcon'> & {
  id: string | number;
  label: string;
};

export type Props = Pick<BadgeProps, 'size' | 'variant'> & {
  /** Additional CSS classes for each badge */
  badgeClassName?: string;
  /** Additional CSS classes for the wrapper */
  className?: string;
  /** Badges to display */
  items: BadgeGroupItem[];
  /** Hidden labels per line inside the overflow tooltip */
  itemsPerTooltipLine?: number;
  /** Show as many badges as fit in this width (px); the rest collapse into the overflow badge */
  maxWidth?: number;
  /** Show at most this many badges; the rest collapse into the overflow badge */
  maxVisible?: number;
  /** Accessible name of the overflow badge button */
  overflowLabel?: (hiddenCount: number) => string;
  /** Custom overflow tooltip content; defaults to the hidden labels */
  renderOverflow?: (hidden: BadgeGroupItem[]) => ReactNode;
};

export type BadgeGroupProps = Props;
