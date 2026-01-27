import { BlockedMonth } from '../contexts';

export type DateRestrictions = {
  blockedDays: Date[];
  blockedMonths: BlockedMonth[];
  minDate?: Date;
  maxDate?: Date;
};

/**
 * Normalizes a date to midnight for comparison (ignoring time).
 */
const normalizeDate = (date: Date): Date => {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  return normalized;
};

/**
 * Checks if a date is in the blocked days list.
 */
const isBlockedDay = (date: Date, blockedDays: Date[]): boolean => {
  const normalizedDate = normalizeDate(date);
  return blockedDays.some(
    (blockedDay) =>
      normalizeDate(blockedDay).getTime() === normalizedDate.getTime(),
  );
};

/**
 * Checks if a date falls within a blocked month.
 */
const isInBlockedMonth = (
  date: Date,
  blockedMonths: BlockedMonth[],
): boolean => {
  const year = date.getFullYear();
  const month = date.getMonth();
  return blockedMonths.some(
    (blocked) => blocked.year === year && blocked.month === month,
  );
};

/**
 * Checks if a date is before the minimum date.
 */
const isBeforeMinDate = (date: Date, minDate?: Date): boolean => {
  if (!minDate) return false;
  return normalizeDate(date) < normalizeDate(minDate);
};

/**
 * Checks if a date is after the maximum date.
 */
const isAfterMaxDate = (date: Date, maxDate?: Date): boolean => {
  if (!maxDate) return false;
  return normalizeDate(date) > normalizeDate(maxDate);
};

/**
 * Checks if a date is selectable based on all restrictions.
 */
export const isDateSelectable = (
  date: Date,
  restrictions: DateRestrictions,
): boolean => {
  const { blockedDays, blockedMonths, minDate, maxDate } = restrictions;

  if (isBlockedDay(date, blockedDays)) return false;
  if (isInBlockedMonth(date, blockedMonths)) return false;
  if (isBeforeMinDate(date, minDate)) return false;
  if (isAfterMaxDate(date, maxDate)) return false;

  return true;
};

/**
 * Creates a matcher function for react-day-picker's disabled prop.
 * Returns undefined if no restrictions are set.
 */
export const createDisabledMatcher = (
  restrictions: DateRestrictions,
): ((date: Date) => boolean) | undefined => {
  const { blockedDays, blockedMonths, minDate, maxDate } = restrictions;

  // If no restrictions, return undefined
  if (
    blockedDays.length === 0 &&
    blockedMonths.length === 0 &&
    !minDate &&
    !maxDate
  ) {
    return undefined;
  }

  return (date: Date) => !isDateSelectable(date, restrictions);
};

/**
 * Checks if navigation to the previous month should be allowed.
 * Returns false if the previous month would be entirely before minDate.
 */
export const canNavigateToPrevMonth = (
  currentLeftMonth: Date,
  minDate?: Date,
): boolean => {
  if (!minDate) return true;

  // The previous month's last day
  const prevMonth = new Date(
    currentLeftMonth.getFullYear(),
    currentLeftMonth.getMonth() - 1,
    1,
  );
  const prevMonthLastDay = new Date(
    prevMonth.getFullYear(),
    prevMonth.getMonth() + 1,
    0,
  );

  // If the last day of the previous month is before minDate, can't navigate
  return normalizeDate(prevMonthLastDay) >= normalizeDate(minDate);
};

/**
 * Checks if navigation to the next month should be allowed.
 * Returns false if the next month would be entirely after maxDate.
 */
export const canNavigateToNextMonth = (
  currentRightMonth: Date,
  maxDate?: Date,
): boolean => {
  if (!maxDate) return true;

  // The next month's first day
  const nextMonth = new Date(
    currentRightMonth.getFullYear(),
    currentRightMonth.getMonth() + 1,
    1,
  );

  // If the first day of the next month is after maxDate, can't navigate
  return normalizeDate(nextMonth) <= normalizeDate(maxDate);
};
