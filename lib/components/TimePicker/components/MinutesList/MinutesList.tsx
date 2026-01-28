import {
  useEffect,
  useRef,
  FC,
  MouseEvent,
  KeyboardEvent,
  useCallback,
} from 'react';

import { cn } from '@/utils';

import {
  buttonVariants,
  liVariants,
  ulVariants,
} from '../../TimePicker.variants';
import { useTimePickerContext } from '../../contexts';

import { MinutesLitProps } from './MinutesList.types';

const MinutesList: FC<MinutesLitProps> = ({
  minutes,
  scrollBehavior,
  onClose,
}) => {
  const wrapperRef = useRef<HTMLUListElement>(null);
  const initialMinutesRef = useRef<number>(minutes);
  const { isTyping, onSelectMinute } = useTimePickerContext();

  // Scroll on initial mount
  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (wrapper) {
      const formattedMinutes = `0${initialMinutesRef.current}`.slice(-2);
      const item = wrapper.querySelector(
        `[data-value="${formattedMinutes}"]`,
      ) as HTMLUListElement;

      item?.scrollIntoView({
        behavior: scrollBehavior,
        block: 'center',
      });
    }
  }, [scrollBehavior]);

  // Scroll when minutes value changes (only while typing in input)
  useEffect(() => {
    if (!isTyping) return;

    const wrapper = wrapperRef.current;

    if (wrapper) {
      const formattedMinutes = `0${minutes}`.slice(-2);
      const item = wrapper.querySelector(
        `[data-value="${formattedMinutes}"]`,
      ) as HTMLUListElement;

      item?.scrollIntoView({
        behavior: 'instant',
        block: 'center',
      });
    }
  }, [minutes, isTyping]);

  const handleSelectMinute = useCallback(
    (index: number, event: MouseEvent<HTMLButtonElement>) => {
      onSelectMinute(index);
      event.currentTarget?.blur();
    },
    [onSelectMinute],
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
        nextIndex = (currentIndex + 1) % 60;
      } else if (
        event.key === 'ArrowUp' ||
        (event.key === 'Tab' && event.shiftKey)
      ) {
        event.preventDefault();
        nextIndex = (currentIndex - 1 + 60) % 60;
      } else if (event.key === 'Enter') {
        event.preventDefault();
        // Select the minute
        onSelectMinute(currentIndex);
        // If onClose is provided (24h format), close the list
        if (onClose) {
          onClose();
          return;
        }
        // Otherwise move focus to meridian list (AM/PM)
        const meridianList = document.querySelector('[aria-label="meridian"]');
        const activeMeridianButton = meridianList?.querySelector(
          'li[data-active="true"] button',
        ) as HTMLButtonElement;
        activeMeridianButton?.focus();
        return;
      }

      if (nextIndex !== currentIndex) {
        const nextButton = buttons[nextIndex] as HTMLButtonElement;
        nextButton?.focus();
      }
    },
    [onSelectMinute, onClose],
  );

  return (
    <ul
      ref={wrapperRef}
      className={cn(ulVariants())}
      aria-label="minutes"
      role="listbox"
    >
      {Array.from({ length: 60 }, (_, index) => {
        const isActive = minutes === index;

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
              onClick={(event) => handleSelectMinute(index, event)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {`0${index}`.slice(-2)}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

MinutesList.displayName = 'MinutesList';

export { MinutesList };
