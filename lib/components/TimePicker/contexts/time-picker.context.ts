import { createContext } from 'react';

import { TimePickerProps } from '../TimePicker.types';

export type TimePickerContextType = {
  time: Date | undefined;
  format: NonNullable<TimePickerProps['format']>;
  formattedTime: string;
  isAM: boolean;
  isTyping: boolean;
  onSelectHour: (hour: number) => void;
  onSelectMinute: (minute: number) => void;
  onSelectAM: () => void;
  onSelectPM: () => void;
  setTimeDirectly: (time: Date) => void;
  setIsTyping: (value: boolean) => void;
};

export const TimePickerContext = createContext<TimePickerContextType>({
  time: undefined,
  format: '12',
  formattedTime: '',
  isAM: false,
  isTyping: false,
  onSelectHour() {
    throw new Error('onSelectHour is not implemented');
  },
  onSelectMinute() {
    throw new Error('onSelectMinute is not implemented');
  },
  onSelectAM() {
    throw new Error('onSelectAM is not implemented');
  },
  onSelectPM() {
    throw new Error('onSelectPM is not implemented');
  },
  setTimeDirectly() {
    throw new Error('setTimeDirectly is not implemented');
  },
  setIsTyping() {
    throw new Error('setIsTyping is not implemented');
  },
});
