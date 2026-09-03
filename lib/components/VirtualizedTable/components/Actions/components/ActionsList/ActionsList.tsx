import { Button } from '@/components/Button/Button';
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
          onClick,
        },
        index,
      ) => (
        <Component
          key={id ?? (typeof label === 'string' ? label : `action-${index}`)}
          className={cn(actionsItemVariants(), itemClassName)}
          variant="link"
          onClick={() => {
            onSelect?.();
            onClick(rowData);
          }}
          {...(isMenu ? { role: 'menuitem', tabIndex: -1 } : {})}
          {...componentProps}
        >
          {label}
        </Component>
      ),
    )}
  </div>
);
