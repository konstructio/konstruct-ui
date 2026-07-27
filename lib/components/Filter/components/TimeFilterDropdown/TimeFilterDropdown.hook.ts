import { useCallback, useEffect, useId, useState } from 'react';

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
  const { closeOnApply, resetScope } = useFilterContext();
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<Date>();
  const [appliedTime, setAppliedTime] = useState<Date>();
  const [selectedPresetLabel, setSelectedPresetLabel] = useState<string>();
  const [appliedPresetLabel, setAppliedPresetLabel] = useState<string>();

  const appliedLabel =
    appliedPresetLabel ??
    (appliedTime ? getFormattedTime(appliedTime, format) : undefined);

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (open) {
        sendOpenFilterEvent(id);
      }

      setIsOpen(open);
    },
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
      (event: Event) => {
        const { detail } = event as CustomEvent<string | null | undefined>;

        if (detail != null && detail !== resetScope) {
          return;
        }

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
    appliedLabel,
    isOpen,
    selectedTime,
    selectedPresetLabel,
    handleApply,
    handleOpenChange,
    handleSelectPreset,
    handleSelectCustom,
    handleReset,
  };
};
