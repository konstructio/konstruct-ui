import {
  FC,
  forwardRef,
  isValidElement,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { Slot } from '@radix-ui/react-slot';

import { useTheme } from '../../contexts';
import { cn } from '../../utils';

import { TooltipProps } from './Tooltip.types';
import { arrowVariants, tooltipVariants } from './Tooltip.variants';
import { useTooltip } from './hooks/useTooltip';

export const Tooltip: FC<TooltipProps> = forwardRef<HTMLElement, TooltipProps>(
  (
    { children, content, className, theme, position, wrapperClassName },
    ref,
  ) => {
    const tooltipRef = useRef(null);
    const { theme: themeContext } = useTheme();
    const inheritTheme = theme ?? themeContext;
    const { isVisible, componentRef } = useTooltip();

    useImperativeHandle(ref, () => componentRef.current!, [componentRef]);

    const newChildren = useMemo(
      () =>
        isValidElement(children) ? children : <p className="p-2">{children}</p>,
      [children],
    );

    return (
      <div className={cn('w-full', wrapperClassName)}>
        <div className="relative w-max">
          <Slot ref={componentRef} className={cn('cursor-pointer ', className)}>
            {newChildren}
          </Slot>

          <div
            ref={tooltipRef}
            className={tooltipVariants({ theme: inheritTheme, position })}
            aria-expanded={isVisible}
          >
            <span
              className={arrowVariants({ theme: inheritTheme, position })}
            />
            <Slot>{content}</Slot>
          </div>
        </div>
      </div>
    );
  },
);
