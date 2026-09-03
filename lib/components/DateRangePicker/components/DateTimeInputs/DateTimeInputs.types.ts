import { InputHTMLAttributes } from 'react';

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
  /** Browser autofill for both date fields (default: 'off') */
  autoComplete?: InputHTMLAttributes<HTMLInputElement>['autoComplete'];
  className?: string;
  /** Label for start date input (default: 'Start date') */
  labelStartDate?: string;
  /** Label for end date input (default: 'End date') */
  labelEndDate?: string;
  /** Label for time inputs (default: 'Time') */
  labelTime?: string;
  /** Marks both date fields as required */
  requiredDates?: boolean;
  /** Aria label for start date input (default: 'Start date') */
  ariaLabelStartDate?: string;
  /** Aria label for end date input (default: 'End date') */
  ariaLabelEndDate?: string;
  /** Error message for invalid date format (default: 'Invalid date') */
  errorInvalidDate?: string;
  /** Error message for unavailable date (default: 'Date is not available') */
  errorDateNotAvailable?: string;
  /** Custom class names for styling */
  classNames?: DateTimeInputsClassNames;
};
