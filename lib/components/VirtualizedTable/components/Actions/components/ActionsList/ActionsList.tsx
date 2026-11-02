import { Fragment, PointerEvent, useId, useRef, useState } from 'react';

import { Button } from '@/components/Button/Button';
import { Tooltip } from '@/components/Tooltip/Tooltip';
import { cn } from '@/utils';

import { RowData } from '../../../../VirtualizedTable.types';
import {
  actionsDisabledReasonVariants,
  actionsItemVariants,
  actionsPanelVariants,
} from '../../Actions.variants';

import { Props } from './ActionsList.types';

export const ActionsList = <TData extends RowData>({
  actions,
  className,
  disabledReasonSide = 'left',
  isMenu = false,
  rowData,
  onSelect,
}: Props<TData>) => {
  const [revealedReason, setRevealedReason] = useState<string | null>(null);
  const pointerTypeRef = useRef<string | null>(null);
  const reasonIdPrefix = useId();

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    pointerTypeRef.current = event.pointerType;
  };

  return (
    <div className={cn(actionsPanelVariants(), className)}>
      {actions.map(
        (
          {
            id,
            label,
            className: itemClassName,
            component: Component = Button,
            componentProps,
            disabled = false,
            disabledReason,
            disabledReasonSide: itemDisabledReasonSide = disabledReasonSide,
            onClick,
          },
          index,
        ) => {
          const key =
            id ?? (typeof label === 'string' ? label : `action-${index}`);
          const isDisabled = disabled || !!disabledReason;
          const isReasonRevealed = !!disabledReason && revealedReason === key;
          const reasonId = `${reasonIdPrefix}-reason-${index}`;

          const item = (
            <Component
              key={key}
              aria-disabled={isDisabled || undefined}
              aria-describedby={isReasonRevealed ? reasonId : undefined}
              className={cn(actionsItemVariants({ isDisabled }), itemClassName)}
              variant="link"
              onPointerDown={handlePointerDown}
              onClick={() => {
                const pointerType = pointerTypeRef.current;
                pointerTypeRef.current = null;

                if (isDisabled) {
                  if (
                    disabledReason &&
                    pointerType &&
                    pointerType !== 'mouse'
                  ) {
                    setRevealedReason(isReasonRevealed ? null : key);
                  }

                  return;
                }

                onSelect?.();
                onClick(rowData);
              }}
              {...(isMenu ? { role: 'menuitem', tabIndex: -1 } : {})}
              {...componentProps}
            >
              {label}
            </Component>
          );

          if (!disabledReason) {
            return item;
          }

          return (
            <Fragment key={key}>
              <Tooltip
                side={itemDisabledReasonSide}
                className="z-50 max-w-40 text-center"
                content={disabledReason}
              >
                {item}
              </Tooltip>

              {isReasonRevealed ? (
                <div
                  id={reasonId}
                  role={isMenu ? 'none' : undefined}
                  className={actionsDisabledReasonVariants()}
                >
                  {disabledReason}
                </div>
              ) : null}
            </Fragment>
          );
        },
      )}
    </div>
  );
};
