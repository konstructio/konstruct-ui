import { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { cn } from '@/utils';

import { Input } from '../../../Input/Input';
import { TimePicker } from '../../../TimePicker/TimePicker';
import { Typography } from '../../../Typography/Typography';
import { useDateRangePicker } from '../../contexts';
import { formatDateToDisplayString, parseDisplayDateString } from '../../utils';

import { DateTimeInputsProps } from './DateTimeInputs.types';
import {
  dateInputWrapperVariants,
  dateTimeGroupVariants,
  dateTimeInputsVariants,
  inputLabelVariants,
  timeInputWrapperVariants,
} from './DateTimeInputs.variants';

const combineDateAndTime = (date?: Date, time?: Date): string => {
  if (!date) return '';

  const result = new Date(date);

  if (time) {
    result.setHours(time.getHours(), time.getMinutes(), time.getSeconds());
  }

  return result.toISOString();
};

export const DateTimeInputs: FC<DateTimeInputsProps> = ({ className }) => {
  const {
    range,
    time,
    timeFormat,
    showTime,
    name,
    disabled,
    setRange,
    setTime,
  } = useDateRangePicker();

  const [startDateValue, setStartDateValue] = useState(() =>
    formatDateToDisplayString(range.from),
  );
  const [endDateValue, setEndDateValue] = useState(() =>
    formatDateToDisplayString(range.to),
  );

  const [startDateError, setStartDateError] = useState<string | undefined>();
  const [endDateError, setEndDateError] = useState<string | undefined>();

  // Sync external range changes to input values
  useEffect(() => {
    setStartDateValue(formatDateToDisplayString(range.from));
    setEndDateValue(formatDateToDisplayString(range.to));
  }, [range.from, range.to]);

  const handleStartDateChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setStartDateValue(value);

      if (value === '') {
        setStartDateError(undefined);
        setRange({ ...range, from: undefined });
        return;
      }

      const parsed = parseDisplayDateString(value);
      if (parsed) {
        setStartDateError(undefined);
        setRange({ ...range, from: parsed });
      } else {
        setStartDateError('Invalid date');
      }
    },
    [range, setRange],
  );

  const handleEndDateChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEndDateValue(value);

      if (value === '') {
        setEndDateError(undefined);
        setRange({ ...range, to: undefined });
        return;
      }

      const parsed = parseDisplayDateString(value);
      if (parsed) {
        setEndDateError(undefined);
        setRange({ ...range, to: parsed });
      } else {
        setEndDateError('Invalid date');
      }
    },
    [range, setRange],
  );

  const handleStartTimeChange = useCallback(
    (newTime: Date) => {
      setTime({ ...time, startTime: newTime });
    },
    [time, setTime],
  );

  const handleEndTimeChange = useCallback(
    (newTime: Date) => {
      setTime({ ...time, endTime: newTime });
    },
    [time, setTime],
  );

  const startValue = useMemo(
    () => combineDateAndTime(range.from, time.startTime),
    [range.from, time.startTime],
  );

  const endValue = useMemo(
    () => combineDateAndTime(range.to, time.endTime),
    [range.to, time.endTime],
  );

  return (
    <div className={cn(dateTimeInputsVariants({ className }))}>
      {/* Start date/time group */}
      <div
        className={cn(dateTimeGroupVariants(), !showTime && 'w-auto flex-1')}
      >
        <div
          className={cn(
            dateInputWrapperVariants(),
            !showTime && 'w-full flex-1',
          )}
        >
          <Typography component="label" className={cn(inputLabelVariants())}>
            Start date
          </Typography>
          <Input
            value={startDateValue}
            onChange={handleStartDateChange}
            error={startDateError}
            disabled={disabled}
            className={cn(
              'h-10',
              'text-sm',
              'text-slate-800',
              'dark:text-white',
              'border-gray-300',
              'dark:border-metal-600',
            )}
            aria-label="Start date"
          />
        </div>
        {showTime && (
          <div className={cn(timeInputWrapperVariants())}>
            <Typography component="label" className={cn(inputLabelVariants())}>
              Time
            </Typography>
            <TimePicker
              mode="input"
              showList
              format={timeFormat}
              time={time.startTime}
              onChange={handleStartTimeChange}
              disabled={disabled}
              name="start time"
            />
          </div>
        )}
      </div>

      {/* End date/time group */}
      <div
        className={cn(dateTimeGroupVariants(), !showTime && 'w-auto flex-1')}
      >
        <div
          className={cn(
            dateInputWrapperVariants(),
            !showTime && 'w-full flex-1',
          )}
        >
          <Typography component="label" className={cn(inputLabelVariants())}>
            End date
          </Typography>
          <Input
            value={endDateValue}
            onChange={handleEndDateChange}
            error={endDateError}
            disabled={disabled}
            className={cn(
              'h-10',
              'text-sm',
              'text-slate-800',
              'dark:text-white',
              'border-gray-300',
              'dark:border-metal-600',
            )}
            aria-label="End date"
          />
        </div>
        {showTime && (
          <div className={cn(timeInputWrapperVariants())}>
            <Typography component="label" className={cn(inputLabelVariants())}>
              Time
            </Typography>
            <TimePicker
              mode="input"
              showList
              format={timeFormat}
              time={time.endTime}
              onChange={handleEndTimeChange}
              disabled={disabled}
              name="end time"
            />
          </div>
        )}
      </div>

      {/* Hidden inputs for form submission */}
      {name && (
        <>
          <input type="hidden" name={`${name}-start`} value={startValue} />
          <input type="hidden" name={`${name}-end`} value={endValue} />
        </>
      )}
    </div>
  );
};

DateTimeInputs.displayName = 'DateRangePickerDateTimeInputs';
