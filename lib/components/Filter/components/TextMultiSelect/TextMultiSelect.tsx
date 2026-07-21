import { ChevronDownIcon } from 'lucide-react';
import { FC } from 'react';

import { Badge } from '@/components/Badge/Badge';
import { Button } from '@/components/Button/Button';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import {
  filterButtonIconVariants,
  filterButtonVariants,
} from '@/components/Filter/Filter.variants';
import { cn } from '@/utils';

import { useBadgeMultiSelect } from '../BadgeDropdown/BadgeMultiSelect.hook';
import { FilterDropdown } from '../FilterDropdown/FilterDropdown';

import { TextMultiSelectProps } from './TextMultiSelect.types';

export const TextMultiSelect: FC<TextMultiSelectProps> = ({
  options,
  label,
  position = 'left',
  onApply,
  showSelectAll = true,
  selectAllLabel = 'All',
}) => {
  const {
    isOpen,
    isAllSelected,
    selectedOptions,
    selectedCount,
    handleOpenChange,
    handleResetOptions,
    handleApplyOptions,
    handleSelectAll,
    handleSelectOption,
  } = useBadgeMultiSelect({ onApply, options });

  if (options.length === 0) {
    return null;
  }

  return (
    <FilterDropdown
      isOpen={isOpen}
      position={position}
      contentClassName="border border-gray-200"
      triggerClassName={cn(filterButtonVariants(), {
        'text-slate-700 dark:text-metal-50': isOpen,
      })}
      trigger={
        <>
          {label}
          {selectedCount.length > 0 && (
            <Badge label={selectedCount.length.toString()} />
          )}
          <ChevronDownIcon
            className={cn(filterButtonIconVariants(), {
              'rotate-180 text-blue-600 dark:text-aurora-500': isOpen,
            })}
          />
        </>
      }
      onOpenChange={handleOpenChange}
    >
      <div className="px-6 py-4">
        <div className="flex flex-col gap-2">
          {showSelectAll && (
            <div className="flex gap-4">
              <Checkbox
                key={`select-all-${isAllSelected}`}
                defaultChecked={isAllSelected}
                onChange={(checked) => handleSelectAll(options, checked)}
              />
              <span className="text-sm text-slate-700 dark:text-metal-200 whitespace-nowrap">
                {selectAllLabel}
              </span>
            </div>
          )}
          {options.map((option) => {
            const isSelected = !!selectedOptions.find(
              (status) => status.id === option.id,
            );

            return (
              <div key={option.id} className="flex gap-4">
                <Checkbox
                  key={`${option.id}-${isSelected}`}
                  defaultChecked={isSelected}
                  data-label={option.id}
                  onChange={(checked) => handleSelectOption(option, checked)}
                />
                <span className="text-sm text-slate-700 dark:text-metal-200 whitespace-nowrap">
                  {option.label}
                </span>
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
          'px-6',
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
    </FilterDropdown>
  );
};
