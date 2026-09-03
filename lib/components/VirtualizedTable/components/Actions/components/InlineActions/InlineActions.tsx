import { useRef, useState } from 'react';

import { cn } from '@/utils';

import { RowData } from '../../../../VirtualizedTable.types';
import { Props } from '../../Actions.types';
import { ActionsList } from '../ActionsList/ActionsList';
import { ActionsTrigger } from '../ActionsTrigger/ActionsTrigger';

import { ITEM_HEIGHT, LIST_PADDING } from './constants';

export const InlineActions = <TData extends RowData>({
  actions,
  wrapperClassName,
  triggerButtonClassName,
  iconTriggerButtonClassName,
  wrapperActionsClassName,
  wrapperContentActionsClassName,
  ...delegated
}: Omit<Props<TData>, 'isPortal'>) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [openUp, setOpenUp] = useState(false);

  const updateDirection = () => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const triggerRect = root.getBoundingClientRect();
    const menuHeight = actions.length * ITEM_HEIGHT + LIST_PADDING;

    let clipTop = 0;
    let clipBottom = window.innerHeight;
    let node = root.parentElement;

    while (node) {
      const { overflowY } = window.getComputedStyle(node);

      if (['auto', 'scroll', 'hidden'].includes(overflowY)) {
        const rect = node.getBoundingClientRect();
        clipTop = rect.top;
        clipBottom = rect.bottom;
        break;
      }

      node = node.parentElement;
    }

    const spaceBelow = clipBottom - triggerRect.bottom;
    const spaceAbove = triggerRect.top - clipTop;

    setOpenUp(spaceBelow < menuHeight && spaceAbove > spaceBelow);
  };

  return (
    <div
      ref={rootRef}
      className={cn('relative group', wrapperClassName)}
      onMouseEnter={updateDirection}
    >
      <ActionsTrigger
        className={triggerButtonClassName}
        iconClassName={iconTriggerButtonClassName}
      />

      <div
        className={cn(
          'absolute',
          'right-0',
          'w-53.75',
          'z-10',
          openUp ? 'bottom-full' : 'top-full',
          openUp ? 'pb-1' : 'pt-1',
          'invisible',
          'opacity-0',
          'transition-[opacity,visibility]',
          'duration-150',
          'delay-150',
          'group-hover:visible',
          'group-hover:opacity-100',
          'group-hover:delay-0',
          'group-hover:duration-75',
          wrapperActionsClassName,
        )}
      >
        <ActionsList
          actions={actions}
          className={wrapperContentActionsClassName}
          rowData={delegated.row.original}
        />
      </div>
    </div>
  );
};
