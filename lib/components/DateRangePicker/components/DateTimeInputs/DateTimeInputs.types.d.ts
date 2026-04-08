export type DateTimeInputsClassNames = {
    /** Root container */
    root?: string;
    /** Start/End date group wrapper */
    group?: string;
    /** Date input wrapper (contains label + input) */
    dateWrapper?: string;
    /** Time input wrapper (contains label + TimePicker) */
    timeWrapper?: string;
    /** Labels for inputs */
    label?: string;
    /** Date input field */
    input?: string;
};
export type DateTimeInputsProps = {
    className?: string;
    /** Label for start date input (default: 'Start date') */
    labelStartDate?: string;
    /** Label for end date input (default: 'End date') */
    labelEndDate?: string;
    /** Label for time inputs (default: 'Time') */
    labelTime?: string;
    /** Aria label for start date input (default: 'Start date') */
    ariaLabelStartDate?: string;
    /** Aria label for end date input (default: 'End date') */
    ariaLabelEndDate?: string;
    /** Error message for invalid date format (default: 'Invalid date') */
    errorInvalidDate?: string;
    /** Error message for unavailable date (default: 'Date is not available') */
    errorDateNotAvailable?: string;
    /** Error message when start date is after end date (default: 'Start date must be before end date') */
    errorStartAfterEnd?: string;
    /** Error message when end date is before start date (default: 'End date must be after start date') */
    errorEndBeforeStart?: string;
    /** Custom class names for styling */
    classNames?: DateTimeInputsClassNames;
};
