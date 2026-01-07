import { FC } from 'react';

import { TimePickerProps } from './TimePicker.types';
import { TimePickerProvider } from './contexts/time-picker.provider';
import { Wrapper } from './components/Wrapper/Wrapper';

const TimePicker: FC<TimePickerProps> = ({ format = '12', ...delegated }) => (
  <TimePickerProvider format={format}>
    <Wrapper {...delegated} />
  </TimePickerProvider>
);

TimePicker.displayName = 'KonstructTimePicker';

export { TimePicker };
