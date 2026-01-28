export type DateRangePreset = 'today' | 'current-month' | 'custom' | 'last-7-days' | 'last-2-weeks';
export type DateRange = {
    from?: Date;
    to?: Date;
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
    /** Current active preset */
    preset: DateRangePreset;
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
export declare const DateRangePickerContext: import('../../../../node_modules/react').Context<DateRangePickerContextValue | null>;
