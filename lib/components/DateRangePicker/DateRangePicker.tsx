import { FC } from 'react';

import { cn } from '@/utils';

import { Typography } from '../Typography/Typography';
import { CalendarPanel, DateTimeInputs, PresetPanel } from './components';
import { DateRangePickerProvider } from './contexts';
import { DateRangePickerProps } from './DateRangePicker.types';
import {
  dateRangePickerVariants,
  rightPanelVariants,
} from './DateRangePicker.variants';

/**
 * A date range picker component that allows selecting a range of dates
 * with optional time inputs and preset options.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <DateRangePicker
 *   onRangeChange={(range) => console.log(range)}
 * />
 *
 * // With default values
 * <DateRangePicker
 *   defaultRange={{ from: new Date(), to: new Date() }}
 *   defaultPreset="last-7-days"
 *   onRangeChange={handleRangeChange}
 * />
 *
 * // With 12-hour time format
 * <DateRangePicker
 *   timeFormat="12"
 *   onRangeChange={handleRangeChange}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-daterangepicker--docs Storybook}
 */
const DateRangePicker: FC<DateRangePickerProps> = ({
  className,
  defaultRange,
  defaultTime,
  defaultPreset = 'custom',
  onRangeChange,
  timeFormat = '24',
  theme,
  disabled = false,
  label,
  isRequired,
  animationDuration = 500,
}) => {
  return (
    <DateRangePickerProvider
      defaultRange={defaultRange}
      defaultTime={defaultTime}
      defaultPreset={defaultPreset}
      timeFormat={timeFormat}
      disabled={disabled}
      animationDuration={animationDuration}
      onRangeChange={onRangeChange}
    >
      <div className="flex flex-col gap-2" data-theme={theme}>
        {label ? (
          <Typography
            component="label"
            variant="labelLarge"
            className={cn(
              'cursor-pointer',
              'flex',
              'gap-1',
              'text-sm',
              'font-medium',
            )}
          >
            {label}
            {isRequired && (
              <Typography
                component="span"
                className={cn(
                  'text-red-600',
                  'dark:text-red-500',
                  'text-xs',
                  'mt-0.5',
                )}
              >
                *
              </Typography>
            )}
          </Typography>
        ) : null}

        <div
          className={cn(dateRangePickerVariants({ className }), 'gap-4')}
          role="group"
          aria-label={label || 'Date range picker'}
        >
          <PresetPanel />
          <div className={cn(rightPanelVariants())}>
            <DateTimeInputs />
            <CalendarPanel />
          </div>
        </div>
      </div>
    </DateRangePickerProvider>
  );
};

DateRangePicker.displayName = 'KonstructDateRangePicker';

export { DateRangePicker };
