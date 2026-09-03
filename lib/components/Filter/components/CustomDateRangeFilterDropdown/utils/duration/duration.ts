import { Duration, DurationUnit } from './duration.types';

const MINUTE_MS = 60 * 1000;

const FIXED_UNIT_MS: Partial<Record<DurationUnit, number>> = {
  m: MINUTE_MS,
  h: 60 * MINUTE_MS,
  d: 24 * 60 * MINUTE_MS,
  w: 7 * 24 * 60 * MINUTE_MS,
};

const UNIT_ALIASES: Record<string, DurationUnit> = {
  m: 'm',
  min: 'm',
  mins: 'm',
  minute: 'm',
  minutes: 'm',
  h: 'h',
  hr: 'h',
  hrs: 'h',
  hour: 'h',
  hours: 'h',
  d: 'd',
  day: 'd',
  days: 'd',
  w: 'w',
  wk: 'w',
  wks: 'w',
  week: 'w',
  weeks: 'w',
  mo: 'mo',
  mos: 'mo',
  month: 'mo',
  months: 'mo',
  y: 'y',
  yr: 'y',
  yrs: 'y',
  year: 'y',
  years: 'y',
};

const DURATION_PATTERN = /^(\d+(?:\.\d+)?)\s*([a-z]+)$/i;

export const parseDuration = (input: string): Duration => {
  const match = DURATION_PATTERN.exec(input.trim());
  const unit = match && UNIT_ALIASES[match[2].toLowerCase()];

  if (!match || !unit) {
    throw new Error(
      `Invalid duration "${input}". Use a number followed by m, h, d, w, month or year, e.g. "30m", "1h", "7days", "2months", "1year".`,
    );
  }

  return { amount: Number(match[1]), unit };
};

const subtractMonths = (date: Date, months: number): Date => {
  const result = new Date(date);
  const day = result.getDate();

  result.setDate(1);
  result.setMonth(result.getMonth() - months);

  const lastDay = new Date(
    result.getFullYear(),
    result.getMonth() + 1,
    0,
  ).getDate();

  result.setDate(Math.min(day, lastDay));

  return result;
};

export const subtractDuration = (date: Date, input: string): Date => {
  const { amount, unit } = parseDuration(input);
  const fixedMs = FIXED_UNIT_MS[unit];

  if (fixedMs !== undefined) {
    return new Date(date.getTime() - amount * fixedMs);
  }

  const months = unit === 'y' ? amount * 12 : amount;

  return subtractMonths(date, Math.round(months));
};

export const durationToId = (input: string): string => {
  const { amount, unit } = parseDuration(input);

  return `${amount}${unit}`;
};
