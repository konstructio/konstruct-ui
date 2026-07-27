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
}: Pick<
  DateRangeFilterDropdownProps,
  'defaultRange' | 'onApply' | 'countryCode'
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

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (open) {
        sendOpenFilterEvent(id);
      }

      setIsOpen(open);
    },
    [id],
  );

  const handleApply = useCallback(() => {
    const rangeWithTime: DateRangeWithTime = {
      from: selectedRange?.from,
      to: selectedRange?.to,
    };
    setAppliedRange(rangeWithTime);
    onApply?.(rangeWithTime);

    if (closeOnApply) {
      setIsOpen(false);
    }
  }, [closeOnApply, onApply, selectedRange]);

  const handleRangeChange = useCallback((range: DateRangeWithTime) => {
    setSelectedRange({ from: range.from, to: range.to });
  }, []);

  const handleClose = useCallback(() => setIsOpen(false), []);

  const clearSelection = useCallback(() => {
    setSelectedRange(undefined);
    setAppliedRange(undefined);
    onApply?.();
  }, [onApply]);

  const handleReset = useCallback(() => {
    clearSelection();

    if (closeOnApply) {
      setIsOpen(false);
    }
  }, [clearSelection, closeOnApply]);

  useFilterDropdownSync({ id, onClose: handleClose, onReset: clearSelection });

  return {
    id,
    appliedRange: appliedRangeFormatted,
    isOpen,
    selectedRange,
    handleApply,
    handleOpenChange,
    handleRangeChange,
    handleReset,
  };
};
