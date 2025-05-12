import { createContext } from 'react';

import { TimePickerProps } from '../TimePicker.types';

export type TimePickerContextType = {
  time: Date;
  format: NonNullable<TimePickerProps['format']>;
  formattedTime: string;
  isAM: boolean;
  onSelectHour: (hour: number) => void;
  onSelectMinute: (minute: number) => void;
  onSelectAM: () => void;
  onSelectPM: () => void;
};

export const TimePickerContext = createContext<TimePickerContextType>({
  time: new Date(),
  format: '12',
  formattedTime: '',
  isAM: false,
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
});
