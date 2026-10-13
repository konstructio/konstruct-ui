import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FC } from 'react';
import { MoreHorizontal } from 'react-feather';
import { Link } from 'react-router-dom';

import { cn } from '@/utils';

import { useBreadcrumb } from '../../hooks/useBreadcrumb';

import { Props } from './CollapsedSteps.types';

const itemClassName = cn(
  'flex w-full items-center gap-1 px-4 py-1.5 text-sm font-semibold outline-none',
  'text-gray-600 hover:bg-gray-50 focus:bg-gray-50 hover:cursor-pointer',
  'dark:text-gray-300 dark:hover:bg-metal-700 dark:focus:bg-metal-700',
);

export const CollapsedSteps: FC<Props> = ({ label, steps }) => {
  const { isInsideRouter } = useBreadcrumb();

  return (
    <li className="flex items-center">
      <DropdownMenu.Root modal={false}>
        <DropdownMenu.Trigger
          aria-label={label}
          className={cn(
            'flex items-center rounded-xs text-gray-400 hover:text-gray-500',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500',
            'dark:hover:text-gray-300 cursor-pointer',
          )}
        >
          <MoreHorizontal className="w-5 h-5" aria-hidden="true" />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          align="start"
          sideOffset={4}
          loop
          className={cn(
            'z-50 min-w-40 rounded border border-gray-200 bg-white py-2 shadow-xs',
            'animate-in fade-in-0',
            'dark:border-metal-700 dark:bg-metal-800',
          )}
        >
          {steps.map(({ label: stepLabel, to, target, component }) => {
            if (!to) {
              return (
                <DropdownMenu.Item
                  key={stepLabel}
                  disabled
                  className={cn(itemClassName, 'cursor-default')}
                >
                  {stepLabel}
                </DropdownMenu.Item>
              );
            }

            if (isInsideRouter && !component) {
              return (
                <DropdownMenu.Item key={stepLabel} asChild>
                  <Link to={to} target={target} className={itemClassName}>
                    {stepLabel}
                  </Link>
                </DropdownMenu.Item>
              );
            }

            const Component = (component ?? 'a') as FC<Record<string, unknown>>;

            return (
              <DropdownMenu.Item key={stepLabel} asChild>
                <Component
                  href={component ? undefined : to}
                  to={component ? to : undefined}
                  target={target}
                  className={itemClassName}
                >
                  {stepLabel}
                </Component>
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </li>
  );
};
