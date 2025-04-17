'use client';
import { FC, useCallback, useState } from 'react';
import { DayPicker as DatepickerPrimitive } from 'react-day-picker';

import { cn } from '@/utils';

import { DatepickerProps } from './Datepicker.types';
import { datepickerVariants } from './Datepicker.variants';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const Datepicker: FC<DatepickerProps> = ({
  className,
  showOutsideDays = true,
  // mode,
  onSelect,
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
    <DatepickerPrimitive
      className={cn(datepickerVariants({ className }))}
      animate
      mode="single"
      selected={selected}
      onSelect={handleSelect}
      showOutsideDays={showOutsideDays}
      classNames={{
        table: 'w-full border-collapse space-y-1',
        nav: 'absolute right-5 top-4 flex justify-center items-center gap-3',
        months: 'flex flex-col w-max relative px-5 py-4 rounded-lg shadow-md',
        month: 'space-y-4',
        weekdays: 'text-slate-500',
        weeks: 'text-slate-700',
        outside: 'text-slate-400',
        day_button:
          'h-8 w-8 p-0 font-normal aria-selected:opacity-100 font-semibold hover:rounded-full cursor-pointer rounded-full',
        selected:
          'bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-full',
        // day: 'text-slate-700',
        // day: cn(
        //   'relative text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md',
        //   mode === 'range'
        //     ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
        //     : '[&:has([aria-selected])]:rounded-md',
        // ),
        // caption: 'flex justify-center pt-1 relative items-center',
        // caption_label: 'text-sm font-medium',
        // nav_button: cn(
        //   // buttonVariants({ variant: 'outline' }),
        //   'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        // ),
        // nav_button_previous: 'absolute right-1',
        // nav_button_next: 'absolute right-1',
        // head_row: 'flex',
        // head_cell:
        //   'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
        // row: 'flex w-full mt-2',
        // day_range_start: 'day-range-start',
        // day_range_end: 'day-range-end',
        // day_selected:
        //   'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        // day_today: 'bg-accent text-accent-foreground',
        // day_outside:
        //   'text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground',
        // disabled: 'text-muted-foreground opacity-50',
        // day_range_middle:
        //   'aria-selected:bg-accent aria-selected:text-accent-foreground',
        // day_hidden: 'invisible',
        // ...classNames,
      }}
      components={{
        Chevron: ({ className, ...props }) => {
          if (props.orientation === 'left') {
            return (
              <ChevronLeftIcon
                className={cn('h-4 w-4 text-slate-500', className)}
                {...props}
              />
            );
          }

          return (
            <ChevronRightIcon
              className={cn('h-4 w-4 text-slate-500', className)}
              {...props}
            />
          );
        },
      }}
    />
  );
};

Datepicker.displayName = 'Datepicker';

export { Datepicker };
