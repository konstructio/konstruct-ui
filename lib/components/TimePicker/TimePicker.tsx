'use client';
import { ChevronDownIcon } from 'lucide-react';
import { FC, useCallback, useId, useMemo, useRef, useState } from 'react';

import { cn } from '@/utils';

import { TimePickerProps } from './TimePicker.types';
import { List } from './components';
import { getFormattedTime } from './utils';

const TimePicker: FC<TimePickerProps> = ({
  format = '12',
  scrollBehavior,
  name,
}) => {
  const id = useId();
  const [time] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleOpen = useCallback(() => setIsOpen((status) => !status), []);

  const timeFormatted = useMemo(
    () => getFormattedTime(time, format),
    [format, time],
  );

  return (
    <div
      ref={wrapperRef}
      className={cn(
        'relative w-max text-slate-800',
        format === '12' ? 'w-[208px]' : 'w-[140px]',
      )}
    >
      <button
        aria-labelledby="time-label"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-controls="time-options"
        className={cn(
          'border rounded p-[0.625rem] w-full flex items-center justify-between border-gray-300 cursor-pointer',
          isOpen && 'border-civo-primary',
        )}
        onClick={handleOpen}
      >
        {timeFormatted}
        <ChevronDownIcon
          className={cn(
            'w-4 h-4 transition-all text-gray-400',
            isOpen && 'rotate-180',
          )}
        />
      </button>

      <input
        type="hidden"
        name={name ?? `time-${id}`}
        value={timeFormatted}
        className="hidden"
      />

      <List
        isOpen={isOpen}
        format={format}
        time={time}
        scrollBehavior={scrollBehavior}
      />
    </div>
  );
};

TimePicker.displayName = 'TimePicker';

export { TimePicker };
