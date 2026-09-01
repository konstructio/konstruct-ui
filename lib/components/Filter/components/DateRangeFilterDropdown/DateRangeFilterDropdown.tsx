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
  revealCalendarOnCustom = false,
  defaultRange,
  minDate,
  maxDate,
  countryCode = 'US',
  labelTimePeriod,
  // The design system labels these fields From / To inside a filter, and calls
  // the reset action Clear.
  labelStartDate = 'From',
  labelEndDate = 'To',
  requiredDates = true,
  labelApply = 'Apply',
  labelReset = 'Clear',
  applyOnPresetSelect = false,
  onApply,
}) => {
  const {
    appliedRange,
    canApply,
    isOpen,
    selectedRange,
    handleApply,
    handleOpenChange,
    handlePresetChange,
    handleRangeChange,
    handleReset,
  } = useDateRangeFilterDropdown({
    defaultRange,
    onApply,
    countryCode,
    applyOnPresetSelect,
  });

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
        revealCalendarOnCustom={revealCalendarOnCustom}
        labelTimePeriod={labelTimePeriod}
        labelStartDate={labelStartDate}
        labelEndDate={labelEndDate}
        requiredDates={requiredDates}
        minDate={minDate}
        maxDate={maxDate}
        onRangeChange={handleRangeChange}
        onPresetChange={handlePresetChange}
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
          {labelReset}
        </Button>

        <Button appearance="compact" disabled={!canApply} onClick={handleApply}>
          {labelApply}
        </Button>
      </div>
    </FilterDropdown>
  );
};
