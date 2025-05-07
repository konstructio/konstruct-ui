import { FC, useCallback, useEffect, useMemo, useRef } from 'react';

import { cn } from '@/utils';

import { getFormattedTime, getHours, getMinutes } from '../../utils';

import { HoursProps, ListProps, MinutesProps } from './List.types';

const Minutes: FC<MinutesProps> = ({
  minutes,
  scrollBehavior,
  onSelectMinute,
}) => {
  const wrapperRef = useRef<HTMLUListElement>(null);
  const minutesRef = useRef<number>(minutes);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (wrapper) {
      const minutes = `0${minutesRef.current}`.slice(-2);
      const item = wrapper.querySelector(
        `[data-value="${minutes}"]`,
      ) as HTMLUListElement;

      item?.scrollIntoView({
        behavior: scrollBehavior,
        block: 'center',
      });
    }
  }, [scrollBehavior]);

  return (
    <ul
      ref={wrapperRef}
      className="snap-y snap-mandatory overflow-y-scroll scrollbar-none"
    >
      {Array.from({ length: 60 }, (_, index) => (
        <li
          key={index}
          className={cn(
            'w-[60px] h-[40px] snap-start rounded transition-all focus-within:outline-2 focus-within:outline-blue-200',
            minutes === index && 'bg-blue-600 text-white',
          )}
          data-value={`0${index}`.slice(-2)}
        >
          <button
            role="button"
            className="flex items-center justify-center cursor-pointer w-full h-full px-6 py-3"
            onClick={() => onSelectMinute(index)}
          >
            {`0${index}`.slice(-2)}
          </button>
        </li>
      ))}
    </ul>
  );
};

const Hours: FC<HoursProps> = ({
  format,
  hours,
  scrollBehavior,
  onSelectHour,
}) => {
  const wrapperRef = useRef<HTMLUListElement>(null);
  const newHours = format === '12' ? (hours >= 12 ? hours - 12 : hours) : hours;
  const isFirstRender = useRef(true);

  const handleSelectHour = useCallback(
    (index: number) => {
      if (format === '12') {
        onSelectHour(index + 1);
      } else {
        onSelectHour(index);
      }
    },
    [format, onSelectHour],
  );

  useEffect(() => {
    if (isFirstRender.current) {
      const wrapper = wrapperRef.current;

      if (wrapper) {
        const item = wrapper.querySelector(
          `[data-value="${`0${newHours}`.slice(-2)}"]`,
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
    return (
      <ul
        ref={wrapperRef}
        className="snap-y snap-mandatory overflow-y-scroll scrollbar-none"
      >
        {Array.from({ length: 12 }, (_, index) => (
          <li
            key={index}
            className={cn(
              'w-[60px] h-[40px] snap-start rounded transition-all focus-within:outline-2 focus-within:outline-blue-200',
              newHours - 1 === index && 'bg-blue-600 text-white',
            )}
            data-value={`0${index + 1}`.slice(-2)}
          >
            <button
              role="button"
              className="flex items-center justify-center cursor-pointer w-full h-full px-6 py-3"
              onClick={() => handleSelectHour(index)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul
      ref={wrapperRef}
      className="snap-y snap-mandatory overflow-y-scroll scrollbar-none"
    >
      {Array.from({ length: 24 }, (_, index) => (
        <li
          key={index}
          className={cn(
            'w-[60px] h-[40px] snap-start rounded transition-all focus-within:outline-2 focus-within:outline-blue-200',
            hours === index && 'bg-blue-600 text-white',
          )}
          data-value={`${index + 1}`.slice(-2)}
        >
          <button
            role="button"
            className="flex items-center justify-center cursor-pointer w-full h-full px-6 py-3"
            onClick={() => handleSelectHour(index)}
          >
            {index}
          </button>
        </li>
      ))}
    </ul>
  );
};

export const List: FC<ListProps> = ({
  isOpen,
  format,
  time,
  scrollBehavior,
  onSelectHour,
  onSelectMinute,
}) => {
  const selectedHours = useMemo(() => getHours(time), [time]);
  const selectedMinutes = useMemo(() => getMinutes(time), [time]);

  const isAM = useMemo(() => {
    if (format === '12') {
      return time.getHours() <= 12;
    }

    return time.getHours() >= 12;
  }, [format, time]);

  const handleSelectAMOrPM = useCallback(
    (meridiem: 'AM' | 'PM') => {
      if (meridiem === 'AM') {
        return onSelectHour(
          time.getHours() <= 12 ? time.getHours() : time.getHours() - 12,
        );
      }

      return onSelectHour(
        time.getHours() >= 12 ? time.getHours() : time.getHours() + 12,
      );
    },
    [onSelectHour, time],
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="listbox"
      aria-activedescendant={getFormattedTime(time, format)}
      className={cn(
        'flex gap-1.5 p-2 rounded-md shadow w-full max-h-[216px] absolute mt-1',
      )}
    >
      <Hours
        format={format}
        hours={selectedHours}
        scrollBehavior={scrollBehavior}
        onSelectHour={onSelectHour}
      />

      <Minutes
        minutes={selectedMinutes}
        scrollBehavior={scrollBehavior}
        onSelectMinute={onSelectMinute}
      />

      {format === '12' ? (
        <ul className="flex items-center justify-center flex-col">
          <li
            className={cn(
              'flex items-center justify-center rounded w-[60px] h-[40px] transition-all',
              isAM && 'bg-blue-600 text-white',
            )}
          >
            <button
              type="button"
              className="cursor-pointer w-full h-full"
              onClick={() => handleSelectAMOrPM('AM')}
            >
              AM
            </button>
          </li>
          <li
            className={cn(
              'flex items-center justify-center w-[60px] h-[40px] rounded transition-all',
              !isAM && 'bg-blue-600 text-white',
            )}
          >
            <button
              type="button"
              className="cursor-pointer w-full h-full"
              onClick={() => handleSelectAMOrPM('PM')}
            >
              PM
            </button>
          </li>
        </ul>
      ) : undefined}
    </div>
  );
};
