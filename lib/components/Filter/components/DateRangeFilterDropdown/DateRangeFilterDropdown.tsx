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
  } = useDateRangeFilterDropdown({
    defaultRange,
    onApply,
    countryCode,
    applyOnPresetSelect,
  });

  // The calendar is up, or it is always up because progressive disclosure is off.
  const showsCalendarActions = !revealCalendarOnCustom || showsCalendar;

  // Apply follows the work it would commit, not the calendar. A preset that does
  // not apply itself leaves a pending selection on the bare list, and without
  // this that choice could never reach the table.
  const showsApply = showsCalendarActions || hasPendingSelection;

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
        Each button follows what it would act on rather than the calendar.

        Apply appears while there is something to commit — the calendar is open,
        or a preset left a selection it did not apply itself. On the bare list
        after a preset applied on its own there is nothing left to do, and the
        design draws no button there.

        Clear appears while there is something applied to take off, which is what
        the user comes back to the preset list for.
      */}
      {(showsApply || Boolean(appliedRange)) && (
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
