const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * Validates a time string in HH:MM format.
 * Returns true if valid, false otherwise.
 */
export const isValidTimeString = (
  timeString: string,
  format: '12' | '24' = '24',
): boolean => {
  if (!timeString) return true; // Empty is valid (optional)

  const [hours, minutes] = timeString.split(':').map(Number);

  if (isNaN(hours) || isNaN(minutes)) return false;

  if (format === '24') {
    return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
  }

  // 12-hour format
  return hours >= 1 && hours <= 12 && minutes >= 0 && minutes <= 59;
};

/**
 * Parses a time string into a Date object.
 * Returns undefined if invalid.
 */
export const parseTimeString = (
  timeString: string,
  format: '12' | '24' = '24',
  period?: 'AM' | 'PM',
): Date | undefined => {
  if (!timeString || !isValidTimeString(timeString, format)) {
    return undefined;
  }

  const [hours, minutes] = timeString.split(':').map(Number);
  const date = new Date();

  let adjustedHours = hours;

  if (format === '12' && period) {
    if (period === 'PM' && hours !== 12) {
      adjustedHours = hours + 12;
    } else if (period === 'AM' && hours === 12) {
      adjustedHours = 0;
    }
  }

  date.setHours(adjustedHours, minutes, 0, 0);
  return date;
};

/**
 * Formats a Date object to a time string in HH:MM format.
 */
export const formatTimeToString = (
  date: Date | undefined,
  format: '12' | '24' = '24',
): string => {
  if (!date) return '';

  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (format === '24') {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  // 12-hour format
  const period = hours >= 12 ? 'PM' : 'AM';
  const adjustedHours = hours % 12 || 12;
  return `${adjustedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
};

/**
 * Formats a Date object to a readable date string like "6 February 2025".
 */
export const formatDateToDisplayString = (date: Date | undefined): string => {
  if (!date) return '';

  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

/**
 * Formats a Date object to a date string in MM/DD/YYYY format.
 */
export const formatDateToString = (date: Date | undefined): string => {
  if (!date) return '';

  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};

/**
 * Parses a display date string like "6 February 2025" to a Date object.
 */
export const parseDisplayDateString = (
  dateString: string,
): Date | undefined => {
  if (!dateString) return undefined;

  // Try to parse "6 February 2025" format
  const parts = dateString.trim().split(' ');
  if (parts.length !== 3) return undefined;

  const [dayStr, monthStr, yearStr] = parts;
  const day = parseInt(dayStr, 10);
  const year = parseInt(yearStr, 10);
  const monthIndex = MONTH_NAMES.findIndex(
    (m) => m.toLowerCase() === monthStr.toLowerCase(),
  );

  if (isNaN(day) || isNaN(year) || monthIndex === -1) return undefined;

  if (day < 1 || day > 31) return undefined;
  if (year < 1900 || year > 2100) return undefined;

  const date = new Date(year, monthIndex, day);

  // Validate that the date is real
  if (
    date.getMonth() !== monthIndex ||
    date.getDate() !== day ||
    date.getFullYear() !== year
  ) {
    return undefined;
  }

  return date;
};

/**
 * Parses a date string in MM/DD/YYYY format to a Date object.
 */
export const parseDateString = (dateString: string): Date | undefined => {
  if (!dateString) return undefined;

  const parts = dateString.split('/');
  if (parts.length !== 3) return undefined;

  const [month, day, year] = parts.map(Number);
  if (isNaN(month) || isNaN(day) || isNaN(year)) return undefined;

  if (month < 1 || month > 12) return undefined;
  if (day < 1 || day > 31) return undefined;
  if (year < 1900 || year > 2100) return undefined;

  const date = new Date(year, month - 1, day);

  // Validate that the date is real (e.g., Feb 30 would fail)
  if (
    date.getMonth() !== month - 1 ||
    date.getDate() !== day ||
    date.getFullYear() !== year
  ) {
    return undefined;
  }

  return date;
};

/**
 * Gets the month name from index
 */
export const getMonthName = (monthIndex: number): string => {
  return MONTH_NAMES[monthIndex] || '';
};
