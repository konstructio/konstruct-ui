import { createContext } from 'react';

import type { TimePickerContextType } from './time-picker.types';

export type { TimePickerContextType } from './time-picker.types';

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
