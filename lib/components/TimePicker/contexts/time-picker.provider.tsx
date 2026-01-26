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
    onChange?: (time: Date) => void;
  }
> = ({ children, time: defaultTime, format: defaultFormat, onChange }) => {
  const [format, setFormat] = useState(defaultFormat);
  const [time, setTime] = useState(() => defaultTime ?? new Date());
  const [isTyping, setIsTyping] = useState(false);
  const isAM = useMemo(() => time.getHours() < 12, [time]);

  const updateTime = useCallback(
    (newTime: Date) => {
      setTime(newTime);
      onChange?.(newTime);
    },
    [onChange],
  );

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

      updateTime(newTime);
    },
    [format, isAM, time, updateTime],
  );

  const handleSelectMinute = useCallback(
    (minute: number) => {
      const newTime = new Date(time);

      newTime.setMinutes(minute);
      updateTime(newTime);
    },
    [time, updateTime],
  );

  const handleSelectAM = useCallback(() => {
    const newTime = new Date(time);
    const currentHour = newTime.getHours();

    if (!isAM) {
      newTime.setHours(currentHour - 12);
    }

    updateTime(newTime);
  }, [isAM, time, updateTime]);

  const handleSelectPM = useCallback(() => {
    const newTime = new Date(time);
    const currentHour = newTime.getHours();

    if (isAM) {
      newTime.setHours(currentHour + 12);
    }

    updateTime(newTime);
  }, [isAM, time, updateTime]);

  const handleSetTimeDirectly = useCallback(
    (newTime: Date) => {
      updateTime(newTime);
    },
    [updateTime],
  );

  // Sync with external time prop changes
  useEffect(() => {
    if (defaultTime) {
      setTime(defaultTime);
    }
  }, [defaultTime]);

  useEffect(() => {
    setFormat(defaultFormat);
  }, [defaultFormat]);

  return (
    <TimePickerContext.Provider
      value={{
        time,
        format,
        formattedTime: getFormattedTime(time, format),
        isAM,
        isTyping,
        onSelectHour: handleSelectHour,
        onSelectMinute: handleSelectMinute,
        onSelectAM: handleSelectAM,
        onSelectPM: handleSelectPM,
        setTimeDirectly: handleSetTimeDirectly,
        setIsTyping,
      }}
    >
      {children}
    </TimePickerContext.Provider>
  );
};
