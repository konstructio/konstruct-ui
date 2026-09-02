import { useCallback, useId, useMemo, useState } from 'react';

import {
  DateRange,
  DateRangeWithTime,
} from '@/components/DateRangePicker/DateRangePicker.types';

import { useFilterContext } from '@/components/Filter/contexts';

import { sendOpenFilterEvent } from '../../events';
import { useFilterDropdownSync } from '../../hooks';
import { getLocale } from '../../utils';

import { DateRangeFilterDropdownProps } from './DateRangeFilterDropdown.types';

export const useDateRangeFilterDropdown = ({
  defaultRange,
  onApply,
  countryCode = 'US',
  applyOnPresetSelect = false,
}: Pick<
  DateRangeFilterDropdownProps,
  'defaultRange' | 'onApply' | 'countryCode' | 'applyOnPresetSelect'
>) => {
  const { closeOnApply } = useFilterContext();
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>(
    defaultRange,
  );
  const [appliedRange, setAppliedRange] = useState<
    DateRangeWithTime | undefined
  >();
  // The picker seeds itself from `defaultRange` on mount only, so clearing has
  // to remount it; otherwise the calendar keeps showing the discarded range.
  const [resetKey, setResetKey] = useState(0);
  // Whether the picker is currently showing its calendar. A range handed in up
  // front opens on the manual-selection preset, so it starts revealed.
  const [showsCalendar, setShowsCalendar] = useState(Boolean(defaultRange));

  const appliedRangeFormatted = useMemo(() => {
    if (!appliedRange?.from) return undefined;

    const formatDate = (date: Date) =>
      date.toLocaleDateString(getLocale(countryCode), {
        day: 'numeric',
        month: 'short',
      });

    if (appliedRange.to) {
      return `${formatDate(appliedRange.from)} - ${formatDate(appliedRange.to)}`;
    }

    return formatDate(appliedRange.from);
  }, [appliedRange]);

  const handleOpenChange = (open: boolean) => {
    if (open) {
      sendOpenFilterEvent(id);
    }

    setIsOpen(open);
  };

  const applyRange = useCallback(
    (range: DateRange | undefined) => {
      const rangeWithTime: DateRangeWithTime = {
        from: range?.from,
        to: range?.to,
      };
      setAppliedRange(rangeWithTime);
      onApply?.(rangeWithTime);

      if (closeOnApply) {
        setIsOpen(false);
      }
    },
    [closeOnApply, onApply],
  );

  const handleApply = () => applyRange(selectedRange);

  /** Nothing chosen yet: applying would send an empty range, which filters nothing. */
  const canApply = Boolean(selectedRange?.from || selectedRange?.to);

  const handlePresetChange = useCallback(
    (_preset: string, range: DateRange) => {
      // A manual-selection entry resolves to nothing — that is the user asking
      // for the calendar, not asking to filter, so there is nothing to apply yet.
      const opensCalendar = !range.from && !range.to;
      setShowsCalendar(opensCalendar);

      if (!applyOnPresetSelect || opensCalendar) return;

      setSelectedRange(range);
      applyRange(range);
    },
    [applyOnPresetSelect, applyRange],
  );

  const handleRangeChange = useCallback((range: DateRangeWithTime) => {
    setSelectedRange({ from: range.from, to: range.to });
  }, []);

  const handleClose = useCallback(() => setIsOpen(false), []);

  const clearSelection = useCallback(() => {
    setSelectedRange(undefined);
    setAppliedRange(undefined);
    setShowsCalendar(false);
    setResetKey((key) => key + 1);
    onApply?.();
  }, [onApply]);

  const handleReset = () => {
    clearSelection();

    if (closeOnApply) {
      setIsOpen(false);
    }
  };

  useFilterDropdownSync({ id, onClose: handleClose, onReset: clearSelection });

  return {
    id,
    appliedRange: appliedRangeFormatted,
    canApply,
    isOpen,
    resetKey,
    showsCalendar,
    selectedRange,
    handleApply,
    handleOpenChange,
    handlePresetChange,
    handleRangeChange,
    handleReset,
  };
};
