import { FC } from 'react';

import { cn } from '@/utils';

import { EndInputFields, StartInputFields } from './components';
import { DateTimeInputsProps } from './DateTimeInputs.types';
import { dateTimeInputsVariants } from './DateTimeInputs.variants';
import { useDateTimeInputs } from './hooks';

export const DateTimeInputs: FC<DateTimeInputsProps> = ({
  className,
  labelStartDate = 'Start date',
  labelEndDate = 'End date',
  labelTime = 'Time',
  ariaLabelStartDate = 'Start date',
  ariaLabelEndDate = 'End date',
  errorInvalidDate = 'Invalid date',
  errorDateNotAvailable = 'Date is not available',
  errorStartAfterEnd = 'Start date must be before end date',
  errorEndBeforeStart = 'End date must be after start date',
  classNames,
}) => {
  const {
    timeFormat,
    showTime,
    name,
    disabled,
    time,
    startDateValue,
    startDateError,
    handleStartDateFocus,
    handleStartDateChange,
    handleStartDateBlur,
    handleStartTimeChange,
    endDateValue,
    endDateError,
    handleEndDateFocus,
    handleEndDateChange,
    handleEndDateBlur,
    handleEndTimeChange,
    startHiddenValue,
    endHiddenValue,
  } = useDateTimeInputs({
    errorInvalidDate,
    errorDateNotAvailable,
    errorStartAfterEnd,
    errorEndBeforeStart,
  });

  return (
    <div
      className={cn(dateTimeInputsVariants({ className }), classNames?.root)}
    >
      <StartInputFields
        dateValue={startDateValue}
        timeValue={time.startTime}
        error={startDateError}
        disabled={disabled}
        showTime={showTime}
        timeFormat={timeFormat}
        labelDate={labelStartDate}
        labelTime={labelTime}
        ariaLabelDate={ariaLabelStartDate}
        onDateChange={handleStartDateChange}
        onDateFocus={handleStartDateFocus}
        onDateBlur={handleStartDateBlur}
        onTimeChange={handleStartTimeChange}
        classNames={classNames}
      />

      <EndInputFields
        dateValue={endDateValue}
        timeValue={time.endTime}
        error={endDateError}
        disabled={disabled}
        showTime={showTime}
        timeFormat={timeFormat}
        labelDate={labelEndDate}
        labelTime={labelTime}
        ariaLabelDate={ariaLabelEndDate}
        onDateChange={handleEndDateChange}
        onDateFocus={handleEndDateFocus}
        onDateBlur={handleEndDateBlur}
        onTimeChange={handleEndTimeChange}
        classNames={classNames}
      />

      {name && (
        <>
          <input
            type="hidden"
            name={`${name}-start`}
            value={startHiddenValue}
          />
          <input type="hidden" name={`${name}-end`} value={endHiddenValue} />
        </>
      )}
    </div>
  );
};

DateTimeInputs.displayName = 'DateRangePickerDateTimeInputs';
