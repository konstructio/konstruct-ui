import {
  ChangeEvent,
  FC,
  FocusEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { cn } from '@/utils';

import { Input } from '../../../Input/Input';
import { TimePicker } from '../../../TimePicker/TimePicker';
import { Typography } from '../../../Typography/Typography';
import { useDateRangePicker } from '../../contexts';
import {
  formatDateToDisplayString,
  formatDateToString,
  parseDateString,
  isDateSelectable,
} from '../../utils';

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

/**
 * Auto-formats a date input value as MM/DD/YYYY while typing.
 * Inserts slashes after month (2 digits) and day (2 more digits).
 */
const autoFormatDateInput = (
  rawValue: string,
  previousValue: string,
): string => {
  // Detect if user is deleting
  const isDeleting = rawValue.length < previousValue.length;

  // Only allow digits and slashes, normalize multiple slashes to single
  let value = rawValue.replace(/[^0-9/]/g, '').replace(/\/+/g, '/');

  // Limit to max 10 chars (MM/DD/YYYY)
  value = value.slice(0, 10);

  // Don't auto-insert slashes when deleting
  if (isDeleting) {
    return value;
  }

  // Auto-insert slash after MM (2 digits, no slash yet)
  if (/^\d{2}$/.test(value)) {
    value = value + '/';
  }
  // Auto-insert slash after MM/DD (5 chars with first slash)
  else if (/^\d{2}\/\d{2}$/.test(value)) {
    value = value + '/';
  }

  return value;
};

export const DateTimeInputs: FC<DateTimeInputsProps> = ({
  className,
  labelStartDate = 'Start date',
  labelEndDate = 'End date',
  labelTime = 'Time',
  ariaLabelStartDate = 'Start date',
  ariaLabelEndDate = 'End date',
  errorInvalidDate = 'Invalid date',
  errorDateNotAvailable = 'Date is not available',
  classNames,
}) => {
  const {
    range,
    time,
    timeFormat,
    showTime,
    name,
    disabled,
    blockedDays,
    blockedMonths,
    minDate,
    maxDate,
    setRange,
    setTime,
  } = useDateRangePicker();

  const restrictions = useMemo(
    () => ({ blockedDays, blockedMonths, minDate, maxDate }),
    [blockedDays, blockedMonths, minDate, maxDate],
  );

  // Track if inputs are focused (typing mode)
  const isStartTypingRef = useRef(false);
  const isEndTypingRef = useRef(false);

  const [startDateValue, setStartDateValue] = useState(() =>
    formatDateToDisplayString(range.from),
  );
  const [endDateValue, setEndDateValue] = useState(() =>
    formatDateToDisplayString(range.to),
  );

  const [startDateError, setStartDateError] = useState<string | undefined>();
  const [endDateError, setEndDateError] = useState<string | undefined>();

  // Sync external range changes to input values (only when not typing)
  useEffect(() => {
    if (!isStartTypingRef.current) {
      setStartDateValue(formatDateToDisplayString(range.from));
    }
  }, [range.from]);

  useEffect(() => {
    if (!isEndTypingRef.current) {
      setEndDateValue(formatDateToDisplayString(range.to));
    }
  }, [range.to]);

  // Start date handlers
  const handleStartDateFocus = useCallback(() => {
    isStartTypingRef.current = true;
    setStartDateError(undefined);
    // Convert to editable format (MM/DD/YYYY)
    if (range.from) {
      setStartDateValue(formatDateToString(range.from));
    }
  }, [range.from]);

  const handleStartDateChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;
      const formattedValue = autoFormatDateInput(rawValue, startDateValue);
      setStartDateValue(formattedValue);
      setStartDateError(undefined);

      // Try to parse and update range as user types
      const parsed = parseDateString(formattedValue);
      if (parsed) {
        if (isDateSelectable(parsed, restrictions)) {
          setRange({ ...range, from: parsed });
        }
      }
    },
    [startDateValue, range, setRange, restrictions],
  );

  const handleStartDateBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      isStartTypingRef.current = false;
      const value = e.currentTarget.value.trim();

      if (value === '') {
        setStartDateError(undefined);
        setStartDateValue('');
        setRange({ ...range, from: undefined });
        return;
      }

      const parsed = parseDateString(value);
      if (!parsed) {
        setStartDateError(errorInvalidDate);
        return;
      }

      if (!isDateSelectable(parsed, restrictions)) {
        setStartDateError(errorDateNotAvailable);
        // Keep the typed value but show error
        return;
      }

      setStartDateError(undefined);
      setRange({ ...range, from: parsed });
      // Convert to display format
      setStartDateValue(formatDateToDisplayString(parsed));
    },
    [range, setRange, restrictions],
  );

  // End date handlers
  const handleEndDateFocus = useCallback(() => {
    isEndTypingRef.current = true;
    setEndDateError(undefined);
    // Convert to editable format (MM/DD/YYYY)
    if (range.to) {
      setEndDateValue(formatDateToString(range.to));
    }
  }, [range.to]);

  const handleEndDateChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;
      const formattedValue = autoFormatDateInput(rawValue, endDateValue);
      setEndDateValue(formattedValue);
      setEndDateError(undefined);

      // Try to parse and update range as user types
      const parsed = parseDateString(formattedValue);
      if (parsed) {
        if (isDateSelectable(parsed, restrictions)) {
          setRange({ ...range, to: parsed });
        }
      }
    },
    [endDateValue, range, setRange, restrictions],
  );

  const handleEndDateBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      isEndTypingRef.current = false;
      const value = e.currentTarget.value.trim();

      if (value === '') {
        setEndDateError(undefined);
        setEndDateValue('');
        setRange({ ...range, to: undefined });
        return;
      }

      const parsed = parseDateString(value);
      if (!parsed) {
        setEndDateError(errorInvalidDate);
        return;
      }

      if (!isDateSelectable(parsed, restrictions)) {
        setEndDateError(errorDateNotAvailable);
        // Keep the typed value but show error
        return;
      }

      setEndDateError(undefined);
      setRange({ ...range, to: parsed });
      // Convert to display format
      setEndDateValue(formatDateToDisplayString(parsed));
    },
    [range, setRange, restrictions],
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
    <div
      className={cn(dateTimeInputsVariants({ className }), classNames?.root)}
    >
      {/* Start date/time group */}
      <div
        className={cn(
          dateTimeGroupVariants(),
          !showTime && 'w-auto flex-1',
          classNames?.group,
        )}
      >
        <div
          className={cn(
            dateInputWrapperVariants(),
            !showTime && 'w-full flex-1',
            classNames?.dateWrapper,
          )}
        >
          <Typography
            component="label"
            className={cn(inputLabelVariants(), classNames?.label)}
          >
            {labelStartDate}
          </Typography>

          <Input
            value={startDateValue}
            onChange={handleStartDateChange}
            onFocus={handleStartDateFocus}
            onBlur={handleStartDateBlur}
            error={startDateError}
            disabled={disabled}
            className={cn(
              'h-10',
              'text-sm',
              'text-slate-800',
              'dark:text-white',
              'border-gray-300',
              'dark:border-metal-700',
              'dark:bg-transparent',
              classNames?.input,
            )}
            aria-label={ariaLabelStartDate}
          />
        </div>

        {showTime && (
          <div
            className={cn(timeInputWrapperVariants(), classNames?.timeWrapper)}
          >
            <Typography
              component="label"
              className={cn(inputLabelVariants(), classNames?.label)}
            >
              {labelTime}
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
        className={cn(
          dateTimeGroupVariants(),
          !showTime && 'w-auto flex-1',
          classNames?.group,
        )}
      >
        <div
          className={cn(
            dateInputWrapperVariants(),
            !showTime && 'w-full flex-1',
            classNames?.dateWrapper,
          )}
        >
          <Typography
            component="label"
            className={cn(inputLabelVariants(), classNames?.label)}
          >
            {labelEndDate}
          </Typography>

          <Input
            value={endDateValue}
            onChange={handleEndDateChange}
            onFocus={handleEndDateFocus}
            onBlur={handleEndDateBlur}
            error={endDateError}
            disabled={disabled}
            className={cn(
              'h-10',
              'text-sm',
              'text-slate-800',
              'dark:text-white',
              'border-gray-300',
              'dark:border-metal-700',
              'dark:bg-transparent',
              classNames?.input,
            )}
            aria-label={ariaLabelEndDate}
          />
        </div>

        {showTime && (
          <div
            className={cn(timeInputWrapperVariants(), classNames?.timeWrapper)}
          >
            <Typography
              component="label"
              className={cn(inputLabelVariants(), classNames?.label)}
            >
              {labelTime}
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
