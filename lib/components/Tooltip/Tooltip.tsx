'use client';
import { Slot } from '@radix-ui/react-slot';
import {
  FC,
  forwardRef,
  isValidElement,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';

import { cn } from '@/utils';

import { TooltipProps } from './Tooltip.types';
import { arrowVariants, tooltipVariants } from './Tooltip.variants';
import { useTooltip } from './hooks/useTooltip';
import { Typography } from '..';

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
export const Tooltip: FC<TooltipProps> = forwardRef<HTMLElement, TooltipProps>(
  (
    { children, content, className, theme, position, wrapperClassName },
    ref,
  ) => {
    const tooltipRef = useRef(null);
    const { isVisible, componentRef } = useTooltip();

    useImperativeHandle(ref, () => componentRef.current!, [componentRef]);

    const newChildren = useMemo(
      () =>
        isValidElement(children) ? children : <p className="p-2">{children}</p>,
      [children],
    );

    return (
      <div className={cn('w-full', wrapperClassName)} data-theme={theme}>
        <div className="relative w-max">
          <Slot ref={componentRef} className={cn('cursor-pointer ', className)}>
            {newChildren}
          </Slot>

          <div
            ref={tooltipRef}
            className={cn(tooltipVariants({ position }))}
            data-visible={isVisible}
          >
            <span className={cn(arrowVariants({ position }))} />
            <Typography variant="tooltip" className="text-white">
              {content}
            </Typography>
          </div>
        </div>
      </div>
    );
  },
);
