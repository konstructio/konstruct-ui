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
  const [time, setTime] = useState<Date | undefined>(() => defaultTime);
  const [isTyping, setIsTyping] = useState(false);
  const isAM = useMemo(() => (time ? time.getHours() < 12 : true), [time]);

  const updateTime = useCallback(
    (newTime: Date) => {
      setTime(newTime);
      onChange?.(newTime);
    },
    [onChange],
  );

  const handleSelectHour = useCallback(
    (hour: number) => {
      const newTime = time ? new Date(time) : new Date();

      if (format === '12') {
        if (hour === 12) {
          newTime.setHours(isAM ? 0 : 12);
        } else {
          newTime.setHours(isAM ? hour : hour + 12);
        }
      } else {
        newTime.setHours(hour);
      }

      // Reset minutes to 0 if this is the first selection
      if (!time) {
        newTime.setMinutes(0, 0, 0);
      }

      updateTime(newTime);
    },
    [format, isAM, time, updateTime],
  );

  const handleSelectMinute = useCallback(
    (minute: number) => {
      const newTime = time ? new Date(time) : new Date();

      // Reset hours to 0 if this is the first selection
      if (!time) {
        newTime.setHours(0, 0, 0, 0);
      }

      newTime.setMinutes(minute);
      updateTime(newTime);
    },
    [time, updateTime],
  );

  const handleSelectAM = useCallback(() => {
    const newTime = time ? new Date(time) : new Date();
    const currentHour = newTime.getHours();

    if (!time) {
      newTime.setHours(0, 0, 0, 0);
    } else if (!isAM) {
      newTime.setHours(currentHour - 12);
    }

    updateTime(newTime);
  }, [isAM, time, updateTime]);

  const handleSelectPM = useCallback(() => {
    const newTime = time ? new Date(time) : new Date();
    const currentHour = newTime.getHours();

    if (!time) {
      newTime.setHours(12, 0, 0, 0);
    } else if (isAM) {
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
    setTime(defaultTime);
  }, [defaultTime]);

  useEffect(() => {
    setFormat(defaultFormat);
  }, [defaultFormat]);

  return (
    <TimePickerContext.Provider
      value={{
        time,
        format,
        formattedTime: time ? getFormattedTime(time, format) : '',
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
