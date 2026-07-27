import { useCallback, useId, useMemo, useState } from 'react';

import { useFilterContext } from '@/components/Filter/contexts';
import { sendOpenFilterEvent } from '@/components/Filter/events';
import { useFilterDropdownSync } from '@/components/Filter/hooks';
import { Option } from '@/components/Filter/Filter.types';

import {
  BadgeMultiSelectProps,
  SelectedOptions,
} from './BadgeMultiSelect.types';

export const useBadgeMultiSelect = ({
  onApply,
  options = [],
}: Pick<BadgeMultiSelectProps, 'onApply' | 'options'>) => {
  const { closeOnApply } = useFilterContext();
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions[]>([]);

  const handleClose = useCallback(() => setIsOpen(false), []);

  const clearSelection = useCallback(() => {
    setSelectedOptions([]);
    onApply?.([]);
  }, [onApply]);

  useFilterDropdownSync({ id, onClose: handleClose, onReset: clearSelection });

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (open) {
        sendOpenFilterEvent(id);
        setSelectedOptions((prevOptions) =>
          prevOptions.filter((option) => option.isApplied),
        );
      }

      setIsOpen(open);
    },
    [id],
  );

  const handleSelectOption = useCallback(
    (option: Option, checked: boolean) => {
      if (checked) {
        setSelectedOptions([
          ...selectedOptions,
          { ...option, isApplied: false },
        ]);
      } else {
        setSelectedOptions(
          selectedOptions.map((o) => {
            if (o.id === option.id) {
              return { ...o, isRemoved: true };
            }

            return o;
          }),
        );
      }
    },
    [setSelectedOptions, selectedOptions],
  );

  const handleResetOptions = useCallback(() => {
    clearSelection();

    if (closeOnApply) {
      setIsOpen(false);
    }
  }, [clearSelection, closeOnApply]);

  const handleApplyOptions = useCallback(() => {
    const newOptions = selectedOptions
      ?.filter((option) => !option.isRemoved)
      .map((option) => ({ ...option, isApplied: true }));

    setSelectedOptions(newOptions);
    onApply?.(
      newOptions.map(
        ({ isApplied: _isApplied, isRemoved: _isRemoved, ...option }) => option,
      ),
    );

    if (closeOnApply) {
      setIsOpen(false);
    }
  }, [closeOnApply, onApply, selectedOptions, setSelectedOptions]);

  const selectedCount = useMemo(
    () => selectedOptions.filter((option) => option.isApplied),
    [selectedOptions],
  );

  const isAllSelected = useMemo(
    () =>
      options.length > 0 &&
      options.every((opt) =>
        selectedOptions.some((sel) => sel.id === opt.id && !sel.isRemoved),
      ),
    [options, selectedOptions],
  );

  const handleSelectAll = useCallback(
    (allOptions: Option[], checked: boolean) => {
      if (checked) {
        setSelectedOptions(
          allOptions.map((opt) => ({ ...opt, isApplied: false })),
        );
      }
    },
    [],
  );

  return {
    isOpen,
    isAllSelected,
    selectedCount,
    selectedOptions,
    handleApplyOptions,
    handleOpenChange,
    handleResetOptions,
    handleSelectAll,
    handleSelectOption,
  };
};
