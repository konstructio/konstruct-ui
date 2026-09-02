import { useCallback, useId, useMemo, useState } from 'react';

import {
  DateRange,
  DateRangeWithTime,
} from '@/components/DateRangePicker/DateRangePicker.types';

import { useFilterContext } from '@/components/Filter/contexts';

import { sendOpenFilterEvent } from '../../events';
import { useFilterDropdownSync } from '../../hooks';
import { getLocale } from '../../utils';

import { CustomDateRangeFilterDropdownProps } from './CustomDateRangeFilterDropdown.types';

const sameInstant = (a?: Date, b?: Date) => {
  return (a?.getTime() ?? null) === (b?.getTime() ?? null);
};

export const useCustomDateRangeFilterDropdown = ({
  defaultRange,
  onApply,
  countryCode = 'US',
  applyOnPresetSelect = false,
}: Pick<
  CustomDateRangeFilterDropdownProps,
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
  const [resetKey, setResetKey] = useState(0);
  const [showsCalendar, setShowsCalendar] = useState(Boolean(defaultRange));

  const appliedRangeFormatted = useMemo(() => {
    if (!appliedRange?.from) {
      return undefined;
    }

    const formatDate = (date: Date) => {
      return date.toLocaleDateString(getLocale(countryCode), {
        day: 'numeric',
        month: 'short',
      });
    };

    if (appliedRange.to) {
      return `${formatDate(appliedRange.from)} - ${formatDate(appliedRange.to)}`;
    }

    return formatDate(appliedRange.from);
  }, [appliedRange, countryCode]);

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

  const handleApply = () => {
    applyRange(selectedRange);
  };

  const canApply = Boolean(selectedRange?.from || selectedRange?.to);

  const hasPendingSelection = useMemo(() => {
    if (!canApply) {
      return false;
    }

    return (
      !sameInstant(selectedRange?.from, appliedRange?.from) ||
      !sameInstant(selectedRange?.to, appliedRange?.to)
    );
  }, [canApply, selectedRange, appliedRange]);

  const handlePresetChange = useCallback(
    (_preset: string, range: DateRange) => {
      const opensCalendar = !range.from && !range.to;
      setShowsCalendar(opensCalendar);

      if (!applyOnPresetSelect || opensCalendar) {
        return;
      }

      setSelectedRange(range);
      applyRange(range);
    },
    [applyOnPresetSelect, applyRange],
  );

  const handleRangeChange = useCallback((range: DateRangeWithTime) => {
    setSelectedRange({ from: range.from, to: range.to });
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedRange(undefined);
    setAppliedRange(undefined);
    setShowsCalendar(false);
    setResetKey((key) => {
      return key + 1;
    });
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
    hasPendingSelection,
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
