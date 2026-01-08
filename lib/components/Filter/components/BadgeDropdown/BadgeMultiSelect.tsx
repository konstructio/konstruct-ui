import { ChevronDownIcon } from 'lucide-react';
import { FC } from 'react';

import { Badge } from '@/components/Badge/Badge';
import { Button } from '@/components/Button/Button';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { cn } from '@/utils';

import {
  filterButtonIconVariants,
  filterButtonVariants,
} from '../../Filter.variants';

import { useBadgeMultiSelect } from './BadgeMultiSelect.hook';
import { BadgeMultiSelectProps } from './BadgeMultiSelect.types';

export const BadgeMultiSelect: FC<BadgeMultiSelectProps> = ({
  options,
  label,
  position = 'left',
  onApply,
}) => {
  const {
    wrapperRef,
    isOpen,
    selectedOptions,
    selectedCount,
    handleOpen,
    handleResetOptions,
    handleApplyOptions,
    handleSelectOption,
  } = useBadgeMultiSelect({ onApply });

  if (options.length === 0) {
    return null;
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button
        className={cn(filterButtonVariants(), {
          'text-slate-700 dark:text-metal-50': isOpen,
        })}
        onClick={handleOpen}
      >
        {label}
        {selectedCount.length > 0 && (
          <Badge label={selectedCount.length.toString()} />
        )}
        <ChevronDownIcon
          className={cn(filterButtonIconVariants(), {
            'rotate-180': isOpen,
            'text-blue-600 dark:text-aurora-500': isOpen,
          })}
        />
      </button>

      {isOpen && (
        <div
          className={cn(
            'absolute',
            'top-full',
            'mt-1',
            'bg-white',
            'rounded-md',
            'shadow-md',
            'animate-in',
            'fade-in-0',
            'z-10',
            'border',
            'border-gray-200',
            'dark:bg-metal-800',
            'dark:border-metal-700',
            {
              'left-0': position === 'left',
              'right-0': position === 'right',
            },
          )}
        >
          <div className="py-4">
            <div className="flex flex-col gap-2">
              {options.map((option) => {
                const isSelected = !!selectedOptions.find(
                  (status) => status.id === option.id,
                );

                return (
                  <div key={option.id} className="flex gap-4 px-6">
                    <Checkbox
                      key={`${option.id}-${isSelected}`}
                      defaultChecked={isSelected}
                      data-label={option.id}
                      onChange={(checked) =>
                        handleSelectOption(option, checked)
                      }
                    />
                    <Badge label={option.label} variant={option.variant} />
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={cn(
              'flex',
              'justify-center',
              'items-center',
              'gap-4',
              'py-4',
              'border-t',
              'border-gray-200',
              'dark:border-metal-700',
            )}
          >
            <Button
              variant="secondary"
              appearance="compact"
              onClick={handleResetOptions}
            >
              Reset
            </Button>

            <Button appearance="compact" onClick={handleApplyOptions}>
              Apply
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
