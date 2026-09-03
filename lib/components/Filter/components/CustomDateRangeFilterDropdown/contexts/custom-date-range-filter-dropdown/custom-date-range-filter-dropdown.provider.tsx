import { FC, useCallback } from 'react';

import {
  DateRange,
  DateRangeWithTime,
} from '@/components/DateRangePicker/DateRangePicker.types';
import { useFilterContext } from '@/components/Filter/contexts';
import { useFilterDropdownSync } from '@/components/Filter/hooks';

import { DEFAULT_ROLLING_PRESETS } from '../../constants';
import {
  useAppliedDateRange,
  useCalendarVisibility,
  useDateRangeSelection,
  useFilterDropdownOpenState,
  useFormattedDateRange,
  usePendingDateRange,
  usePresetOptions,
  useResetKey,
  useSelectedPreset,
} from '../../hooks';
import { spanWholeDays } from '../../utils';

import { CustomDateRangeFilterDropdownContext } from './custom-date-range-filter-dropdown.context';
import { Props } from './custom-date-range-filter-dropdown.types';

export const CustomDateRangeFilterDropdownProvider: FC<Props> = ({
  animationDuration = 500,
  appliedRangeDisplay = 'compact',
  applyOnPresetSelect = false,
  children,
  countryCode = 'US',
  dateDisplayFormat = 'long',
  defaultRange,
  label,
  labelApply = 'Apply',
  labelCustomRange = 'Custom range',
  labelEndDate = 'To',
  labelRangeSeparator = 'to',
  labelReset = 'Clear',
  labelStartDate = 'From',
  labelTimePeriod,
  maxDate,
  minDate,
  navigationMode = 'independent',
  numberOfMonths = 2,
  position = 'left',
  presets,
  requiredDates = true,
  revealCalendarOnCustom = false,
  rollingPresets = DEFAULT_ROLLING_PRESETS,
  showCustomRange = true,
  showOutsideDays = false,
  showPresets = true,
  showTime = false,
  timeFormat = '24',
  onApply,
}) => {
  const { closeOnApply } = useFilterContext();
  const presetOptions = usePresetOptions({
    labelCustomRange,
    presets,
    rollingPresets,
    showCustomRange,
  });
  const { id, isOpen, close, handleOpenChange } = useFilterDropdownOpenState();
  const { selectedRange, selectRange, handleRangeChange, clearSelectedRange } =
    useDateRangeSelection({ defaultRange });
  const {
    appliedPreset,
    selectedPreset,
    applyPreset,
    clearSelectedPreset,
    markManualSelection,
    revertSelectedPreset,
    selectPreset,
  } = useSelectedPreset({ defaultRange });
  const { appliedRange, applyRange, clearAppliedRange } = useAppliedDateRange({
    defaultRange,
    onApply,
  });
  const { appliedRangeEnds, appliedRangeLabel } = useFormattedDateRange({
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
    restoreCalendar,
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
    applyPreset(selectedPreset);
    closeIfNeeded();
  }, [applyPreset, applyRange, closeIfNeeded, selectedPreset, selectedRange]);

  const discardPendingSelection = useCallback(() => {
    if (appliedRange) {
      selectRange(appliedRange);
    } else {
      clearSelectedRange();
    }

    revertSelectedPreset();
    restoreCalendar(appliedPreset === 'custom');
  }, [
    appliedPreset,
    appliedRange,
    clearSelectedRange,
    restoreCalendar,
    revertSelectedPreset,
    selectRange,
  ]);

  const handleDropdownOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        discardPendingSelection();
      }

      handleOpenChange(open);
    },
    [discardPendingSelection, handleOpenChange],
  );

  const handleSyncClose = useCallback(() => {
    discardPendingSelection();
    close();
  }, [close, discardPendingSelection]);

  const handlePresetChange = useCallback(
    (preset: string | null, range: DateRange) => {
      selectPreset(preset, Boolean(range.from || range.to));

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
      applyPreset(preset);
      closeIfNeeded();
    },
    [
      applyOnPresetSelect,
      applyPreset,
      applyRange,
      closeIfNeeded,
      collapseCalendar,
      revealCalendarFor,
      selectPreset,
      selectRange,
    ],
  );

  const handleSelectedRangeChange = useCallback(
    (range: DateRangeWithTime) => {
      const isManual = markManualSelection();

      handleRangeChange(
        isManual && !showTime ? { ...range, ...spanWholeDays(range) } : range,
      );
    },
    [handleRangeChange, markManualSelection, showTime],
  );

  const clearSelection = useCallback(() => {
    clearSelectedRange();
    clearSelectedPreset();
    clearAppliedRange();
    hideCalendar();
    bumpResetKey();
  }, [
    bumpResetKey,
    clearAppliedRange,
    clearSelectedPreset,
    clearSelectedRange,
    hideCalendar,
  ]);

  const handleReset = useCallback(() => {
    clearSelection();
    closeIfNeeded();
  }, [clearSelection, closeIfNeeded]);

  const handleClear = useCallback(() => {
    clearSelectedRange();
    clearSelectedPreset();
    clearAppliedRange();
    bumpResetKey();
  }, [
    bumpResetKey,
    clearAppliedRange,
    clearSelectedPreset,
    clearSelectedRange,
  ]);

  useFilterDropdownSync({
    id,
    onClose: handleSyncClose,
    onReset: clearSelection,
  });

  return (
    <CustomDateRangeFilterDropdownContext.Provider
      value={{
        animationDuration,
        appliedRangeDisplay,
        appliedRangeEnds,
        appliedRangeLabel,
        canApply,
        dateDisplayFormat,
        hasPendingSelection,
        isCollapsed,
        isOpen,
        label,
        labelApply,
        labelEndDate,
        labelRangeSeparator,
        labelReset,
        labelStartDate,
        labelTimePeriod,
        maxDate,
        minDate,
        navigationMode,
        numberOfMonths,
        position,
        presets: presetOptions,
        requiredDates,
        resetKey,
        revealCalendarOnCustom: revealCalendarOnCustom || !showCustomRange,
        selectedPreset,
        selectedRange,
        showOutsideDays,
        showPresets,
        showsCalendar,
        showTime,
        timeFormat,
        onApply: handleApply,
        onClear: handleClear,
        onOpenChange: handleDropdownOpenChange,
        onPresetChange: handlePresetChange,
        onRangeChange: handleSelectedRangeChange,
        onReset: handleReset,
      }}
    >
      {children}
    </CustomDateRangeFilterDropdownContext.Provider>
  );
};
