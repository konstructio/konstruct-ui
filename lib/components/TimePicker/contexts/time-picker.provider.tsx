import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { TimePickerProps } from '../TimePicker.types';
import { getFormattedTime } from '../utils';

import { TimePickerContext } from './time-picker.context';

export const TimePickerProvider: FC<
  PropsWithChildren & {
    time?: Date;
    format: NonNullable<TimePickerProps['format']>;
  }
> = ({ children, time: defaultTime, format: defaultFormat }) => {
  const [format, setFormat] = useState(defaultFormat);
  const [time, setTime] = useState(() => defaultTime ?? new Date());
  const isAM = useMemo(() => time.getHours() < 12, [time]);

  const handleSelectHour = useCallback(
    (hour: number) => {
      const newTime = new Date(time);

      if (format === '12') {
        if (hour === 12) {
          newTime.setHours(isAM ? 0 : 12);
        } else {
          newTime.setHours(isAM ? hour : hour + 12);
        }
      } else {
        newTime.setHours(hour);
      }

      setTime(newTime);
    },
    [format, isAM, time],
  );

  const handleSelectMinute = useCallback(
    (minute: number) => {
      const newTime = new Date(time);

      newTime.setMinutes(minute);
      setTime(newTime);
    },
    [time],
  );

  const handleSelectAM = useCallback(() => {
    const newTime = new Date(time);
    const currentHour = newTime.getHours();

    if (!isAM) {
      newTime.setHours(currentHour - 12);
    }

    setTime(newTime);
  }, [isAM, time]);

  const handleSelectPM = useCallback(() => {
    const newTime = new Date(time);
    const currentHour = newTime.getHours();

    if (isAM) {
      newTime.setHours(currentHour + 12);
    }

    setTime(newTime);
  }, [isAM, time]);

  useEffect(() => {
    setFormat(format);
  }, [format]);

  return (
    <TimePickerContext.Provider
      value={{
        time,
        format,
        formattedTime: getFormattedTime(time, format),
        isAM,
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
