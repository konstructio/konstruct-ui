import { useCallback, useId, useMemo, useState } from 'react';

import { useFilterContext } from '@/components/Filter/contexts';

import { sendOpenFilterEvent } from '../../events';
import { useFilterDropdownSync } from '../../hooks';
import { getLocale } from '../../utils';

import { DateFilterDropdownProps } from './DateFilterDropdown.types';

export const useDateFilterDropdown = ({
  onApply,
  countryCode = 'US',
}: Pick<DateFilterDropdownProps, 'onApply' | 'countryCode'>) => {
  const { closeOnApply } = useFilterContext();
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Date>();
  const [appliedDay, setAppliedDay] = useState<Date>();

  const appliedDayFormatted = useMemo(
    () =>
      appliedDay?.toLocaleDateString(getLocale(countryCode), {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    [appliedDay, countryCode],
  );

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
    setAppliedDay(selectedDay);
    onApply?.(selectedDay);

    if (closeOnApply) {
      setIsOpen(false);
    }
  }, [closeOnApply, onApply, selectedDay]);

  const handleSelect = useCallback((date: Date) => setSelectedDay(date), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  const clearSelection = useCallback(() => {
    setSelectedDay(undefined);
    setAppliedDay(undefined);
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
    appliedDay: appliedDayFormatted,
    isOpen,
    selectedDay,
    handleApply,
    handleOpenChange,
    handleSelect,
    handleReset,
  };
};
