import { FC } from '../../../node_modules/react';
import { DatePickerProps } from './DatePicker.types';
/**
 * A date picker component built on react-day-picker.
 * Allows single date selection with calendar navigation.
 *
 * @example
 * ```tsx
 * // Basic date picker
 * <DatePicker
 *   defaultSelected={new Date()}
 *   onSelect={(date) => console.log(date)}
 * />
 *
 * // With custom styling
 * <DatePicker
 *   defaultSelected={startDate}
 *   onSelect={setStartDate}
 *   monthsClassName="custom-months"
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-datepicker--docs Storybook}
 */
declare const DatePicker: FC<DatePickerProps>;
export { DatePicker };
