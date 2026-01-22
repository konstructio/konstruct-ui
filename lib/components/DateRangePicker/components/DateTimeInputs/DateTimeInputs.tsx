import { FC, useCallback, useState, useEffect } from 'react';

import { cn } from '@/utils';

import { Input } from '../../../Input/Input';
import { Typography } from '../../../Typography/Typography';
import { useDateRangePicker } from '../../contexts';
import { DateTimeInputsProps } from './DateTimeInputs.types';
import {
  dateTimeInputsVariants,
  dateTimeGroupVariants,
  dateInputWrapperVariants,
  timeInputWrapperVariants,
  inputLabelVariants,
} from '../../DateRangePicker.variants';
import {
  formatDateToDisplayString,
  formatTimeToString,
  parseDisplayDateString,
  parseTimeString,
  isValidTimeString,
} from '../../utils';

export const DateTimeInputs: FC<DateTimeInputsProps> = ({ className }) => {
  const { range, time, timeFormat, disabled, setRange, setTime } =
    useDateRangePicker();

  const [startDateValue, setStartDateValue] = useState(() =>
    formatDateToDisplayString(range.from),
  );
  const [endDateValue, setEndDateValue] = useState(() =>
    formatDateToDisplayString(range.to),
  );
  const [startTimeValue, setStartTimeValue] = useState(() =>
    formatTimeToString(time.startTime, timeFormat),
  );
  const [endTimeValue, setEndTimeValue] = useState(() =>
    formatTimeToString(time.endTime, timeFormat),
  );

  const [startDateError, setStartDateError] = useState<string | undefined>();
  const [endDateError, setEndDateError] = useState<string | undefined>();
  const [startTimeError, setStartTimeError] = useState<string | undefined>();
  const [endTimeError, setEndTimeError] = useState<string | undefined>();

  // Sync external range changes to input values
  useEffect(() => {
    setStartDateValue(formatDateToDisplayString(range.from));
    setEndDateValue(formatDateToDisplayString(range.to));
  }, [range.from, range.to]);

  useEffect(() => {
    setStartTimeValue(formatTimeToString(time.startTime, timeFormat));
    setEndTimeValue(formatTimeToString(time.endTime, timeFormat));
  }, [time.startTime, time.endTime, timeFormat]);

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
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setStartTimeValue(value);

      if (value === '') {
        setStartTimeError(undefined);
        setTime({ ...time, startTime: undefined });
        return;
      }

      if (isValidTimeString(value, timeFormat)) {
        setStartTimeError(undefined);
        const parsed = parseTimeString(value, timeFormat);
        setTime({ ...time, startTime: parsed });
      } else {
        setStartTimeError('Invalid time');
      }
    },
    [time, timeFormat, setTime],
  );

  const handleEndTimeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEndTimeValue(value);

      if (value === '') {
        setEndTimeError(undefined);
        setTime({ ...time, endTime: undefined });
        return;
      }

      if (isValidTimeString(value, timeFormat)) {
        setEndTimeError(undefined);
        const parsed = parseTimeString(value, timeFormat);
        setTime({ ...time, endTime: parsed });
      } else {
        setEndTimeError('Invalid time');
      }
    },
    [time, timeFormat, setTime],
  );

  return (
    <div className={cn(dateTimeInputsVariants({ className }))}>
      {/* Start date/time group */}
      <div className={cn(dateTimeGroupVariants())}>
        <div className={cn(dateInputWrapperVariants())}>
          <Typography component="label" className={cn(inputLabelVariants())}>
            Start date
          </Typography>
          <Input
            placeholder="6 February 2025"
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
        <div className={cn(timeInputWrapperVariants())}>
          <Typography component="label" className={cn(inputLabelVariants())}>
            Time
          </Typography>
          <Input
            placeholder="00:00"
            value={startTimeValue}
            onChange={handleStartTimeChange}
            error={startTimeError}
            disabled={disabled}
            className={cn(
              'h-10',
              'text-sm',
              'text-slate-800',
              'dark:text-white',
              'border-gray-300',
              'dark:border-metal-600',
            )}
            aria-label="Start time"
          />
        </div>
      </div>

      {/* End date/time group */}
      <div className={cn(dateTimeGroupVariants())}>
        <div className={cn(dateInputWrapperVariants())}>
          <Typography component="label" className={cn(inputLabelVariants())}>
            End date
          </Typography>
          <Input
            placeholder="6 February 2025"
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
        <div className={cn(timeInputWrapperVariants())}>
          <Typography component="label" className={cn(inputLabelVariants())}>
            Time
          </Typography>
          <Input
            placeholder="00:00"
            value={endTimeValue}
            onChange={handleEndTimeChange}
            error={endTimeError}
            disabled={disabled}
            className={cn(
              'h-10',
              'text-sm',
              'text-slate-800',
              'dark:text-white',
              'border-gray-300',
              'dark:border-metal-600',
            )}
            aria-label="End time"
          />
        </div>
      </div>
    </div>
  );
};

DateTimeInputs.displayName = 'DateRangePickerDateTimeInputs';
