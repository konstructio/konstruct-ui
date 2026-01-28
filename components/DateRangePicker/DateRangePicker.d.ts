import { FC } from '../../../node_modules/react';
import { DateRangePickerProps } from './DateRangePicker.types';
/**
 * A date range picker component that allows selecting a range of dates
 * with optional time inputs and preset options.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <DateRangePicker
 *   onRangeChange={(range) => console.log(range)}
 * />
 *
 * // With default values
 * <DateRangePicker
 *   defaultRange={{ from: new Date(), to: new Date() }}
 *   defaultPreset="last-7-days"
 *   onRangeChange={handleRangeChange}
 * />
 *
 * // With 12-hour time format
 * <DateRangePicker
 *   timeFormat="12"
 *   onRangeChange={handleRangeChange}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-daterangepicker--docs Storybook}
 */
declare const DateRangePicker: FC<DateRangePickerProps>;
export { DateRangePicker };
