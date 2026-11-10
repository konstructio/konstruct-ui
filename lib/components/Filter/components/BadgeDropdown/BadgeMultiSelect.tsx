import { ChevronDownIcon } from 'lucide-react';
import { FC, useId } from 'react';

import { Badge } from '@/components/Badge/Badge';
import { Button } from '@/components/Button/Button';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import {
  filterButtonIconVariants,
  filterButtonVariants,
} from '@/components/Filter/Filter.variants';
import { cn } from '@/utils';

import { FilterDropdown } from '../FilterDropdown/FilterDropdown';

import { useBadgeMultiSelect } from './hooks';
import { Props } from './BadgeMultiSelect.types';

export const BadgeMultiSelect: FC<Props> = ({
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
  const idPrefix = useId();

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
      sheetTitle={label}
      onOpenChange={handleOpenChange}
    >
      <div className="px-6 py-4 max-md:px-4 max-md:py-0">
        <div className="flex flex-col gap-2 max-md:gap-0">
          {showSelectAll && (
            <div className="flex items-center gap-4 max-md:min-h-12">
              <Checkbox
                id={`${idPrefix}-all`}
                checked={isAllSelected}
                aria-label={selectAllLabel}
                onChange={(checked) => handleSelectAll(options, checked)}
              />
              <label
                htmlFor={`${idPrefix}-all`}
                className="flex flex-1 cursor-pointer"
              >
                <Badge label={selectAllLabel} />
              </label>
            </div>
          )}
          {options.map((option) => {
            const isSelected = selectedOptions.some(
              (selected) => selected.id === option.id && !selected.isRemoved,
            );

            const optionId = `${idPrefix}-${option.id}`;

            return (
              <div
                key={option.id}
                className="flex items-center gap-4 max-md:min-h-12"
              >
                <Checkbox
                  id={optionId}
                  checked={isSelected}
                  aria-label={option.label}
                  data-label={option.id}
                  onChange={(checked) => handleSelectOption(option, checked)}
                />
                <label
                  htmlFor={optionId}
                  className="flex flex-1 cursor-pointer"
                >
                  <Badge
                    label={option.label}
                    variant={option.variant}
                    leftIcon={option.leftIcon}
                    rightIcon={option.rightIcon}
                    loading={option.loading}
                  />
                </label>
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
          'max-md:gap-2 max-md:border-t-0 max-md:px-4 max-md:pt-4 max-md:pb-0',
        )}
      >
        <Button
          variant="secondary"
          appearance="compact"
          className="max-md:h-11! max-md:flex-1"
          onClick={handleResetOptions}
        >
          Reset
        </Button>

        <Button
          appearance="compact"
          className="max-md:h-11! max-md:flex-1"
          onClick={handleApplyOptions}
        >
          Apply
        </Button>
      </div>
    </FilterDropdown>
  );
};
