/**
 * Combines a date and time into an ISO string.
 */
export declare const combineDateAndTime: (date?: Date, time?: Date) => string;
/**
 * Auto-formats a date input value as MM/DD/YYYY while typing.
 * Inserts slashes after month (2 digits) and day (2 more digits).
 */
export declare const autoFormatDateInput: (rawValue: string, previousValue: string) => string;
/**
 * Validates a time string in HH:MM format.
 * Returns true if valid, false otherwise.
 */
export declare const isValidTimeString: (timeString: string, format?: "12" | "24") => boolean;
/**
 * Parses a time string into a Date object.
 * Returns undefined if invalid.
 */
export declare const parseTimeString: (timeString: string, format?: "12" | "24", period?: "AM" | "PM") => Date | undefined;
/**
 * Formats a Date object to a time string in HH:MM format.
 */
export declare const formatTimeToString: (date: Date | undefined, format?: "12" | "24") => string;
/**
 * Formats a Date object to a readable date string like "6 February 2025".
 */
export declare const formatDateToDisplayString: (date: Date | undefined) => string;
/**
 * Formats a Date object to a date string in MM/DD/YYYY format.
 */
export declare const formatDateToString: (date: Date | undefined) => string;
/**
 * Parses a display date string like "6 February 2025" to a Date object.
 */
export declare const parseDisplayDateString: (dateString: string) => Date | undefined;
/**
 * Parses a date string in MM/DD/YYYY format to a Date object.
 */
export declare const parseDateString: (dateString: string) => Date | undefined;
/**
 * Gets the month name from index
 */
export declare const getMonthName: (monthIndex: number) => string;
