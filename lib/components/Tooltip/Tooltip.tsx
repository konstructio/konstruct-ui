import {
  Arrow,
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
} from '@radix-ui/react-tooltip';
import { FC, useState } from 'react';

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
 *
 * <Tooltip content="This name is taken" asOverlay overlayClassName="right-0 top-7 h-10 w-8">
 *   <Input label="Name" />
 * </Tooltip>
 * ```
 */
export const Tooltip: FC<Props> = ({
  content,
  children,
  asOverlay = false,
  disabled = false,
  overlayClassName,
  overlayLabel,
  wrapperClassName,
  side = 'top',
  sideOffset = 4,
  bgClassName = 'bg-slate-700',
  arrowClassName = 'fill-slate-700',
  textClassName = 'text-white',
  className,
  delayDuration = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const trigger = asOverlay ? (
    <span
      role="img"
      aria-label={
        overlayLabel ?? (typeof content === 'string' ? content : undefined)
      }
      hidden={disabled}
      className={cn('absolute cursor-help', overlayClassName ?? 'inset-0')}
    />
  ) : (
    <span>{children}</span>
  );

  const tooltip = (
    <Provider delayDuration={delayDuration}>
      <Root open={!disabled && isOpen} onOpenChange={setIsOpen}>
        <Trigger asChild>{trigger}</Trigger>
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

  if (!asOverlay) {
    return tooltip;
  }

  return (
    <div className={cn('relative', wrapperClassName)}>
      {children}
      {tooltip}
    </div>
  );
};
