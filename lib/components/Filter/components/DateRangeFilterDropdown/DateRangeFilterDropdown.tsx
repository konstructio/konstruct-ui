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
    resetKey,
    selectedRange,
    showsCalendar,
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

  // There is a selection to act on: either the calendar is up, or it is always
  // up because progressive disclosure is off.
  const showsActions = !revealCalendarOnCustom || showsCalendar;

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
        // No selection means no filter: the dropdown opens on the preset list
        // with nothing checked until the user picks something.
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

      {/*
        Apply belongs to the custom range: a preset applies the moment it is
        picked, so on the bare preset list there is nothing left to apply and the
        design draws no button there. Without progressive disclosure the calendar
        is always up, and so is Apply.

        Clear is not in the same position. Once a filter is on, the bare preset
        list is where the user comes back to take it off, so it stays reachable
        there rather than sending them to the table's own reset.
      */}
      {(showsActions || Boolean(appliedRange)) && (
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

          {showsActions && (
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
