import {
  MONTH_HEADER_HEIGHT,
  WEEKDAY_HEADER_HEIGHT,
  WEEK_ROW_HEIGHT,
} from '../constants';

/**
 * Calculate the number of weeks displayed in a calendar month view.
 */
export const getWeeksInMonth = (date: Date): number => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const firstDayOfWeek = firstDay.getDay();
  const daysInMonth = lastDay.getDate();
  const totalCells = firstDayOfWeek + daysInMonth;

  return Math.ceil(totalCells / 7);
};

/**
 * Calculate the calendar content height based on the number of weeks.
 */
export const calculateCalendarHeight = (weeks: number): number => {
  return MONTH_HEADER_HEIGHT + WEEKDAY_HEADER_HEIGHT + weeks * WEEK_ROW_HEIGHT;
};

/**
 * Get the previous month from a given date.
 */
export const getPrevMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth() - 1, 1);

/**
 * Get the next month from a given date.
 */
export const getNextMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth() + 1, 1);
