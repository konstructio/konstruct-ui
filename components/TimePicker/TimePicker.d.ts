import { FC } from '../../../node_modules/react';
import { TimePickerProps } from './TimePicker.types';
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
declare const TimePicker: FC<TimePickerProps>;
export { TimePicker };
