import { FC, useCallback, useState } from 'react';
import { DayPicker as DatePickerPrimitive } from 'react-day-picker';

import { cn } from '@/utils';

import { DatePickerProps } from './DatePicker.types';
import { datePickerVariants } from './DatePicker.variants';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import 'react-day-picker/style.css';

/**
 * A date picker component built on react-day-picker.
 * Allows single date selection with calendar navigation.
 *
 * @example
 * ```tsx
 * // Basic date picker
 * <DatePicker
 *   defaultSelected={new Date()}
 *   onSelect={(date) => console.log(date)}
 * />
 *
 * // With custom styling
 * <DatePicker
 *   defaultSelected={startDate}
 *   onSelect={setStartDate}
 *   monthsClassName="custom-months"
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-datepicker--docs Storybook}
 */
const DatePicker: FC<DatePickerProps> = ({
  className,
  showOutsideDays = true,
  animate = true,
  arrowClassName,
  monthsClassName,
  defaultSelected,
  onSelect,
  ...delegated
}) => {
  const [selected, setSelected] = useState<Date | undefined>(
    () => defaultSelected,
  );

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
        chevron: cn(
          'cursor-pointer',
          'text-slate-500',
          'w-5',
          'h-5',
          'text-slate-500',
          'w-4',
          'h-4',
          'dark:text-metal-200',
        ),
        day_button: cn(
          'h-[30px]',
          'aria-selected:opacity-100',
          'font-semibold',
          'hover:rounded-full',
          'cursor-pointer',
          'rounded-full',
          'w-[30px]',
        ),
        day: 'text-center text-sm leading-5',
        month_caption: cn(
          'text-slate-700',
          'font-semibold',
          'text-sm',
          'pl-1',
          'h-8',
          'flex',
          'items-center',
          'dark:text-white',
        ),
        months: cn(
          'flex',
          'flex-col',
          'relative',
          'px-5',
          'py-4',
          'rounded-lg',
          'shadow-md',
          'px-6',
          'py-4',
          'w-[307px]',
          'justify-center',
          'items-center',
          'border',
          'border-transparent',
          'dark:bg-metal-800',
          'dark:border-metal-700',
          monthsClassName,
        ),
        month: 'flex flex-col gap-4',
        nav: cn(
          'absolute',
          'right-4',
          'top-3.5',
          'flex',
          'justify-center',
          'items-center',
          'gap-1',
          arrowClassName,
        ),
        outside: 'text-slate-400 dark:text-metal-500',
        selected: cn(
          '[&>button]:bg-blue-600',
          '[&>button]:text-white',
          '[&>button]:hover:bg-blue-700',
          '[&>button]:transition-all',
          '[&>button]:duration-300',
          '[&>button]:rounded-full',
          'dark:[&>button]:bg-aurora-500',
          'dark:[&>button]:hover:bg-aurora-500',
          'dark:[&>button]:text-metal-900',
        ),
        table: 'w-full',
        weekdays: 'text-slate-500 dark:text-metal-300',
        weeks: cn(
          'text-slate-700',
          '[&>tr>td]:border-transparent',
          '[&>tr>td]:border-r-[8px]',
          '[&>tr>td]:last:border-r-0',
          'dark:text-white',
        ),
        weekday: 'font-semibold text-sm uppercase text-sm',
        today:
          'text-blue-600 dark:text-aurora-500 data-[selected=true]:text-white',
        month_grid: cn(
          '[&>thead]:table-header-group',
          '[&>thead]:relative',
          '[&>thead]:after:block',
          '[&>thead]:after:content-[" "]',
          '[&>thead]:after:h-4',
        ),
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

DatePicker.displayName = 'KonstructDatePicker';

export { DatePicker };
