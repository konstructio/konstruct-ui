import { FC } from 'react';

import { cn } from '@/utils';

import { useDateRangePicker } from '../../contexts';

import { EndInputFields, StartInputFields } from './components';
import { DateTimeInputsProps } from './DateTimeInputs.types';
import { dateTimeInputsVariants } from './DateTimeInputs.variants';
import { useDateTimeInputs } from './hooks';

export const DateTimeInputs: FC<DateTimeInputsProps> = ({
  autoComplete,
  className,
  labelStartDate = 'Start date',
  labelEndDate = 'End date',
  labelTime = 'Time',
  requiredDates = false,
  ariaLabelStartDate = 'Start date',
  ariaLabelEndDate = 'End date',
  errorInvalidDate = 'Invalid date',
  errorDateNotAvailable = 'Date is not available',
  classNames,
}) => {
  const { numberOfMonths } = useDateRangePicker();
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
  });

  const getLayout = () => {
    if (numberOfMonths === 2) {
      return 'row';
    }

    return showTime ? 'stacked' : 'compact';
  };

  return (
    <div
      className={cn(
        dateTimeInputsVariants({ layout: getLayout(), className }),
        classNames?.root,
      )}
    >
      <StartInputFields
        autoComplete={autoComplete}
        dateValue={startDateValue}
        timeValue={time.startTime}
        error={startDateError}
        disabled={disabled}
        showTime={showTime}
        timeFormat={timeFormat}
        labelDate={labelStartDate}
        labelTime={labelTime}
        required={requiredDates}
        ariaLabelDate={ariaLabelStartDate}
        onDateChange={handleStartDateChange}
        onDateFocus={handleStartDateFocus}
        onDateBlur={handleStartDateBlur}
        onTimeChange={handleStartTimeChange}
        classNames={classNames}
      />

      <EndInputFields
        autoComplete={autoComplete}
        dateValue={endDateValue}
        timeValue={time.endTime}
        error={endDateError}
        disabled={disabled}
        showTime={showTime}
        timeFormat={timeFormat}
        labelDate={labelEndDate}
        labelTime={labelTime}
        required={requiredDates}
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
