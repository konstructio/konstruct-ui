import { EllipsisVertical } from 'lucide-react';
import { useRef, useState } from 'react';

import { Button } from '@/components/Button/Button';
import { cn } from '@/utils';

import { RowData } from '../../VirtualizedTable.types';

import { Props } from './Actions.types';

const ITEM_HEIGHT = 36;
const LIST_PADDING = 16;

export const Actions = <TData extends RowData>({
  actions,
  wrapperClassName,
  triggerButtonClassName,
  iconTriggerButtonClassName,
  wrapperActionsClassName,
  wrapperContentActionsClassName,
  ...delegated
}: Props<TData>) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [openUp, setOpenUp] = useState(false);

  const updateDirection = () => {
    const root = rootRef.current;

    if (!root || !actions) {
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

  if (!actions) {
    return null;
  }

  return (
    <div
      ref={rootRef}
      className={cn('relative group', wrapperClassName)}
      onMouseEnter={updateDirection}
    >
      <Button
        variant="link"
        shape="circle"
        size="large"
        className={cn(
          'text-slate-400',
          'group-hover:text-slate-800',
          'group-hover:bg-aurora-50',
          'dark:text-metal-400',
          'dark:group-hover:text-aurora-500',
          'dark:group-hover:bg-aurora-900',
          triggerButtonClassName,
        )}
        role="presentation"
      >
        <EllipsisVertical
          aria-hidden="true"
          className={cn('w-7 h-7', iconTriggerButtonClassName)}
        />
        <span className="sr-only">Show Actions</span>
      </Button>

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
        <div
          className={cn(
            'bg-white',
            'py-2',
            'rounded-lg',
            'shadow-lg',
            'border',
            'border-zinc-100',
            'dark:bg-metal-800',
            'dark:border-metal-700',
            wrapperContentActionsClassName,
          )}
        >
          {actions.map(
            (
              {
                id,
                label,
                className,
                component: Component = Button,
                componentProps,
                onClick,
              },
              index,
            ) => (
              <Component
                key={
                  id ?? (typeof label === 'string' ? label : `action-${index}`)
                }
                className={cn(
                  'w-full',
                  'text-slate-800',
                  'cursor-pointer',
                  'p-0',
                  'h-9',
                  'flex',
                  'gap-2',
                  'text-sm',
                  'font-normal',
                  'justify-start',
                  'rounded-none',
                  'px-6',
                  'hover:bg-gray-50',
                  'hover:text-slate-800',
                  'hover:no-underline',
                  'dark:hover:bg-metal-700',
                  className,
                )}
                variant="link"
                role="presentation"
                onClick={() => onClick(delegated.row.original)}
                {...componentProps}
              >
                {label}
              </Component>
            ),
          )}
        </div>
      </div>
    </div>
  );
};
