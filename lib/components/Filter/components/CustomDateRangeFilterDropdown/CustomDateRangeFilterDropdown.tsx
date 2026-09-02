import { ChevronDownIcon } from 'lucide-react';
import { FC, useCallback } from 'react';

import { Badge } from '@/components/Badge/Badge';
import { Button } from '@/components/Button/Button';
import { DateRangePicker } from '@/components/DateRangePicker/DateRangePicker';
import { DateRange } from '@/components/DateRangePicker/DateRangePicker.types';
import { useFilterContext } from '@/components/Filter/contexts';
import {
  filterButtonIconVariants,
  filterButtonVariants,
} from '@/components/Filter/Filter.variants';
import { useFilterDropdownSync } from '@/components/Filter/hooks';
import { cn } from '@/utils';

import { FilterDropdown } from '../FilterDropdown/FilterDropdown';

import { CustomDateRangeFilterDropdownProps } from './CustomDateRangeFilterDropdown.types';
import {
  useAppliedDateRange,
  useCalendarVisibility,
  useDateRangeSelection,
  useFilterDropdownOpenState,
  useFormattedDateRange,
  usePendingDateRange,
  useResetKey,
} from './hooks';

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
  const { closeOnApply } = useFilterContext();
  const { id, isOpen, close, handleOpenChange } = useFilterDropdownOpenState();
  const { selectedRange, selectRange, handleRangeChange, clearSelectedRange } =
    useDateRangeSelection({ defaultRange });
  const { appliedRange, applyRange, clearAppliedRange } = useAppliedDateRange({
    onApply,
  });
  const appliedRangeLabel = useFormattedDateRange({
    range: appliedRange,
    countryCode,
  });
  const { canApply, hasPendingSelection } = usePendingDateRange({
    selectedRange,
    appliedRange,
  });
  const { showsCalendar, revealCalendarFor, hideCalendar } =
    useCalendarVisibility({ defaultRange });
  const [resetKey, bumpResetKey] = useResetKey();

  const closeIfNeeded = useCallback(() => {
    if (closeOnApply) {
      close();
    }
  }, [close, closeOnApply]);

  const handleApply = () => {
    applyRange(selectedRange);
    closeIfNeeded();
  };

  const handlePresetChange = useCallback(
    (_preset: string, range: DateRange) => {
      const opensCalendar = revealCalendarFor(range);

      if (!applyOnPresetSelect || opensCalendar) {
        return;
      }

      selectRange(range);
      applyRange(range);
      closeIfNeeded();
    },
    [
      applyOnPresetSelect,
      applyRange,
      closeIfNeeded,
      revealCalendarFor,
      selectRange,
    ],
  );

  const clearSelection = useCallback(() => {
    clearSelectedRange();
    clearAppliedRange();
    hideCalendar();
    bumpResetKey();
  }, [bumpResetKey, clearAppliedRange, clearSelectedRange, hideCalendar]);

  const handleReset = () => {
    clearSelection();
    closeIfNeeded();
  };

  useFilterDropdownSync({ id, onClose: close, onReset: clearSelection });

  const showsCalendarActions = !revealCalendarOnCustom || showsCalendar;
  const showsApply = showsCalendarActions || hasPendingSelection;
  const showsActions = showsApply || Boolean(appliedRangeLabel);

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
          {appliedRangeLabel && <Badge label={appliedRangeLabel} />}
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
