export type CalendarPanelClassNames = {
    /** Root container */
    root?: string;
    /** Navigation bar container */
    navigation?: string;
    /** Navigation group (contains prev button + month title + next button) */
    navGroup?: string;
    /** Navigation buttons */
    navButton?: string;
    /** Disabled navigation buttons */
    navButtonDisabled?: string;
    /** Month title text */
    monthTitle?: string;
    /** Divider line between month header and calendar grid */
    divider?: string;
    /** Calendar grids container */
    gridContainer?: string;
    /** Individual calendar grid */
    grid?: string;
    /** Day picker specific class names */
    dayPicker?: DayPickerClassNames;
};
/** Class names for DayPicker calendar elements */
export type DayPickerClassNames = {
    /** Root container of the day picker */
    root?: string;
    /** Months container */
    months?: string;
    /** Individual month container */
    month?: string;
    /** Calendar table */
    table?: string;
    /** Table head with weekday names */
    weekdays?: string;
    /** Individual weekday header cell */
    weekday?: string;
    /** Table body with weeks */
    weeks?: string;
    /** Individual day cell */
    day?: string;
    /** Day button inside each cell */
    dayButton?: string;
    /** Selected day(s) */
    selected?: string;
    /** Start of the selected range */
    rangeStart?: string;
    /** End of the selected range */
    rangeEnd?: string;
    /** Days between range start and end */
    rangeMiddle?: string;
    /** Today's date */
    today?: string;
    /** Disabled days */
    disabled?: string;
    /** Days outside the current month */
    outside?: string;
};
export type CalendarPanelProps = {
    className?: string;
    /** Width of the calendar panel in pixels (default: 550) */
    calendarWidth?: number;
    /** Aria label for the calendar container (default: 'Date range picker calendar') */
    ariaLabelCalendar?: string;
    /** Aria label for previous month button in together mode (default: 'Previous month') */
    ariaLabelPrevMonth?: string;
    /** Aria label for next month button in together mode (default: 'Next month') */
    ariaLabelNextMonth?: string;
    /** Aria label for previous month button for start date in independent mode (default: 'Previous month for start date') */
    ariaLabelPrevMonthStart?: string;
    /** Aria label for next month button for start date in independent mode (default: 'Next month for start date') */
    ariaLabelNextMonthStart?: string;
    /** Aria label for previous month button for end date in independent mode (default: 'Previous month for end date') */
    ariaLabelPrevMonthEnd?: string;
    /** Aria label for next month button for end date in independent mode (default: 'Next month for end date') */
    ariaLabelNextMonthEnd?: string;
    /** Custom class names for styling */
    classNames?: CalendarPanelClassNames;
};
export type SlideDirection = 'left' | 'right' | null;
