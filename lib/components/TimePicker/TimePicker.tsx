'use client';
import { FC, useMemo, useState } from 'react';

import { cn } from '@/utils';

import { TimePickerProps } from './TimePicker.types';

const buildMinutes = () =>
  Array.from({ length: 60 }, (_, index) => (
    <li
      key={index}
      className="px-6 py-3 flex items-center justify-center w-[60px] h-[40px] snap-start"
    >
      {`0${index}`.slice(-2)}
    </li>
  ));

const buildHoursOptions = (format: '12' | '24') => {
  if (format === '12') {
    return Array.from({ length: 12 }, (_, index) => (
      <li
        key={index}
        className="px-6 py-3 flex items-center justify-center w-[60px] h-[40px] snap-start"
      >
        {index + 1}
      </li>
    ));
  }

  return Array.from({ length: 24 }, (_, index) => (
    <li
      key={index}
      className="px-6 py-3 flex items-center justify-center w-[60px] h-[40px] snap-start"
    >
      {index}
    </li>
  ));
};

export const TimePicker: FC<TimePickerProps> = ({ format = '12' }) => {
  const [time] = useState<Date>(new Date());

  const timeFormatted = useMemo(() => {
    if (format === '12') {
      return `${time.getHours() % 12 || 12}:${time.getMinutes().toString().padStart(2, '0')} ${time.getHours() >= 12 ? 'PM' : 'AM'}`;
    }

    return `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`;
  }, [format, time]);

  const isAM = useMemo(() => time.getHours() >= 12, [time]);

  return (
    <div>
      <button
        aria-labelledby="time-label"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-controls="time-options"
      >
        {timeFormatted}
      </button>

      <div
        id="time-options"
        role="listbox"
        aria-activedescendant={timeFormatted}
        className="flex gap-1.5 p-2 rounded-md shadow w-fit max-h-[216px]"
      >
        <ul className="snap-y snap-mandatory overflow-y-scroll scrollbar-none">
          {buildHoursOptions(format)}
        </ul>

        <ul className="snap-y snap-mandatory overflow-y-scroll scrollbar-none">
          {buildMinutes()}
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
                'px-6 py-3 flex items-center justify-center w-[60px] h-[40px]',
                !isAM && 'bg-blue-600 text-white',
              )}
            >
              PM
            </li>
          </ul>
        ) : undefined}
      </div>
    </div>
  );
};
