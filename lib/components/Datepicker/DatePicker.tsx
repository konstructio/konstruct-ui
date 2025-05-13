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
  arrowClassName,
  monthsClassName,
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
          'h-[30px] aria-selected:opacity-100 font-semibold hover:rounded-full cursor-pointer rounded-full w-[30px]',
        day: 'text-center text-[14px] leading-[20px]',
        month_caption:
          'text-slate-700 font-semibold text-sm pl-1 h-[32px] flex items-center',
        months: cn(
          'flex flex-col relative px-5 py-4 rounded-lg shadow-md px-6 py-4 w-[307px] justify-center items-center',
          monthsClassName,
        ),
        month: 'flex flex-col gap-4',
        nav: cn(
          'absolute right-4 top-3.5 flex justify-center items-center gap-[4px]',
          arrowClassName,
        ),
        outside: 'text-slate-400',
        selected:
          '[&>button]:bg-blue-600 [&>button]:text-white [&>button]:hover:bg-blue-700 [&>button]:transition-all [&>button]:duration-300 [&>button]:rounded-full',
        table: 'w-full',
        weekdays: 'text-slate-500',
        weeks:
          'text-slate-700 [&>tr>td]:border-transparent [&>tr>td]:border-r-[8px] [&>tr>td]:last:border-r-0',
        weekday: 'font-semibold text-sm uppercase text-sm',
        today: 'text-blue-600 data-[selected=true]:text-white',
        month_grid:
          '[&>thead]:table-header-group [&>thead]:relative [&>thead]:after:block [&>thead]:after:content-[" "] [&>thead]:after:h-4',
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
