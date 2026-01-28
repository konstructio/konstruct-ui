import {
  ChangeEvent,
  FocusEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useDateRangePicker } from '../../../contexts';
import {
  autoFormatDateInput,
  combineDateAndTime,
  formatDateToDisplayString,
  formatDateToString,
  isDateSelectable,
  parseDateString,
  parseDisplayDateString,
} from '../../../utils';

type UseDateTimeInputsProps = {
  errorInvalidDate: string;
  errorDateNotAvailable: string;
  errorStartAfterEnd: string;
  errorEndBeforeStart: string;
};

export const useDateTimeInputs = ({
  errorInvalidDate,
  errorDateNotAvailable,
  errorStartAfterEnd,
  errorEndBeforeStart,
}: UseDateTimeInputsProps) => {
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
    if (range.from) {
      setStartDateValue(formatDateToString(range.from));
    } else {
      const parsed =
        parseDateString(startDateValue) ||
        parseDisplayDateString(startDateValue);
      if (parsed) {
        setStartDateValue(formatDateToString(parsed));
      }
    }
  }, [range.from, startDateValue]);

  const handleStartDateChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;
      const formattedValue = autoFormatDateInput(rawValue, startDateValue);
      setStartDateValue(formattedValue);
      setStartDateError(undefined);

      const parsed = parseDateString(formattedValue);
      if (parsed) {
        if (isDateSelectable(parsed, restrictions)) {
          const endParsed =
            range.to ||
            parseDateString(endDateValue) ||
            parseDisplayDateString(endDateValue);
          if (endParsed && parsed > endParsed) {
            return;
          }
          setRange({ ...range, from: parsed });
        }
      }
    },
    [startDateValue, endDateValue, range, setRange, restrictions],
  );

  const handleStartDateBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value.trim();

      if (value === '') {
        isStartTypingRef.current = false;
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
        return;
      }

      const endParsed =
        parseDateString(endDateValue) || parseDisplayDateString(endDateValue);
      if (endParsed && parsed > endParsed) {
        setStartDateError(errorStartAfterEnd);
        isEndTypingRef.current = true;
        setRange({ from: undefined, to: undefined });
        return;
      }

      isStartTypingRef.current = false;
      setStartDateError(undefined);
      setRange({ ...range, from: parsed });
      setStartDateValue(formatDateToDisplayString(parsed));
    },
    [
      range,
      setRange,
      restrictions,
      errorInvalidDate,
      errorDateNotAvailable,
      errorStartAfterEnd,
      endDateValue,
    ],
  );

  // End date handlers
  const handleEndDateFocus = useCallback(() => {
    isEndTypingRef.current = true;
    setEndDateError(undefined);
    if (range.to) {
      setEndDateValue(formatDateToString(range.to));
    } else {
      const parsed =
        parseDateString(endDateValue) || parseDisplayDateString(endDateValue);
      if (parsed) {
        setEndDateValue(formatDateToString(parsed));
      }
    }
  }, [range.to, endDateValue]);

  const handleEndDateChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;
      const formattedValue = autoFormatDateInput(rawValue, endDateValue);
      setEndDateValue(formattedValue);
      setEndDateError(undefined);

      const parsed = parseDateString(formattedValue);
      if (parsed) {
        if (isDateSelectable(parsed, restrictions)) {
          const startParsed =
            range.from ||
            parseDateString(startDateValue) ||
            parseDisplayDateString(startDateValue);
          if (startParsed && parsed < startParsed) {
            return;
          }
          setRange({ ...range, to: parsed });
        }
      }
    },
    [endDateValue, startDateValue, range, setRange, restrictions],
  );

  const handleEndDateBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value.trim();

      if (value === '') {
        isEndTypingRef.current = false;
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
        return;
      }

      const startParsed =
        parseDateString(startDateValue) ||
        parseDisplayDateString(startDateValue);
      if (startParsed && parsed < startParsed) {
        setEndDateError(errorEndBeforeStart);
        isStartTypingRef.current = true;
        setRange({ from: undefined, to: undefined });
        return;
      }

      isEndTypingRef.current = false;
      setEndDateError(undefined);
      setRange({ ...range, to: parsed });
      setEndDateValue(formatDateToDisplayString(parsed));
    },
    [
      range,
      setRange,
      restrictions,
      errorInvalidDate,
      errorDateNotAvailable,
      errorEndBeforeStart,
      startDateValue,
    ],
  );

  // Time handlers
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

  // Hidden input values
  const startHiddenValue = useMemo(
    () => combineDateAndTime(range.from, time.startTime),
    [range.from, time.startTime],
  );

  const endHiddenValue = useMemo(
    () => combineDateAndTime(range.to, time.endTime),
    [range.to, time.endTime],
  );

  return {
    // Context values
    timeFormat,
    showTime,
    name,
    disabled,
    time,

    // Start date state and handlers
    startDateValue,
    startDateError,
    handleStartDateFocus,
    handleStartDateChange,
    handleStartDateBlur,
    handleStartTimeChange,

    // End date state and handlers
    endDateValue,
    endDateError,
    handleEndDateFocus,
    handleEndDateChange,
    handleEndDateBlur,
    handleEndTimeChange,

    // Hidden input values
    startHiddenValue,
    endHiddenValue,
  };
};
