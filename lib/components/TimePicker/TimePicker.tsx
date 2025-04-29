'use client';
import { FC, useState } from 'react';

import { TimePickerProps } from './TimePicker.types';

const MINUTES_OPTIONS = Array.from({ length: 60 }, (_, index) => (
  <li key={index} className="px-6 py-3 flex items-center justify-center">
    {`0${index}`.slice(-2)}
  </li>
));

const buildHoursOptions = (format: '12' | '24') => {
  if (format === '12') {
    return Array.from({ length: 12 }, (_, index) => (
      <li key={index} className="px-6 py-3 flex items-center justify-center">
        {index + 1}
      </li>
    ));
  }

  return Array.from({ length: 24 }, (_, index) => (
    <li key={index} className="px-6 py-3 flex items-center justify-center">
      {index}
    </li>
  ));
};

export const TimePicker: FC<TimePickerProps> = ({ format = '12' }) => {
  const [time] = useState('12:00 PM');

  return (
    <div>
      <button
        aria-labelledby="time-label"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-controls="time-options"
      >
        {time}
      </button>
      <div
        id="time-options"
        role="listbox"
        aria-activedescendant={time}
        className="flex gap-1.5 p-2 rounded-md shadow w-fit"
      >
        <ul>{buildHoursOptions(format)}</ul>

        <ul>{MINUTES_OPTIONS}</ul>

        {format === '12' ? (
          <ul>
            <li className="px-6 py-3 flex items-center justify-center">AM</li>
            <li className="px-6 py-3 flex items-center justify-center">PM</li>
          </ul>
        ) : undefined}
      </div>
    </div>
  );
};
