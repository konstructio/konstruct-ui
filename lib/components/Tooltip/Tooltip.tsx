import {
  Arrow,
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
} from '@radix-ui/react-tooltip';
import { FC } from 'react';

import { cn } from '@/utils';

import { Props } from './Tooltip.types';

/**
 * A tooltip component that shows on hover.
 * Built on Radix UI for accessible, well-positioned tooltips.
 *
 * @example
 * ```tsx
 * <Tooltip content="Click to save">
 *   <Button>Save</Button>
 * </Tooltip>
 *
 * <Tooltip content="More information" side="bottom">
 *   <InfoIcon />
 * </Tooltip>
 *
 * <Tooltip content="Danger!" bgClassName="bg-red-500">
 *   <Button variant="danger">Delete</Button>
 * </Tooltip>
 * ```
 */
export const Tooltip: FC<Props> = ({
  content,
  children,
  side = 'top',
  sideOffset = 4,
  bgClassName = 'bg-slate-700',
  arrowClassName = 'fill-slate-700',
  textClassName = 'text-white',
  className,
  delayDuration = 0,
}) => (
  <Provider delayDuration={delayDuration}>
    <Root>
      <Trigger asChild>
        <span>{children}</span>
      </Trigger>
      <Portal>
        <Content
          side={side}
          sideOffset={sideOffset}
          className={cn(
            'rounded px-2 py-1 text-xs shadow-md',
            'animate-in fade-in-0',
            bgClassName,
            textClassName,
            className,
          )}
        >
          {content}
          <Arrow className={arrowClassName} />
        </Content>
      </Portal>
    </Root>
  </Provider>
);
