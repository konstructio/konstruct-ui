import {
  FC,
  MouseEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { cn } from '@/utils';

import {
  buttonVariants,
  liVariants,
  ulVariants,
} from '../../TimePicker.variants';
import { useTimePickerContext } from '../../contexts';

import { HourListProps } from './HoursList.types';

const HoursList: FC<HourListProps> = ({ hours, scrollBehavior }) => {
  const wrapperRef = useRef<HTMLUListElement>(null);
  const initialHoursRef = useRef<number>(hours);
  const { format, isTyping, onSelectHour } = useTimePickerContext();
  const newHours = format === '12' ? (hours >= 12 ? hours - 12 : hours) : hours;
  const maxHours = format === '12' ? 12 : 24;

  const handleSelectHour = useCallback(
    (event: MouseEvent<HTMLButtonElement>, hour: number) => {
      event.currentTarget?.blur();
      onSelectHour(hour);
    },
    [onSelectHour],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
      const buttons = wrapperRef.current?.querySelectorAll('button');
      if (!buttons) return;

      let nextIndex = currentIndex;

      if (
        event.key === 'ArrowDown' ||
        (event.key === 'Tab' && !event.shiftKey)
      ) {
        event.preventDefault();
        nextIndex = (currentIndex + 1) % maxHours;
      } else if (
        event.key === 'ArrowUp' ||
        (event.key === 'Tab' && event.shiftKey)
      ) {
        event.preventDefault();
        nextIndex = (currentIndex - 1 + maxHours) % maxHours;
      } else if (event.key === 'Enter') {
        event.preventDefault();
        // Select the hour
        const hour = format === '12' ? currentIndex + 1 : currentIndex;
        onSelectHour(hour);
        // Move focus to minutes list
        const minutesList = document.querySelector('[aria-label="minutes"]');
        const activeMinuteButton = minutesList?.querySelector(
          'li[data-active="true"] button',
        ) as HTMLButtonElement;
        activeMinuteButton?.focus();
        return;
      }

      if (nextIndex !== currentIndex) {
        const nextButton = buttons[nextIndex] as HTMLButtonElement;
        nextButton?.focus();
      }
    },
    [format, maxHours, onSelectHour],
  );

  // Scroll on initial mount
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const initialHours = initialHoursRef.current;
    const adjustedHours =
      format === '12'
        ? initialHours >= 12
          ? initialHours - 12
          : initialHours
        : initialHours;
    const time = adjustedHours === 0 && format === '12' ? 12 : adjustedHours;

    if (wrapper) {
      const item = wrapper.querySelector(
        `[data-value="${`0${time}`.slice(-2)}"]`,
      ) as HTMLUListElement;

      item?.scrollIntoView({
        behavior: scrollBehavior,
        block: 'center',
      });
    }
  }, [format, scrollBehavior]);

  // Scroll when hours value changes (only while typing in input)
  useEffect(() => {
    if (!isTyping) return;

    const wrapper = wrapperRef.current;
    const adjustedHours =
      format === '12' ? (hours >= 12 ? hours - 12 : hours) : hours;
    const time = adjustedHours === 0 && format === '12' ? 12 : adjustedHours;

    if (wrapper) {
      const item = wrapper.querySelector(
        `[data-value="${`0${time}`.slice(-2)}"]`,
      ) as HTMLUListElement;

      item?.scrollIntoView({
        behavior: 'instant',
        block: 'center',
      });
    }
  }, [hours, format, isTyping]);

  if (format === '12') {
    const dataActive = newHours === 0 ? 12 : newHours;

    return (
      <ul
        ref={wrapperRef}
        className={cn(ulVariants())}
        aria-label="hours"
        role="listbox"
      >
        {Array.from({ length: 12 }, (_, index) => {
          const isActive = dataActive - 1 === index;

          return (
            <li
              key={index}
              className={cn(liVariants())}
              data-value={`0${index + 1}`.slice(-2)}
              data-active={isActive}
              role="presentation"
            >
              <button
                type="button"
                role="option"
                tabIndex={isActive ? 0 : -1}
                className={cn(buttonVariants())}
                onClick={(event) => handleSelectHour(event, index + 1)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                {index + 1}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul
      ref={wrapperRef}
      className={cn(ulVariants())}
      aria-label="hours"
      role="listbox"
    >
      {Array.from({ length: 24 }, (_, index) => {
        const isActive = hours === index;

        return (
          <li
            key={index}
            className={cn(liVariants())}
            data-value={`0${index}`.slice(-2)}
            data-active={isActive}
            role="presentation"
          >
            <button
              type="button"
              role="option"
              tabIndex={isActive ? 0 : -1}
              className={cn(buttonVariants())}
              onClick={(event) => handleSelectHour(event, index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {index}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

HoursList.displayName = 'HoursList';

export { HoursList };
