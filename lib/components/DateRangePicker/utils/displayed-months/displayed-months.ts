/** First day of the month `date` falls in. */
const startOfMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth(), 1);

const addMonths = (date: Date, months: number): Date =>
  new Date(date.getFullYear(), date.getMonth() + months, 1);

/**
 * The months the picker opens on: the one holding `referenceDate` and, for a
 * two-month calendar, the one after it. The pair is always returned so a
 * single-month calendar keeps the same shape and only shows the first.
 *
 * A backward-looking picker — a creation date capped at today — would otherwise
 * open with its last month wholly past `maxDate` and every day in it disabled,
 * spending half the calendar on dates nobody can pick. When that happens the
 * window ends on the last month with something selectable in it and steps back,
 * so the reference month stays in view.
 */
export const getDisplayedMonths = (
  referenceDate: Date,
  maxDate?: Date,
  numberOfMonths: 1 | 2 = 2,
): [Date, Date] => {
  let lastMonth = addMonths(startOfMonth(referenceDate), numberOfMonths - 1);

  if (maxDate) {
    const lastReachableMonth = startOfMonth(maxDate);

    if (lastMonth > lastReachableMonth) {
      lastMonth = lastReachableMonth;
    }
  }

  const leftMonth = addMonths(lastMonth, 1 - numberOfMonths);

  return [leftMonth, addMonths(leftMonth, 1)];
};
