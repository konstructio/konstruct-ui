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

import { useCustomDateRangeFilterDropdown } from './CustomDateRangeFilterDropdown.hook';
import { CustomDateRangeFilterDropdownProps } from './CustomDateRangeFilterDropdown.types';

export const CustomDateRangeFilterDropdown: FC<
  CustomDateRangeFilterDropdownProps
> = ({
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
    hasPendingSelection,
    isOpen,
    resetKey,
    selectedRange,
    showsCalendar,
    handleApply,
    handleOpenChange,
    handlePresetChange,
    handleRangeChange,
    handleReset,
  } = useCustomDateRangeFilterDropdown({
    defaultRange,
    onApply,
    countryCode,
    applyOnPresetSelect,
  });

  const showsCalendarActions = !revealCalendarOnCustom || showsCalendar;
  const showsApply = showsCalendarActions || hasPendingSelection;
  const showsActions = showsApply || Boolean(appliedRange);

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
        key={resetKey}
        defaultRange={selectedRange}
        defaultPreset={selectedRange ? undefined : null}
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

      {showsActions && (
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
          <Button
            variant="secondary"
            appearance="compact"
            onClick={handleReset}
          >
            {labelReset}
          </Button>

          {showsApply && (
            <Button
              appearance="compact"
              disabled={!canApply}
              onClick={handleApply}
            >
              {labelApply}
            </Button>
          )}
        </div>
      )}
    </FilterDropdown>
  );
};
