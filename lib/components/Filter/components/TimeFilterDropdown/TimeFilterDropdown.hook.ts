import { useCallback, useId, useState } from 'react';

import { getFormattedTime } from '@/components/TimePicker/utils';

import { useFilterContext } from '@/components/Filter/contexts';

import { sendOpenFilterEvent } from '../../events';
import { useFilterDropdownSync } from '../../hooks';

import {
  TimeFilterDropdownProps,
  TimePreset,
} from './TimeFilterDropdown.types';

export const useTimeFilterDropdown = ({
  onApply,
  format = '24',
}: Pick<TimeFilterDropdownProps, 'onApply' | 'format'>) => {
  const { closeOnApply } = useFilterContext();
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<Date>();
  const [appliedTime, setAppliedTime] = useState<Date>();
  const [selectedPresetLabel, setSelectedPresetLabel] = useState<string>();
  const [appliedPresetLabel, setAppliedPresetLabel] = useState<string>();

  const appliedLabel =
    appliedPresetLabel ??
    (appliedTime ? getFormattedTime(appliedTime, format) : undefined);

  const handleOpenChange = (open: boolean) => {
    if (open) {
      sendOpenFilterEvent(id);
    }

    setIsOpen(open);
  };

  const handleSelectPreset = (preset: TimePreset) => {
    setSelectedTime(preset.value);
    setSelectedPresetLabel(preset.label);
  };

  const handleSelectCustom = useCallback((time: Date) => {
    setSelectedTime(time);
    setSelectedPresetLabel(undefined);
  }, []);

  const handleApply = () => {
    setAppliedTime(selectedTime);
    setAppliedPresetLabel(selectedPresetLabel);
    onApply?.(selectedTime);

    if (closeOnApply) {
      setIsOpen(false);
    }
  };

  const handleClose = useCallback(() => setIsOpen(false), []);

  const clearSelection = useCallback(() => {
    setSelectedTime(undefined);
    setAppliedTime(undefined);
    setSelectedPresetLabel(undefined);
    setAppliedPresetLabel(undefined);
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
