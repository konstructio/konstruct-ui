/**
 * Calculate the number of weeks displayed in a calendar month view.
 */
export declare const getWeeksInMonth: (date: Date) => number;
/**
 * Calculate the calendar content height based on the number of weeks.
 */
export declare const calculateCalendarHeight: (weeks: number) => number;
/**
 * Get the previous month from a given date.
 */
export declare const getPrevMonth: (date: Date) => Date;
/**
 * Get the next month from a given date.
 */
export declare const getNextMonth: (date: Date) => Date;
