import { KeyboardEvent, useCallback, useId, useRef, useState } from 'react';

import {
  AnimationDirection,
  UseButtonGroupProps,
  UseButtonGroupReturn,
} from './useButtonGroup.types';

export type { AnimationDirection } from './useButtonGroup.types';

export const useButtonGroup = ({
  defaultValue,
  disabled,
  options,
  value,
  onValueChange,
}: UseButtonGroupProps): UseButtonGroupReturn => {
  const id = useId();
  const groupRef = useRef<HTMLDivElement>(null);
  const isControlled = value !== undefined;
  const [internalSelected, setInternalSelected] = useState<string | undefined>(
    () => defaultValue,
  );
  const selected = isControlled ? value : internalSelected;
  const [animationDirection, setAnimationDirection] =
    useState<AnimationDirection>('none');

  const getIndexByValue = useCallback(
    (val: string | undefined) => {
      if (!val) return -1;
      return options.findIndex((opt) => opt.value === val);
    },
    [options],
  );

  const handleSelect = useCallback(
    (newValue: string) => {
      if (disabled) return;

      const currentIndex = getIndexByValue(selected);
      const newIndex = getIndexByValue(newValue);

      if (currentIndex !== -1 && newIndex !== -1) {
        setAnimationDirection(newIndex > currentIndex ? 'right' : 'left');
      }

      if (!isControlled) {
        setInternalSelected(newValue);
      }
      onValueChange?.(newValue);
    },
    [disabled, getIndexByValue, isControlled, onValueChange, selected],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
      const enabledOptions = options.filter(
        (opt) => !opt.disabled && !disabled,
      );
      const currentEnabledIndex = enabledOptions.findIndex(
        (opt) => opt.value === options[currentIndex].value,
      );

      let nextIndex = -1;

      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          event.preventDefault();
          nextIndex = (currentEnabledIndex + 1) % enabledOptions.length;
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          event.preventDefault();
          nextIndex =
            (currentEnabledIndex - 1 + enabledOptions.length) %
            enabledOptions.length;
          break;
        case 'Home':
          event.preventDefault();
          nextIndex = 0;
          break;
        case 'End':
          event.preventDefault();
          nextIndex = enabledOptions.length - 1;
          break;
        default:
          return;
      }

      if (nextIndex >= 0) {
        const nextOption = enabledOptions[nextIndex];
        handleSelect(nextOption.value);

        const nextButton = groupRef.current?.querySelector(
          `[data-value="${nextOption.value}"]`,
        ) as HTMLButtonElement | null;
        nextButton?.focus();
      }
    },
    [disabled, handleSelect, options],
  );

  return {
    animationDirection,
    groupRef,
    id,
    selected,
    handleKeyDown,
    handleSelect,
  };
};
