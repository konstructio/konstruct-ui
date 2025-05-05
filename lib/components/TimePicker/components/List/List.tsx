import { FC, useEffect, useMemo, useRef } from 'react';

import { cn } from '@/utils';

import { getFormattedTime, getHours, getMinutes } from '../../utils';

import { HoursProps, ListProps, MinutesProps } from './List.types';

const Minutes: FC<MinutesProps> = ({ minutes, scrollBehavior }) => {
  const wrapperRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (wrapper) {
      const item = wrapper.querySelector(
        `[data-value="${minutes}"]`,
      ) as HTMLUListElement;

      item?.scrollIntoView({
        behavior: scrollBehavior,
        block: 'start',
      });
    }
  }, [minutes, scrollBehavior]);

  return (
    <ul
      ref={wrapperRef}
      className="snap-y snap-mandatory overflow-y-scroll scrollbar-none"
    >
      {Array.from({ length: 60 }, (_, index) => (
        <li
          key={index}
          className={cn(
            'px-6 py-3 flex items-center justify-center w-[60px] h-[40px] snap-start rounded',
            minutes === index && 'bg-blue-600 text-white',
          )}
          data-value={`0${index}`.slice(-2)}
        >
          <button role="button" className="cursor-pointer">
            {`0${index}`.slice(-2)}
          </button>
        </li>
      ))}
    </ul>
  );
};

const Hours: FC<HoursProps> = ({ format, hours, scrollBehavior }) => {
  const wrapperRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (wrapper) {
      const item = wrapper.querySelector(
        `[data-value="${hours}"]`,
      ) as HTMLUListElement;

      item?.scrollIntoView({
        behavior: scrollBehavior,
        block: 'start',
      });
    }
  }, [hours, scrollBehavior]);

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
              'px-6 py-3 flex items-center justify-center w-[60px] h-[40px] snap-start rounded cursor-pointer',
              hours === index + 1 && 'bg-blue-600 text-white',
            )}
            data-value={`0${index + 1}`.slice(-2)}
          >
            <button role="button" className="cursor-pointer">
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
            'px-6 py-3 flex items-center justify-center w-[60px] h-[40px] snap-start cursor-pointer',
            hours === index + 1 && 'bg-blue-600 text-white',
          )}
          data-value={`0${index + 1}`.slice(-2)}
        >
          <button role="button" className="cursor-pointer">
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
}) => {
  const isAM = useMemo(() => time.getHours() >= 12, [time]);
  const selectedHours = useMemo(() => getHours(time), [time]);
  const selectedMinutes = useMemo(() => getMinutes(time), [time]);

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
      />

      <ul className="snap-y snap-mandatory overflow-y-scroll scrollbar-none">
        <Minutes minutes={selectedMinutes} scrollBehavior={scrollBehavior} />
      </ul>

      {format === '12' ? (
        <ul className="flex items-center justify-center flex-col">
          <li
            className={cn(
              'px-6 py-3 flex items-center justify-center rounded w-[60px] h-[40px]',
              isAM && 'bg-blue-600 text-white',
            )}
          >
            AM
          </li>
          <li
            className={cn(
              'px-6 py-3 flex items-center justify-center w-[60px] h-[40px] rounded',
              !isAM && 'bg-blue-600 text-white',
            )}
          >
            PM
          </li>
        </ul>
      ) : undefined}
    </div>
  );
};
