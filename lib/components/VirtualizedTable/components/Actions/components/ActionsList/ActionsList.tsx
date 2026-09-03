import { Button } from '@/components/Button/Button';
import { Tooltip } from '@/components/Tooltip/Tooltip';
import { cn } from '@/utils';

import { RowData } from '../../../../VirtualizedTable.types';
import {
  actionsItemVariants,
  actionsPanelVariants,
} from '../../Actions.variants';

import { Props } from './ActionsList.types';

export const ActionsList = <TData extends RowData>({
  actions,
  className,
  isMenu = false,
  rowData,
  onSelect,
}: Props<TData>) => (
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
          onClick,
        },
        index,
      ) => {
        const key =
          id ?? (typeof label === 'string' ? label : `action-${index}`);
        const isDisabled = disabled || !!disabledReason;

        const item = (
          <Component
            key={key}
            aria-disabled={isDisabled || undefined}
            className={cn(actionsItemVariants({ isDisabled }), itemClassName)}
            variant="link"
            onClick={() => {
              if (isDisabled) {
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
          <Tooltip
            key={key}
            side="left"
            className="z-50 max-w-40 text-center"
            content={disabledReason}
          >
            {item}
          </Tooltip>
        );
      },
    )}
  </div>
);
