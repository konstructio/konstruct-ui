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

import { FilterDropdown } from '../FilterDropdown/FilterDropdown';

import { useBadgeMultiSelect } from './BadgeMultiSelect.hook';
import { BadgeMultiSelectProps } from './BadgeMultiSelect.types';

export const BadgeMultiSelect: FC<BadgeMultiSelectProps> = ({
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
                checked={isAllSelected}
                aria-label={selectAllLabel}
                onChange={(checked) => handleSelectAll(options, checked)}
              />
              <Badge label={selectAllLabel} />
            </div>
          )}
          {options.map((option) => {
            const isSelected = selectedOptions.some(
              (selected) => selected.id === option.id && !selected.isRemoved,
            );

            return (
              <div key={option.id} className="flex gap-4">
                <Checkbox
                  checked={isSelected}
                  aria-label={option.label}
                  data-label={option.id}
                  onChange={(checked) => handleSelectOption(option, checked)}
                />
                <Badge
                  label={option.label}
                  variant={option.variant}
                  leftIcon={option.leftIcon}
                  rightIcon={option.rightIcon}
                  loading={option.loading}
                />
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
