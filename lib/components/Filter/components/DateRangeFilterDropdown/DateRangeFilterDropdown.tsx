import { ChevronDownIcon } from 'lucide-react';
import { FC } from 'react';

import { Badge } from '@/components/Badge/Badge';
import { Button } from '@/components/Button/Button';
import { DateRangePicker } from '@/components/DateRangePicker/DateRangePicker';
import {
  filterButtonIconVariants,
  filterButtonVariants,
} from '@/components/Filter/Filter.variants';
import { cn } from '@/utils';

import { FilterDropdown } from '../FilterDropdown/FilterDropdown';

import { useDateRangeFilterDropdown } from './DateRangeFilterDropdown.hook';
import { DateRangeFilterDropdownProps } from './DateRangeFilterDropdown.types';

export const DateRangeFilterDropdown: FC<DateRangeFilterDropdownProps> = ({
  label,
  position = 'left',
  showTime = false,
  timeFormat = '24',
  showPresets = true,
  presets,
  defaultRange,
  minDate,
  maxDate,
  countryCode = 'US',
  onApply,
}) => {
  const {
    appliedRange,
    isOpen,
    selectedRange,
    handleApply,
    handleOpenChange,
    handleRangeChange,
    handleReset,
  } = useDateRangeFilterDropdown({ defaultRange, onApply, countryCode });

  return (
    <FilterDropdown
      isOpen={isOpen}
      position={position}
      triggerClassName={cn(filterButtonVariants(), {
        'text-slate-700': isOpen,
      })}
      trigger={
        <>
          {label}
          {appliedRange && <Badge label={appliedRange} />}
          <ChevronDownIcon
            className={cn(filterButtonIconVariants(), {
              'rotate-180 text-blue-600 dark:text-aurora-500': isOpen,
            })}
          />
        </>
      }
      onOpenChange={handleOpenChange}
    >
      <DateRangePicker
        defaultRange={selectedRange}
        showTime={showTime}
        timeFormat={timeFormat}
        showPresets={showPresets}
        presets={presets}
        minDate={minDate}
        maxDate={maxDate}
        onRangeChange={handleRangeChange}
        classNames={{
          container: 'shadow-none',
        }}
      />

      <div
        className={cn(
          'flex',
          'justify-end',
          'items-center',
          'gap-4',
          'p-4',
          'pt-0',
        )}
      >
        <Button variant="secondary" appearance="compact" onClick={handleReset}>
          Reset
        </Button>

        <Button appearance="compact" onClick={handleApply}>
          Apply
        </Button>
      </div>
    </FilterDropdown>
  );
};
