export declare const getFormattedTime: (time: Date, format: "12" | "24") => string;
export declare const getHours: (time: Date | undefined) => number;
export declare const getMinutes: (time: Date | undefined) => number;
/**
 * Parses a time string and returns a Date object.
 * Supports formats: "HH:MM", "H:MM", "H:M", "HH:MM AM/PM", "H:MM AM/PM", "H:M AM/PM"
 */
export declare const parseTimeString: (value: string, format: "12" | "24") => Date | null;
