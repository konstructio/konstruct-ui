import { useCallback, useEffect, useId, useRef, useState } from 'react';

import { getFormattedTime } from '@/components/TimePicker/utils';

import { useFilterContext } from '@/components/Filter/contexts';

import { FilterEvent, sendOpenFilterEvent } from '../../events';

import {
  TimeFilterDropdownProps,
  TimePreset,
} from './TimeFilterDropdown.types';

export const useTimeFilterDropdown = ({
  onApply,
  format = '24',
}: Pick<TimeFilterDropdownProps, 'onApply' | 'format'>) => {
  const { closeOnApply } = useFilterContext();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<Date>();
  const [appliedTime, setAppliedTime] = useState<Date>();
  const [selectedPresetLabel, setSelectedPresetLabel] = useState<string>();
  const [appliedPresetLabel, setAppliedPresetLabel] = useState<string>();

  const appliedLabel =
    appliedPresetLabel ??
    (appliedTime ? getFormattedTime(appliedTime, format) : undefined);

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

  const handleSelectPreset = useCallback((preset: TimePreset) => {
    setSelectedTime(preset.value);
    setSelectedPresetLabel(preset.label);
  }, []);

  const handleSelectCustom = useCallback((time: Date) => {
    setSelectedTime(time);
    setSelectedPresetLabel(undefined);
  }, []);

  const handleApply = useCallback(() => {
    setAppliedTime(selectedTime);
    setAppliedPresetLabel(selectedPresetLabel);
    onApply?.(selectedTime);

    if (closeOnApply) {
      setIsOpen(false);
    }
  }, [closeOnApply, onApply, selectedTime, selectedPresetLabel]);

  const handleClose = useCallback(() => setIsOpen(false), []);

  const handleReset = useCallback(() => {
    setSelectedTime(undefined);
    setAppliedTime(undefined);
    setSelectedPresetLabel(undefined);
    setAppliedPresetLabel(undefined);
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
      () => {
        setSelectedTime(undefined);
        setAppliedTime(undefined);
        setSelectedPresetLabel(undefined);
        setAppliedPresetLabel(undefined);
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
    appliedLabel,
    isOpen,
    selectedTime,
    selectedPresetLabel,
    wrapperRef,
    handleApply,
    handleOpen,
    handleSelectPreset,
    handleSelectCustom,
    handleReset,
  };
};
