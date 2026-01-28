import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';

import { FilterEvent, sendOpenFilterEvent } from '../../events';
import { getLocale } from '../../utils';

import { DateFilterDropdownProps } from './DateFilterDropdown.types';

export const useDateFilterDropdown = ({
  onApply,
  countryCode = 'US',
}: Pick<DateFilterDropdownProps, 'onApply' | 'countryCode'>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
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

  const handleOpen = useCallback(
    () =>
      setIsOpen((prev) => {
        if (!prev) {
          sendOpenFilterEvent(id);
        }

        return !prev;
      }),
    [id],
  );

  const handleApply = useCallback(() => {
    setAppliedDay(selectedDay);
    onApply?.(selectedDay);
  }, [onApply, selectedDay]);

  const handleSelect = useCallback((date: Date) => setSelectedDay(date), []);
  const handleClose = useCallback(() => setIsOpen(false), []);
  const handleReset = useCallback(() => {
    setSelectedDay(undefined);
    setAppliedDay(undefined);
    onApply?.();
  }, [onApply]);

  useEffect(() => {
    const controller = new AbortController();

    document.addEventListener(
      FilterEvent.OPEN as string,
      ((event: Event) => {
        const customEvent = event as CustomEvent<string>;

        if (customEvent.detail !== id) {
          setIsOpen(false);
        }
      }) as EventListener,
      {
        signal: controller.signal,
      },
    );

    return () => {
      controller.abort();
    };
  }, [id]);

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
      () => {
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
  }, [id, onApply]);

  useEffect(() => {
    const controller = new AbortController();

    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside, {
      signal: controller.signal,
    });

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
  }, [handleClose, wrapperRef]);

  return {
    id,
    appliedDay: appliedDayFormatted,
    isOpen,
    selectedDay,
    wrapperRef,
    handleApply,
    handleOpen,
    handleSelect,
    handleReset,
  };
};
