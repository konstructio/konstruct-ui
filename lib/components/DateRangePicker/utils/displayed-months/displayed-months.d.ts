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
export declare const getDisplayedMonths: (referenceDate: Date, maxDate?: Date, numberOfMonths?: 1 | 2) => [Date, Date];
