import { FC, ReactNode } from 'react';

import { cn } from '@/utils';

import { Typography } from '@/components/Typography/Typography';
import { CalendarPanel, DateTimeInputs, PresetPanel } from './components';
import { DateRangePickerProvider, useDateRangePicker } from './contexts';
import { Props } from './DateRangePicker.types';
import { calculatePresetRange } from './utils';
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
/**
 * Wraps the inputs + calendar so `revealCalendarOnCustom` can hide them from
 * inside the provider: whether the active preset is the manual-selection entry
 * is only knowable from context.
 */
const RightPanel: FC<{
  reveal: boolean;
  children: ReactNode;
  className?: string;
}> = ({ reveal, children, className }) => {
  const { preset, presets } = useDateRangePicker();

  if (reveal) {
    const range = calculatePresetRange(preset, presets);

    // A preset that resolves to a window speaks for itself; only the
    // manual-selection entry needs the calendar.
    if (range.from || range.to) {
      return null;
    }
  }

  return <div className={className}>{children}</div>;
};

RightPanel.displayName = 'DateRangePickerRightPanel';

const DateRangePicker: FC<Props> = ({
  animationDuration = 500,
  className,
  defaultPreset = 'custom',
  defaultRange,
  defaultTime,
  disabled = false,
  isRequired,
  label,
  labelWrapperClassName,
  name,
  showTime = true,
  theme,
  timeFormat = '24',
  blockedDays,
  blockedMonths,
  minDate,
  maxDate,
  hideDisabledNavigation,
  showOutsideDays,
  navigationMode = 'independent',
  // CalendarPanel props
  ariaLabelCalendar,
  ariaLabelPrevMonth,
  ariaLabelNextMonth,
  ariaLabelPrevMonthStart,
  ariaLabelNextMonthStart,
  ariaLabelPrevMonthEnd,
  ariaLabelNextMonthEnd,
  // DateTimeInputs props
  labelStartDate,
  labelEndDate,
  labelTime,
  ariaLabelStartDate,
  ariaLabelEndDate,
  errorInvalidDate,
  errorDateNotAvailable,
  // PresetPanel props
  showPresets = true,
  presets,
  revealCalendarOnCustom = false,
  labelTimePeriod,
  ariaLabelTimePeriod,
  presetLabels,
  // Customizable class names
  classNames,
  // Callbacks
  onRangeChange,
  onDateChange,
  onPresetChange,
}) => (
  <DateRangePickerProvider
    defaultRange={defaultRange}
    defaultTime={defaultTime}
    defaultPreset={defaultPreset}
    presets={presets}
    timeFormat={timeFormat}
    showTime={showTime}
    name={name}
    disabled={disabled}
    animationDuration={animationDuration}
    blockedDays={blockedDays}
    blockedMonths={blockedMonths}
    minDate={minDate}
    maxDate={maxDate}
    hideDisabledNavigation={hideDisabledNavigation}
    showOutsideDays={showOutsideDays}
    navigationMode={navigationMode}
    onRangeChange={onRangeChange}
    onDateChange={onDateChange}
    onPresetChange={onPresetChange}
  >
    <div className="flex flex-col gap-2" data-theme={theme}>
      {label ? (
        <div className={cn(labelWrapperClassName)}>
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
        </div>
      ) : null}

      <div
        className={cn(
          dateRangePickerVariants({ className }),
          'gap-4',
          classNames?.container,
        )}
        role="group"
        aria-label={label || 'Date range picker'}
      >
        {showPresets && (
          <PresetPanel
            labelTimePeriod={labelTimePeriod}
            ariaLabelTimePeriod={ariaLabelTimePeriod}
            presetLabels={presetLabels}
            classNames={classNames?.presetPanel}
          />
        )}

        <RightPanel
          reveal={revealCalendarOnCustom}
          className={cn(rightPanelVariants(), classNames?.rightPanel)}
        >
          <DateTimeInputs
            labelStartDate={labelStartDate}
            labelEndDate={labelEndDate}
            labelTime={labelTime}
            ariaLabelStartDate={ariaLabelStartDate}
            ariaLabelEndDate={ariaLabelEndDate}
            errorInvalidDate={errorInvalidDate}
            errorDateNotAvailable={errorDateNotAvailable}
            classNames={classNames?.dateTimeInputs}
          />
          <CalendarPanel
            ariaLabelCalendar={ariaLabelCalendar}
            ariaLabelPrevMonth={ariaLabelPrevMonth}
            ariaLabelNextMonth={ariaLabelNextMonth}
            ariaLabelPrevMonthStart={ariaLabelPrevMonthStart}
            ariaLabelNextMonthStart={ariaLabelNextMonthStart}
            ariaLabelPrevMonthEnd={ariaLabelPrevMonthEnd}
            ariaLabelNextMonthEnd={ariaLabelNextMonthEnd}
            classNames={classNames?.calendarPanel}
          />
        </RightPanel>
      </div>
    </div>
  </DateRangePickerProvider>
);

DateRangePicker.displayName = 'KonstructDateRangePicker';

export { DateRangePicker };
