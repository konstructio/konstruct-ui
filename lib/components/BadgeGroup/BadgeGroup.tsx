import { FC, useRef } from 'react';

import { cn } from '@/utils';

import { Badge } from '../Badge/Badge';
import { Tooltip } from '../Tooltip/Tooltip';

import { Props } from './BadgeGroup.types';
import { useVisibleBadgeCount } from './hooks';

const GAP_PX = 8;
const BADGE_HORIZONTAL_PADDING_PX = 16;
const DEFAULT_ITEMS_PER_TOOLTIP_LINE = 4;

const chunk = <T,>(items: T[], size: number) => {
  const chunks: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
};

/**
 * Renders a row of badges and collapses the ones that do not fit into a
 * "+N" badge whose tooltip lists the hidden labels. Limit by count with
 * `maxVisible` or by available width with `maxWidth`.
 *
 * @example
 * ```tsx
 * <BadgeGroup items={tags} maxVisible={3} />
 * <BadgeGroup items={regions} maxWidth={240} variant="info" />
 * ```
 */
const BadgeGroup: FC<Props> = ({
  badgeClassName,
  className,
  items,
  itemsPerTooltipLine = DEFAULT_ITEMS_PER_TOOLTIP_LINE,
  maxVisible,
  maxWidth,
  overflowLabel = (hiddenCount) => `Show ${hiddenCount} more`,
  renderOverflow,
  size,
  variant,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const probeRef = useRef<HTMLSpanElement>(null);
  const measuredCount = useVisibleBadgeCount({
    containerRef,
    gapPx: GAP_PX,
    horizontalPaddingPx: BADGE_HORIZONTAL_PADDING_PX,
    items,
    maxWidth,
    probeRef,
  });

  if (items.length === 0) {
    return null;
  }

  const visibleCount = Math.max(
    1,
    Math.min(measuredCount, maxVisible ?? items.length),
  );
  const visibleItems = items.slice(0, visibleCount);
  const hiddenItems = items.slice(visibleCount);

  return (
    <div
      ref={containerRef}
      className={cn('relative min-w-0', className)}
      style={maxWidth !== undefined ? { maxWidth } : undefined}
    >
      <span
        ref={probeRef}
        aria-hidden="true"
        className="invisible absolute text-xs leading-4"
      />

      <div className="flex items-center gap-2 overflow-hidden">
        {visibleItems.map((item) => (
          <Badge
            key={item.id}
            label={item.label}
            leftIcon={item.leftIcon}
            size={size}
            variant={item.variant ?? variant}
            className={cn('shrink-0 whitespace-nowrap', badgeClassName)}
          />
        ))}

        {hiddenItems.length > 0 ? (
          <>
            <span className="sr-only">
              {items.map((item) => item.label).join(', ')}
            </span>

            <Tooltip
              className="max-w-80 text-center"
              content={
                renderOverflow?.(hiddenItems) ??
                chunk(hiddenItems, itemsPerTooltipLine).map((line) => (
                  <div key={line[0].id}>
                    {line.map((item) => item.label).join(', ')}
                  </div>
                ))
              }
            >
              <button
                type="button"
                aria-label={overflowLabel(hiddenItems.length)}
                className="shrink-0 cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-500"
              >
                <Badge
                  label={`+${hiddenItems.length}`}
                  size={size}
                  variant={variant}
                  className={cn('shrink-0 whitespace-nowrap', badgeClassName)}
                />
              </button>
            </Tooltip>
          </>
        ) : null}
      </div>
    </div>
  );
};

BadgeGroup.displayName = 'KonstructBadgeGroup';

export { BadgeGroup };
