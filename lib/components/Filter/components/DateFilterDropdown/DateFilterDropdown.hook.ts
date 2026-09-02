import { useCallback, useId, useMemo, useState } from 'react';

import { useFilterContext } from '@/components/Filter/contexts';

import { sendOpenFilterEvent } from '../../events';
import { useFilterDropdownSync } from '../../hooks';
import { getLocale } from '../../utils';

import { Props } from './DateFilterDropdown.types';

export const useDateFilterDropdown = ({
  onApply,
  countryCode = 'US',
}: Pick<Props, 'onApply' | 'countryCode'>) => {
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

  const handleOpenChange = (open: boolean) => {
    if (open) {
      sendOpenFilterEvent(id);
    }

    setIsOpen(open);
  };

  const handleApply = () => {
    setAppliedDay(selectedDay);
    onApply?.(selectedDay);

    if (closeOnApply) {
      setIsOpen(false);
    }
  };

  const handleSelect = useCallback((date: Date) => setSelectedDay(date), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  const clearSelection = useCallback(() => {
    setSelectedDay(undefined);
    setAppliedDay(undefined);
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
    appliedDay: appliedDayFormatted,
    isOpen,
    selectedDay,
    handleApply,
    handleOpenChange,
    handleSelect,
    handleReset,
  };
};
