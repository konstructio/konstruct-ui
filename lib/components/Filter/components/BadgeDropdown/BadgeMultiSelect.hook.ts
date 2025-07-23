import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';

import { FilterEvent, sendOpenFilterEvent } from '@/components/Filter/events';
import { Option } from '@/components/Filter/Filter.types';

import {
  BadgeMultiSelectProps,
  SelectedOptions,
} from './BadgeMultiSelect.types';

export const useBadgeMultiSelect = ({
  onApply,
}: Pick<BadgeMultiSelectProps, 'onApply'>) => {
  const id = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
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

  const handleOpen = useCallback(
    () =>
      setIsOpen((prev) => {
        if (!prev) {
          sendOpenFilterEvent(id);
          setSelectedOptions((prevOptions) =>
            prevOptions.filter((option) => option.isApplied),
          );
        }

        return !prev;
      }),
    [id, setIsOpen],
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
  }, [onApply]);

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
  }, [onApply, selectedOptions, setSelectedOptions]);

  const selectedCount = useMemo(
    () => selectedOptions.filter((option) => option.isApplied),
    [selectedOptions],
  );

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
    isOpen,
    selectedCount,
    selectedOptions,
    wrapperRef,
    handleApplyOptions,
    handleOpen,
    handleResetOptions,
    handleSelectOption,
  };
};
