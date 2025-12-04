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
