'use client';
import { ChevronDownIcon } from 'lucide-react';
import {
  FC,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';

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
  const [time, setTime] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleOpen = useCallback(() => setIsOpen((status) => !status), []);

  const timeFormatted = useMemo(
    () => getFormattedTime(time, format),
    [format, time],
  );

  const handleSelectHour = useCallback(
    (hour: number) => {
      const newTime = new Date(time);

      newTime.setHours(hour);
      setTime(newTime);
    },
    [time],
  );

  const handleSelectMinute = useCallback(
    (minute: number) => {
      const newTime = new Date(time);

      newTime.setMinutes(minute);
      setTime(newTime);
    },
    [time],
  );

  useEffect(() => {
    const controller = new AbortController();

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside, {
      signal: controller.signal,
    });

    document.addEventListener('keydown', handleKeyboard, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, []);

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
        onSelectHour={handleSelectHour}
        onSelectMinute={handleSelectMinute}
      />
    </div>
  );
};

TimePicker.displayName = 'TimePicker';

export { TimePicker };
