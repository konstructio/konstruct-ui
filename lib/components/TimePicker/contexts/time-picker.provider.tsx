import { FC, PropsWithChildren, useCallback, useState } from 'react';

import { TimePickerProps } from '../TimePicker.types';
import { getFormattedTime } from '../utils';

import { TimePickerContext } from './time-picker.context';

export const TimePickerProvider: FC<
  PropsWithChildren & {
    time?: Date;
    format: NonNullable<TimePickerProps['format']>;
  }
> = ({ children, time: defaultTime, format: defaultFormat }) => {
  const [format] = useState(defaultFormat);
  const [time, setTime] = useState(() => defaultTime ?? new Date());

  const handleSelectHour = useCallback(
    (hour: number) => {
      const newTime = new Date(time);

      newTime.setHours(hour);
      setTime(newTime);
    },
    [time],
  );

  const handleSelectMinute = useCallback(
    (minute: number) => {
      const newTime = new Date(time);

      newTime.setMinutes(minute);
      setTime(newTime);
    },
    [time],
  );

  const handleSelectAM = useCallback(() => {}, []);
  const handleSelectPM = useCallback(() => {}, []);

  return (
    <TimePickerContext.Provider
      value={{
        time,
        format,
        formattedTime: getFormattedTime(time, format),
        onSelectHour: handleSelectHour,
        onSelectMinute: handleSelectMinute,
        onSelectAM: handleSelectAM,
        onSelectPM: handleSelectPM,
      }}
    >
      {children}
    </TimePickerContext.Provider>
  );
};
