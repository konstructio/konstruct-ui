import { FC } from 'react';

import { TimePickerProps } from './TimePicker.types';
import { TimePickerProvider } from './contexts/time-picker.provider';
import { Wrapper } from './components/Wrapper/Wrapper';

/**
 * A scrollable time picker component with 12 or 24 hour format support.
 * Features smooth scroll navigation through hours, minutes, and AM/PM options.
 *
 * @example
 * ```tsx
 * <TimePicker
 *   label="Start Time"
 *   name="startTime"
 *   format="12"
 *   time={selectedTime}
 *   scrollBehavior="smooth"
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-timepicker--docs Storybook}
 */
const TimePicker: FC<TimePickerProps> = ({ format = '12', ...delegated }) => (
  <TimePickerProvider format={format}>
    <Wrapper {...delegated} />
  </TimePickerProvider>
);

TimePicker.displayName = 'KonstructTimePicker';

export { TimePicker };
