'use client';
import { FC, useCallback, useState } from 'react';
import { DayPicker as DatePickerPrimitive } from 'react-day-picker';

import { cn } from '@/utils';

import { DatePickerProps } from './DatePicker.types';
import { datePickerVariants } from './DatePicker.variants';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import 'react-day-picker/style.css';

const DatePicker: FC<DatePickerProps> = ({
  className,
  showOutsideDays = true,
  animate = true,
  onSelect,
  ...delegated
}) => {
  const [selected, setSelected] = useState<Date>();

  const handleSelect = useCallback(
    (date?: Date) => {
      if (date) {
        setSelected(date);
        onSelect?.(date);
      }
    },
    [onSelect],
  );

  return (
    <DatePickerPrimitive
      className={cn(datePickerVariants({ className }))}
      animate={animate}
      mode="single"
      selected={selected}
      onSelect={handleSelect}
      showOutsideDays={showOutsideDays}
      role="dialog"
      aria-label="Datepicker"
      classNames={{
        chevron:
          'cursor-pointer text-slate-500 w-[20px] h-[20px] text-slate-500 w-4 h-4',
        day_button:
          'h-full w-full aria-selected:opacity-100 font-semibold hover:rounded-full cursor-pointer rounded-full',
        day: 'w-[30px] h-[30px] text-center text-sm',
        month_caption: 'text-slate-700 font-semibold text-sm pl-1',
        months:
          'flex flex-col w-max relative px-5 py-4 rounded-lg shadow-md px-6 py-4',
        nav: 'absolute right-4 top-2 flex justify-center items-center',
        outside: 'text-slate-400',
        selected:
          'bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-full',
        table: 'w-full',
        weekdays: 'text-slate-500',
        weeks: 'text-slate-700',
        weekday: 'font-semibold text-sm uppercase',
        today: 'text-blue-600 data-[selected=true]:text-white',
        month_grid:
          '[&>thead]:table-header-group [&>thead]:relative [&>thead]:before:block [&>thead]:before:content-[" "] [&>thead]:before:h-4 [&>thead]:after:block [&>thead]:after:content-[" "] [&>thead]:after:h-4',
      }}
      components={{
        Chevron: ({ className, ...props }) => {
          if (props.orientation === 'left') {
            return <ChevronLeftIcon className={cn(className)} {...props} />;
          }

          return <ChevronRightIcon className={cn(className)} {...props} />;
        },
      }}
      {...delegated}
    />
  );
};

DatePicker.displayName = 'DatePicker';

export { DatePicker };
