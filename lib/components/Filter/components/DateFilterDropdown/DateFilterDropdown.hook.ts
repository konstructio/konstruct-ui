import { useCallback, useEffect, useId, useMemo, useState } from 'react';

import { useFilterContext } from '@/components/Filter/contexts';

import { FilterEvent, sendOpenFilterEvent } from '../../events';
import { getLocale } from '../../utils';

import { DateFilterDropdownProps } from './DateFilterDropdown.types';

export const useDateFilterDropdown = ({
  onApply,
  countryCode = 'US',
}: Pick<DateFilterDropdownProps, 'onApply' | 'countryCode'>) => {
  const { closeOnApply, resetScope } = useFilterContext();
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
  const handleReset = useCallback(() => {
    setSelectedDay(undefined);
    setAppliedDay(undefined);
    onApply?.();

    if (closeOnApply) {
      setIsOpen(false);
    }
  }, [closeOnApply, onApply]);

  useEffect(() => {
    const controller = new AbortController();

    document.addEventListener(
      FilterEvent.OPEN,
      (event: Event) => {
        const customEvent = event as CustomEvent<string>;

        if (customEvent.detail !== id) {
          setIsOpen(false);
        }
      },
      {
        signal: controller.signal,
      },
    );

    document.addEventListener(
      FilterEvent.RESET,
      (event: Event) => {
        const { detail } = event as CustomEvent<string | null | undefined>;

        if (detail != null && detail !== resetScope) {
          return;
        }

        setSelectedDay(undefined);
        setAppliedDay(undefined);
        onApply?.();
      },
      {
        signal: controller.signal,
      },
    );

    return () => {
      controller.abort();
    };
  }, [id, onApply, resetScope]);

  useEffect(() => {
    const controller = new AbortController();

    document.addEventListener(
      'visibilitychange',
      () => {
        if (document.hidden) {
          handleClose();
        }
      },
      {
        signal: controller.signal,
      },
    );

    return () => {
      controller.abort();
    };
  }, [handleClose]);

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
