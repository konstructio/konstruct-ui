/** First day of the month `date` falls in. */
const startOfMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth(), 1);

/**
 * The two months the picker opens on: the one holding `referenceDate` and the
 * one after it.
 *
 * A backward-looking picker — a creation date capped at today — would otherwise
 * open with its second month wholly past `maxDate` and every day in it disabled,
 * spending half the calendar on dates nobody can pick. When that happens the
 * pair ends on the last month with something selectable in it and steps back a
 * month, so the reference month stays in view.
 */
export const getDisplayedMonths = (
  referenceDate: Date,
  maxDate?: Date,
): [Date, Date] => {
  let rightMonth = new Date(
    referenceDate.getFullYear(),
    referenceDate.getMonth() + 1,
    1,
  );

  if (maxDate) {
    const lastReachableMonth = startOfMonth(maxDate);

    if (rightMonth > lastReachableMonth) {
      rightMonth = lastReachableMonth;
    }
  }

  const leftMonth = new Date(
    rightMonth.getFullYear(),
    rightMonth.getMonth() - 1,
    1,
  );

  return [leftMonth, rightMonth];
};
