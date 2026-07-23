import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FC } from 'react';
import { ChevronDown } from 'react-feather';

import { cn } from '@/utils';

import { Button } from '../Button/Button';

import { Props } from './DropdownButton.types';

/**
 * A button with an attached dropdown menu for selecting actions.
 * Built on Radix DropdownMenu: closes on outside click or Escape, and
 * supports full keyboard navigation.
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
  buttonClassName,
  className,
  itemClassName,
  label = 'Download Invoice as',
  listClassName,
  options,
}) => {
  return (
    <DropdownMenu.Root modal={false}>
      <div className={cn('relative w-full', className)}>
        <DropdownMenu.Trigger asChild>
          <Button
            className={cn(
              'group flex gap-2 items-center justify-between w-full',
              buttonClassName,
            )}
          >
            {label}
            <ChevronDown className="transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </Button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          align="start"
          sideOffset={4}
          loop
          className={cn(
            'z-10 bg-white border border-gray-200 rounded shadow-xs animate-in fade-in-0 py-2',
            listClassName,
          )}
          style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}
        >
          {options.map((option, index) => (
            <DropdownMenu.Item
              key={index}
              className={cn(
                'hover:bg-gray-50 focus:bg-gray-50 outline-none px-6 py-1.5 hover:cursor-pointer',
                itemClassName,
              )}
              onSelect={() => {
                option.onClick?.();
              }}
            >
              {option.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </div>
    </DropdownMenu.Root>
  );
};
