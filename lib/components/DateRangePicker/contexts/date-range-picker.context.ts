import { createContext } from 'react';

/**
 * Id of a preset. The five built-ins are listed for autocompletion; any string is
 * accepted so consumers can supply their own options through the `presets` prop.
 */
export type DateRangePreset =
  | 'today'
  | 'current-month'
  | 'custom'
  | 'last-7-days'
  | 'last-2-weeks'
  // `string & {}` accepts any id while keeping autocompletion for the built-ins.
  | (string & NonNullable<unknown>);

export type DateRange = {
  from?: Date;
  to?: Date;
};

/**
 * A selectable entry in the preset panel. The option owns both its label and the
 * window it stands for, so a consumer can express windows the library does not
 * ship — `resolve` receives `now`, which is what makes a rolling window
 * ("the past 7×24 hours") expressible rather than only a calendar bucket.
 *
 * `custom` is a reserved id: returning an empty range marks the option as the
 * manual-selection entry, and picking a day in the calendar switches the panel
 * back to it.
 */
export type DateRangePresetOption = {
  /** Stable id; doubles as the radio value. */
  value: DateRangePreset;
  /** Text shown in the preset panel. */
  label: string;
  /** The window this option stands for, resolved when it is selected. */
  resolve: (now: Date) => DateRange;
};

export type TimeRange = {
  startTime?: Date;
  endTime?: Date;
};

export type DateRangeWithTime = DateRange & TimeRange;

export type BlockedMonth = {
  year: number;
  month: number;
};

export type DateRangePickerContextValue = {
  /** Current selected date range */
  range: DateRange;
  /** Current time values */
  time: TimeRange;
  /** Current active preset, or `null` when nothing is selected */
  preset: DateRangePreset | null;
  /** The preset options on offer, built-ins unless overridden */
  presets: DateRangePresetOption[];
  /** Currently displayed months [left, right] */
  displayedMonths: [Date, Date];
  /** Time format */
  timeFormat: '12' | '24';
  /** Whether to show time inputs */
  showTime: boolean;
  /** Form field name */
  name?: string;
  /** Disabled state */
  disabled: boolean;
  /** Animation duration in milliseconds */
  animationDuration: number;
  /** Specific days that cannot be selected */
  blockedDays: Date[];
  /** Months that cannot be selected */
  blockedMonths: BlockedMonth[];
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Whether navigation to previous month is allowed */
  canNavigatePrev: boolean;
  /** Whether navigation to next month is allowed */
  canNavigateNext: boolean;
  /** Hide navigation arrows when disabled */
  hideDisabledNavigation: boolean;
  /** Show days from previous/next month */
  showOutsideDays: boolean;
  /** Navigation mode: 'together' or 'independent' */
  navigationMode: 'together' | 'independent';
  /** Whether left month can navigate to previous (independent mode) */
  canLeftNavigatePrev: boolean;
  /** Whether left month can navigate to next (independent mode) */
  canLeftNavigateNext: boolean;
  /** Whether right month can navigate to previous (independent mode) */
  canRightNavigatePrev: boolean;
  /** Whether right month can navigate to next (independent mode) */
  canRightNavigateNext: boolean;
  /** Set the date range */
  setRange: (range: DateRange) => void;
  /** Set the time range */
  setTime: (time: TimeRange) => void;
  /** Set the preset */
  setPreset: (preset: DateRangePreset) => void;
  /** Navigate to previous month (together mode) */
  navigatePrevMonth: () => void;
  /** Navigate to next month (together mode) */
  navigateNextMonth: () => void;
  /** Navigate left month to previous (independent mode) */
  navigateLeftPrev: () => void;
  /** Navigate left month to next (independent mode) */
  navigateLeftNext: () => void;
  /** Navigate right month to previous (independent mode) */
  navigateRightPrev: () => void;
  /** Navigate right month to next (independent mode) */
  navigateRightNext: () => void;
  /** Set displayed months directly */
  setDisplayedMonths: (months: [Date, Date]) => void;
};

export const DateRangePickerContext =
  createContext<DateRangePickerContextValue | null>(null);
