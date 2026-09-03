import { useCallback, useId, useMemo, useState } from 'react';

import { useFilterContext } from '@/components/Filter/contexts';
import { sendOpenFilterEvent } from '@/components/Filter/events';
import { useFilterDropdownSync } from '@/components/Filter/hooks';
import { Option } from '@/components/Filter/Filter.types';

import { Props, SelectedOptions } from '../../BadgeMultiSelect.types';

export const useBadgeMultiSelect = ({
  onApply,
  options = [],
}: Pick<Props, 'onApply' | 'options'>) => {
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

  const handleOpenChange = (open: boolean) => {
    if (open) {
      sendOpenFilterEvent(id);
      setSelectedOptions((prevOptions) =>
        prevOptions
          .filter((option) => option.isApplied)
          .map((option) => ({ ...option, isRemoved: false })),
      );
    }

    setIsOpen(open);
  };

  const handleSelectOption = (option: Option, checked: boolean) => {
    if (checked) {
      setSelectedOptions((prevOptions) => {
        const exists = prevOptions.some((o) => o.id === option.id);

        if (exists) {
          return prevOptions.map((o) => {
            if (o.id === option.id) {
              return { ...o, isRemoved: false };
            }

            return o;
          });
        }

        return [...prevOptions, { ...option, isApplied: false }];
      });
    } else {
      setSelectedOptions((prevOptions) =>
        prevOptions.map((o) => {
          if (o.id === option.id) {
            return { ...o, isRemoved: true };
          }

          return o;
        }),
      );
    }
  };

  const handleResetOptions = () => {
    clearSelection();

    if (closeOnApply) {
      setIsOpen(false);
    }
  };

  const handleApplyOptions = () => {
    const newOptions = selectedOptions
      .filter((option) => !option.isRemoved)
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
  };

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

  const handleSelectAll = (allOptions: Option[], checked: boolean) => {
    if (checked) {
      setSelectedOptions((prevOptions) =>
        allOptions.map((opt) => {
          const existing = prevOptions.find((o) => o.id === opt.id);

          if (existing) {
            return { ...existing, isRemoved: false };
          }

          return { ...opt, isApplied: false };
        }),
      );
    } else {
      setSelectedOptions((prevOptions) =>
        prevOptions.map((o) => ({ ...o, isRemoved: true })),
      );
    }
  };

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
