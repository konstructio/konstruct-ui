import { DateRange, DateRangePresetOption } from '../../contexts';

/** Midnight of the day `now` falls on. */
const startOfDay = (now: Date): Date =>
  new Date(now.getFullYear(), now.getMonth(), now.getDate());

/** `days` whole days back from the day `now` falls on, midnight to midnight. */
const lastDays =
  (days: number) =>
  (now: Date): DateRange => {
    const to = startOfDay(now);
    const from = new Date(to);
    from.setDate(from.getDate() - (days - 1));

    return { from, to };
  };

/**
 * The options offered when `presets` is not supplied. Each one owns the window it
 * stands for, so the panel and the resolution cannot drift apart.
 *
 * These are day-granular: `last-7-days` is seven whole days ending today, not the
 * past 7×24 hours. A consumer that needs rolling hour-precision windows supplies
 * its own `presets`.
 */
export const PRESET_OPTIONS: DateRangePresetOption[] = [
  {
    value: 'today',
    label: 'Today',
    resolve: (now) => ({ from: startOfDay(now), to: startOfDay(now) }),
  },
  {
    value: 'current-month',
    label: 'Current month',
    resolve: (now) => ({
      from: new Date(now.getFullYear(), now.getMonth(), 1),
      to: new Date(now.getFullYear(), now.getMonth() + 1, 0),
    }),
  },
  { value: 'custom', label: 'Custom', resolve: () => ({}) },
  { value: 'last-7-days', label: 'Last 7 days', resolve: lastDays(7) },
  { value: 'last-2-weeks', label: 'Last 2 weeks', resolve: lastDays(14) },
];
