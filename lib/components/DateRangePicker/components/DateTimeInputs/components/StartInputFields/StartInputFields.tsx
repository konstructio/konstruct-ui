import { FC } from 'react';

import { cn } from '@/utils';

import { Input } from '@/components/Input/Input';
import { TimePicker } from '@/components/TimePicker/TimePicker';
import { Typography } from '@/components/Typography/Typography';
import {
  dateInputWrapperVariants,
  dateTimeGroupVariants,
  inputLabelVariants,
  timeInputWrapperVariants,
} from '../../DateTimeInputs.variants';

import { Props } from './StartInputFields.types';

export const StartInputFields: FC<Props> = ({
  dateValue,
  timeValue,
  error,
  disabled,
  showTime,
  timeFormat = '24',
  labelDate = 'Start date',
  labelTime = 'Time',
  ariaLabelDate = 'Start date',
  onDateChange,
  onDateFocus,
  onDateBlur,
  onTimeChange,
  classNames,
}) => (
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
        {labelDate}
      </Typography>

      <Input
        value={dateValue}
        onChange={onDateChange}
        onFocus={onDateFocus}
        onBlur={onDateBlur}
        error={error}
        disabled={disabled}
        className={cn(classNames?.input)}
        aria-label={ariaLabelDate}
      />
    </div>

    {showTime && (
      <div className={cn(timeInputWrapperVariants(), classNames?.timeWrapper)}>
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
          time={timeValue}
          onChange={onTimeChange}
          disabled={disabled}
          name="start time"
        />
      </div>
    )}
  </div>
);

StartInputFields.displayName = 'StartInputFields';
