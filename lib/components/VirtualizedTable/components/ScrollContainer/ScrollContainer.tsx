import { FC, useLayoutEffect, useRef, useState } from 'react';

import { cn } from '@/utils';

import { useTableContext } from '../../contexts';

import { Props } from './ScrollContainer.types';

type Metrics = { scrollWidth: number; clientWidth: number; scrollLeft: number };

const syncScroll = (
  source: HTMLElement,
  target: HTMLElement | null | undefined,
) => {
  if (target && target.scrollLeft !== source.scrollLeft) {
    target.scrollLeft = source.scrollLeft;
  }
};

const readMetrics = ({
  scrollWidth,
  clientWidth,
  scrollLeft,
}: HTMLElement): Metrics => ({ scrollWidth, clientWidth, scrollLeft });

const sameMetrics = (a: Metrics, b: Metrics) =>
  a.scrollWidth === b.scrollWidth &&
  a.clientWidth === b.clientWidth &&
  a.scrollLeft === b.scrollLeft;

/**
 * The horizontal scroll container. It flags itself with `data-kvt-overflow`
 * while the content is wider than the viewport, which is what the pinned
 * column dividers key on. With pinned columns it also swaps the native
 * scrollbar for a thin one that only spans the columns that actually move and
 * stays visible, and fades the content on whichever side still has more to show.
 */
export const ScrollContainer: FC<Props> = ({
  className,
  hasPinnedColumns = false,
  children,
}) => {
  const { table, pinnedWidths } = useTableContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const proxyRef = useRef<HTMLDivElement>(null);
  const [metrics, setMetrics] = useState<Metrics>({
    scrollWidth: 0,
    clientWidth: 0,
    scrollLeft: 0,
  });

  const measure = () => {
    const container = containerRef.current;

    if (!container) return;

    setMetrics((prev) => {
      const next = readMetrics(container);

      return sameMetrics(prev, next) ? prev : next;
    });
  };

  useLayoutEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    measure();

    if (typeof ResizeObserver === 'undefined') return;

    const observer = new ResizeObserver(measure);

    observer.observe(container);
    observer.observe(content);

    return () => observer.disconnect();
  }, []);

  const isOverflowing = metrics.scrollWidth > metrics.clientWidth;
  const sumWidths = (ids: string[]) =>
    ids.reduce((total, id) => total + (pinnedWidths[id] ?? 0), 0);
  const leftWidth = sumWidths(table.getLeftLeafColumns().map(({ id }) => id));
  const rightWidth = sumWidths(table.getRightLeafColumns().map(({ id }) => id));
  const showPinnedChrome = hasPinnedColumns && isOverflowing;
  const hasMoreLeft = metrics.scrollLeft > 0;
  const hasMoreRight =
    metrics.scrollLeft < metrics.scrollWidth - metrics.clientWidth - 1;

  return (
    <div className="kvt-scroll-area relative w-full">
      <div
        ref={containerRef}
        data-kvt-overflow={isOverflowing ? '' : undefined}
        className={cn(
          'kvt-scroll',
          'w-full',
          hasPinnedColumns && '[&::-webkit-scrollbar]:hidden rounded-lg',
          className,
        )}
        style={hasPinnedColumns ? { scrollbarWidth: 'none' } : undefined}
        onScroll={({ currentTarget }) => {
          syncScroll(currentTarget, proxyRef.current);
          measure();
        }}
      >
        <div ref={contentRef} className="kvt-scroll-content w-full min-w-fit">
          {children}
        </div>
      </div>

      {showPinnedChrome && (
        <>
          <div
            aria-hidden="true"
            className={cn(
              'kvt-scroll-fade pointer-events-none absolute inset-y-0 w-8',
              'bg-gradient-to-r from-white to-transparent dark:from-metal-900',
              'transition-opacity duration-200',
              hasMoreLeft ? 'opacity-100' : 'opacity-0',
            )}
            style={{ left: leftWidth }}
          />
          <div
            aria-hidden="true"
            className={cn(
              'kvt-scroll-fade pointer-events-none absolute inset-y-0 w-8',
              'bg-gradient-to-l from-white to-transparent dark:from-metal-900',
              'transition-opacity duration-200',
              hasMoreRight ? 'opacity-100' : 'opacity-0',
            )}
            style={{ right: rightWidth }}
          />

          <div
            ref={proxyRef}
            aria-hidden="true"
            className={cn(
              'kvt-scrollbar absolute bottom-0 overflow-x-auto overflow-y-hidden',
              '[scrollbar-width:thin] [scrollbar-color:var(--color-slate-300)_transparent]',
              'dark:[scrollbar-color:var(--color-metal-600)_transparent]',
              '[&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent',
              '[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300',
              'dark:[&::-webkit-scrollbar-thumb]:bg-metal-600',
            )}
            style={{ left: leftWidth, right: rightWidth }}
            onScroll={({ currentTarget }) =>
              syncScroll(currentTarget, containerRef.current)
            }
          >
            <div
              className="h-px"
              style={{ width: metrics.scrollWidth - leftWidth - rightWidth }}
            />
          </div>
        </>
      )}
    </div>
  );
};
