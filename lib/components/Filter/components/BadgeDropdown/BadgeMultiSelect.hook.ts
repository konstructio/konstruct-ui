import { useCallback, useEffect, useId, useMemo, useState } from 'react';

import { useFilterContext } from '@/components/Filter/contexts';
import { FilterEvent, sendOpenFilterEvent } from '@/components/Filter/events';
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
        setSelectedOptions([]);
        onApply?.([]);
      },
      {
        signal: controller.signal,
      },
    );

    return () => {
      controller.abort();
    };
  }, [id, onApply]);

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

  const handleClose = useCallback(() => setIsOpen(false), []);

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
    setSelectedOptions([]);
    onApply?.([]);

    if (closeOnApply) {
      setIsOpen(false);
    }
  }, [closeOnApply, onApply]);

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
