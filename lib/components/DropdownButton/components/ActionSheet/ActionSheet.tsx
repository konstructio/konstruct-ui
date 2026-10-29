import { FC, Fragment } from 'react';

import { Sheet } from '@/components/Sheet/Sheet';
import { cn } from '@/utils';

import { Props } from './ActionSheet.types';

/**
 * The touch-screen counterpart of the dropdown menu: a Sheet with one 44px
 * button per option.
 */
export const ActionSheet: FC<Props> = ({
  isOpen,
  onClose,
  title,
  options,
  itemClassName,
  className,
  headerClassName,
  titleClassName,
  position = 'bottom',
  theme,
}) => (
  <Sheet
    isOpen={isOpen}
    onClose={onClose}
    title={title}
    position={position}
    theme={theme}
    className={cn('px-4', className)}
    headerClassName={cn('px-2', headerClassName)}
    titleClassName={titleClassName}
    bodyClassName="overflow-visible"
  >
    <div className="flex flex-col">
      {options.map((option, index) => {
        const isDisabled = option.disabled || !!option.disabledReason;

        return (
          <Fragment key={index}>
            {option.separator && (
              <hr className="-mx-4 my-2 border-slate-200 dark:border-metal-700" />
            )}
            <button
              type="button"
              disabled={isDisabled}
              className={cn(
                'flex min-h-11 w-full items-center justify-between gap-4 rounded px-2 text-left text-base',
                'hover:bg-slate-50 focus-visible:bg-slate-50 dark:hover:bg-metal-700 dark:focus-visible:bg-metal-700',
                'outline-none disabled:cursor-not-allowed disabled:hover:bg-transparent',
                option.destructive && 'text-red-600 dark:text-red-400',
                isDisabled && 'text-slate-400 dark:text-metal-400',
                itemClassName,
              )}
              onClick={() => {
                option.onClick?.();
                onClose();
              }}
            >
              <span>{option.label}</span>
              {option.disabledReason && (
                <span className="shrink-0 text-xs text-slate-400 dark:text-metal-400">
                  {option.disabledReason}
                </span>
              )}
            </button>
          </Fragment>
        );
      })}
    </div>
  </Sheet>
);
