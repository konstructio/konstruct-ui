import { useLayoutEffect, useState } from 'react';

import { Params } from './use-visible-badge-count.types';

let measureContext: CanvasRenderingContext2D | null = null;

const getMeasureContext = () => {
  if (!measureContext) {
    measureContext = document.createElement('canvas')?.getContext('2d');
  }

  return measureContext;
};

const composeFont = (style: CSSStyleDeclaration) => {
  if (!style.fontSize || !style.fontFamily) {
    return '';
  }

  return `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
};

export const useVisibleBadgeCount = ({
  containerRef,
  gapPx,
  horizontalPaddingPx,
  items,
  maxWidth,
  probeRef,
}: Params) => {
  const [visibleCount, setVisibleCount] = useState(items.length);

  useLayoutEffect(() => {
    const probe = probeRef.current;
    const container = containerRef.current;
    const context = getMeasureContext();

    if (
      maxWidth === undefined ||
      !probe ||
      !container ||
      !context ||
      items.length === 0
    ) {
      setVisibleCount(items.length);

      return;
    }

    const measure = () => {
      const font = composeFont(getComputedStyle(probe));

      if (!font) {
        setVisibleCount(items.length);

        return;
      }

      context.font = font;

      const budgetWidth = Math.min(container.offsetWidth || maxWidth, maxWidth);
      const widths = items.map((item) => {
        return context.measureText(item.label).width + horizontalPaddingPx;
      });
      const overflowWidth =
        context.measureText(`+${items.length}`).width + horizontalPaddingPx;
      const totalWidth = widths.reduce((sum, width, index) => {
        return sum + width + (index > 0 ? gapPx : 0);
      }, 0);

      if (totalWidth <= budgetWidth) {
        setVisibleCount(items.length);

        return;
      }

      const budget = budgetWidth - overflowWidth - gapPx;
      let usedWidth = 0;
      let count = 0;

      for (const width of widths) {
        const nextWidth = usedWidth + width + (count > 0 ? gapPx : 0);

        if (nextWidth > budget) {
          break;
        }

        usedWidth = nextWidth;
        count += 1;
      }

      setVisibleCount(Math.max(1, count));
    };

    measure();

    let isCancelled = false;
    const observer = new ResizeObserver(measure);
    observer.observe(container);

    document.fonts?.ready.then(() => {
      if (!isCancelled) {
        measure();
      }
    });

    return () => {
      isCancelled = true;
      observer.disconnect();
    };
  }, [containerRef, gapPx, horizontalPaddingPx, items, maxWidth, probeRef]);

  return visibleCount;
};
