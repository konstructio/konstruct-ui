import { useContext } from 'react';

import {
  TimePickerContext,
  TimePickerContextType,
} from './time-picker.context';

export const useTimePickerContext = (): TimePickerContextType => {
  const context = useContext(TimePickerContext);

  if (!context) {
    throw new Error(
      'useTimePickerContext must be used within a TimePickerProvider',
    );
  }

  return context;
};
