import { FC, MouseEvent, useCallback, useEffect, useRef } from 'react';

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
  const isFirstRender = useRef(true);
  const { format, onSelectHour } = useTimePickerContext();
  const newHours = format === '12' ? (hours >= 12 ? hours - 12 : hours) : hours;

  const handleSelectHour = useCallback(
    (event: MouseEvent<HTMLButtonElement>, hour: number) => {
      event.currentTarget?.blur();
      onSelectHour(hour);
    },
    [onSelectHour],
  );

  useEffect(() => {
    if (isFirstRender.current) {
      const wrapper = wrapperRef.current;
      const time = newHours === 0 && format === '12' ? 12 : newHours;

      if (wrapper) {
        const item = wrapper.querySelector(
          `[data-value="${`0${time}`.slice(-2)}"]`,
        ) as HTMLUListElement;

        item?.scrollIntoView({
          behavior: scrollBehavior,
          block: 'center',
        });
      }

      isFirstRender.current = false;
    }
  }, [format, newHours, scrollBehavior]);

  if (format === '12') {
    const dataActive = newHours === 0 ? 12 : newHours;

    return (
      <ul ref={wrapperRef} className={cn(ulVariants())} aria-label="hours">
        {Array.from({ length: 12 }, (_, index) => (
          <li
            key={index}
            className={cn(liVariants())}
            data-value={`0${index + 1}`.slice(-2)}
            data-active={dataActive - 1 === index}
          >
            <button
              role="button"
              className={cn(buttonVariants())}
              onClick={(event) => handleSelectHour(event, index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul ref={wrapperRef} className={cn(ulVariants())} aria-label="hours">
      {Array.from({ length: 24 }, (_, index) => (
        <li
          key={index}
          className={cn(liVariants())}
          data-value={`0${index}`.slice(-2)}
          data-active={hours === index}
        >
          <button
            role="button"
            className={cn(buttonVariants())}
            onClick={(event) => handleSelectHour(event, index)}
          >
            {index}
          </button>
        </li>
      ))}
    </ul>
  );
};

HoursList.displayName = 'HoursList';

export { HoursList };
