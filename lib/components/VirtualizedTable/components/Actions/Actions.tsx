import { EllipsisVertical } from 'lucide-react';

import { Button } from '@/components/Button/Button';

import { RowData } from '../../VirtualizedTable.types';

import { Props } from './Actions.types';
import { cn } from '@/utils';

export const Actions = <TData extends RowData>({
  actions,
  wrapperClassName,
  triggerButtonClassName,
  iconTriggerButtonClassName,
  wrapperActionsClassName,
  wrapperContentActionsClassName,
  ...delegated
}: Props<TData>) => {
  if (!actions) {
    return null;
  }

  return (
    <div className={cn('relative group', wrapperClassName)}>
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
          'top-full',
          'right-0',
          'w-53.75',
          'hidden',
          'group-hover:block',
          'z-10',
          wrapperActionsClassName,
        )}
      >
        <div
          className={cn(
            'bg-white',
            'mt-0.5',
            'py-2',
            'rounded-lg',
            'shadow-lg',
            'border',
            'border-zinc-100',
            'animate-in',
            'fade-in-0',
            wrapperContentActionsClassName,
          )}
        >
          {actions.map(({ label, className, onClick }) => (
            <Button
              key={label as string}
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
                'hover:bg-gray-50',
                'hover:text-slate-800',
                'rounded-none',
                'px-6',
                className,
              )}
              variant="link"
              asChild
              role="presentation"
            >
              <Button onClick={() => onClick(delegated.row.original)}>
                {label}
              </Button>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
