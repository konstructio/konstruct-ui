import { FC, lazy, Suspense } from 'react';

import { cn } from '@/utils';

import { Props } from './DatePicker.types';
import { datePickerVariants } from './DatePicker.variants';

const DatePickerContent = lazy(() =>
  import('./components/DatePickerContent/DatePickerContent').then((module) => ({
    default: module.DatePickerContent,
  })),
);

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
const DatePicker: FC<Props> = (props) => (
  <Suspense
    fallback={
      <div
        className={cn(datePickerVariants({ className: props.className }))}
        aria-busy="true"
      >
        <div
          className={cn(
            'w-[307px]',
            'min-h-[296px]',
            'rounded-lg',
            'shadow-md',
            'border',
            'border-transparent',
            'dark:bg-metal-800',
            'dark:border-metal-700',
            props.monthsClassName,
          )}
        />
      </div>
    }
  >
    <DatePickerContent {...props} />
  </Suspense>
);

DatePicker.displayName = 'KonstructDatePicker';

export { DatePicker };
