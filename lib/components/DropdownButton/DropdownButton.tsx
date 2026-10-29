import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FC, Fragment, useState } from 'react';
import { ChevronDown } from 'react-feather';

import { LoaderIcon } from '@/assets/icons/components';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/utils';

import { Button } from '../Button/Button';

import { Props } from './DropdownButton.types';
import { ActionSheet } from './components/ActionSheet/ActionSheet';

const DEFAULT_SHEET_QUERY = '(max-width: 767.98px), (pointer: coarse)';

/**
 * A button with an attached dropdown menu for selecting actions.
 * Built on Radix DropdownMenu: closes on outside click or Escape, and
 * supports full keyboard navigation. With `sheetTitle` the menu becomes an
 * action sheet docked to the bottom of the screen on touch devices.
 *
 * @example
 * ```tsx
 * <DropdownButton
 *   label="Download Invoice as"
 *   options={[
 *     { label: 'PDF', onClick: () => downloadPdf() },
 *     { label: 'CSV', onClick: () => downloadCsv() },
 *   ]}
 * />
 * ```
 */
export const DropdownButton: FC<Props> = ({
  align = 'start',
  appearance,
  buttonClassName,
  className,
  disabled = false,
  isLoading = false,
  itemClassName,
  label = 'Download Invoice as',
  listClassName,
  options,
  sheetTitle,
  sheetQuery = DEFAULT_SHEET_QUERY,
  sheetPosition = 'bottom',
  sheetClassName,
  sheetHeaderClassName,
  sheetTitleClassName,
  theme,
  variant,
  version,
}) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const matchesSheet = useMediaQuery(sheetQuery);
  const useSheet = sheetTitle !== undefined && matchesSheet;
  const isInert = disabled || isLoading;

  const trigger = (
    <Button
      appearance={appearance}
      variant={variant}
      version={version}
      disabled={isInert}
      aria-busy={isLoading || undefined}
      className={cn(
        'group flex gap-2 items-center justify-between w-full',
        buttonClassName,
      )}
      {...(useSheet
        ? {
            'aria-haspopup': 'dialog' as const,
            'aria-expanded': isSheetOpen,
            onClick: () => setIsSheetOpen(true),
          }
        : {})}
    >
      {label}
      {isLoading ? (
        <LoaderIcon size={16} className="animate-spin shrink-0" />
      ) : (
        <ChevronDown
          className={cn(
            'transition-transform duration-200 group-data-[state=open]:rotate-180',
            useSheet && isSheetOpen && 'rotate-180',
          )}
        />
      )}
    </Button>
  );

  if (useSheet) {
    return (
      <div className={cn('relative w-full', className)}>
        {trigger}
        <ActionSheet
          isOpen={isSheetOpen}
          onClose={() => setIsSheetOpen(false)}
          title={sheetTitle}
          options={options}
          itemClassName={itemClassName}
          position={sheetPosition}
          className={sheetClassName}
          headerClassName={sheetHeaderClassName}
          titleClassName={sheetTitleClassName}
          theme={theme}
        />
      </div>
    );
  }

  return (
    <DropdownMenu.Root modal={false}>
      <div className={cn('relative w-full', className)} data-theme={theme}>
        <DropdownMenu.Trigger asChild disabled={isInert}>
          {trigger}
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          align={align}
          sideOffset={4}
          loop
          className={cn(
            'z-10 bg-white border border-gray-200 rounded shadow-xs animate-in fade-in-0 py-2',
            'dark:bg-metal-800 dark:border-metal-700 dark:text-metal-50',
            listClassName,
          )}
          style={{ minWidth: 'var(--radix-dropdown-menu-trigger-width)' }}
        >
          {options.map((option, index) => {
            const isDisabled = option.disabled || !!option.disabledReason;

            return (
              <Fragment key={index}>
                {option.separator && (
                  <DropdownMenu.Separator className="my-2 border-t border-gray-200 dark:border-metal-700" />
                )}
                <DropdownMenu.Item
                  disabled={isDisabled}
                  className={cn(
                    'flex items-center justify-between gap-4 whitespace-nowrap outline-none px-6 py-1.5',
                    'hover:bg-gray-50 focus:bg-gray-50 hover:cursor-pointer',
                    'dark:text-metal-50 dark:hover:bg-metal-700 dark:focus:bg-metal-700',
                    'data-[disabled]:cursor-not-allowed data-[disabled]:text-gray-400 data-[disabled]:hover:bg-transparent',
                    'dark:data-[disabled]:text-metal-400',
                    option.destructive && 'text-red-600 dark:text-red-400',
                    itemClassName,
                  )}
                  onSelect={() => {
                    option.onClick?.();
                  }}
                >
                  <span>{option.label}</span>
                  {option.disabledReason && (
                    <span className="shrink-0 text-xs text-gray-400 dark:text-metal-400">
                      {option.disabledReason}
                    </span>
                  )}
                </DropdownMenu.Item>
              </Fragment>
            );
          })}
        </DropdownMenu.Content>
      </div>
    </DropdownMenu.Root>
  );
};
