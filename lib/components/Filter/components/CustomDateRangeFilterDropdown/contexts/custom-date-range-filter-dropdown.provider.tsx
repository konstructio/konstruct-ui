import { FC, useCallback } from 'react';

import { DateRange } from '@/components/DateRangePicker/DateRangePicker.types';
import { useFilterContext } from '@/components/Filter/contexts';
import { useFilterDropdownSync } from '@/components/Filter/hooks';

import {
  useAppliedDateRange,
  useCalendarVisibility,
  useDateRangeSelection,
  useFilterDropdownOpenState,
  useFormattedDateRange,
  usePendingDateRange,
  useResetKey,
} from '../hooks';

import { CustomDateRangeFilterDropdownContext } from './custom-date-range-filter-dropdown.context';
import { Props } from './custom-date-range-filter-dropdown.types';

export const CustomDateRangeFilterDropdownProvider: FC<Props> = ({
  animationDuration = 500,
  applyOnPresetSelect = false,
  children,
  countryCode = 'US',
  defaultRange,
  label,
  labelApply = 'Apply',
  labelEndDate = 'To',
  labelReset = 'Clear',
  labelStartDate = 'From',
  labelTimePeriod,
  maxDate,
  minDate,
  position = 'left',
  presets,
  requiredDates = true,
  revealCalendarOnCustom = false,
  showPresets = true,
  showTime = false,
  timeFormat = '24',
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
  const {
    isCollapsed,
    showsCalendar,
    collapseCalendar,
    hideCalendar,
    revealCalendarFor,
  } = useCalendarVisibility({ defaultRange });
  const [resetKey, bumpResetKey] = useResetKey();

  const closeIfNeeded = useCallback(() => {
    if (closeOnApply) {
      close();
    }
  }, [close, closeOnApply]);

  const handleApply = useCallback(() => {
    applyRange(selectedRange);
    closeIfNeeded();
  }, [applyRange, closeIfNeeded, selectedRange]);

  const handlePresetChange = useCallback(
    (preset: string | null, range: DateRange) => {
      if (preset === null) {
        collapseCalendar();

        return;
      }

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
      collapseCalendar,
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

  const handleReset = useCallback(() => {
    clearSelection();
    closeIfNeeded();
  }, [clearSelection, closeIfNeeded]);

  const handleClear = useCallback(() => {
    clearSelectedRange();
    clearAppliedRange();
    bumpResetKey();
  }, [bumpResetKey, clearAppliedRange, clearSelectedRange]);

  useFilterDropdownSync({ id, onClose: close, onReset: clearSelection });

  return (
    <CustomDateRangeFilterDropdownContext.Provider
      value={{
        animationDuration,
        appliedRangeLabel,
        canApply,
        hasPendingSelection,
        isCollapsed,
        isOpen,
        label,
        labelApply,
        labelEndDate,
        labelReset,
        labelStartDate,
        labelTimePeriod,
        maxDate,
        minDate,
        position,
        presets,
        requiredDates,
        resetKey,
        revealCalendarOnCustom,
        selectedRange,
        showPresets,
        showsCalendar,
        showTime,
        timeFormat,
        onApply: handleApply,
        onClear: handleClear,
        onOpenChange: handleOpenChange,
        onPresetChange: handlePresetChange,
        onRangeChange: handleRangeChange,
        onReset: handleReset,
      }}
    >
      {children}
    </CustomDateRangeFilterDropdownContext.Provider>
  );
};
