import { durationToId, parseDuration, subtractDuration } from './duration';

describe('duration', () => {
  const MINUTE = 60 * 1000;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const now = new Date(2026, 8, 3, 14, 30);

  it.each([
    ['30m', 30 * MINUTE],
    ['1h', HOUR],
    ['24 hours', 24 * HOUR],
    ['1day', DAY],
    ['7days', 7 * DAY],
    ['90d', 90 * DAY],
    ['2w', 14 * DAY],
    ['1.5h', 90 * MINUTE],
  ])('should step back %s as a fixed span', (input, expected) => {
    expect(now.getTime() - subtractDuration(now, input).getTime()).toBe(
      expected,
    );
  });

  it.each([
    ['2month', new Date(2026, 6, 3, 14, 30)],
    ['2months', new Date(2026, 6, 3, 14, 30)],
    ['1year', new Date(2025, 8, 3, 14, 30)],
    ['1years', new Date(2025, 8, 3, 14, 30)],
    ['10year', new Date(2016, 8, 3, 14, 30)],
    ['10years', new Date(2016, 8, 3, 14, 30)],
  ])('should step back %s on the calendar', (input, expected) => {
    expect(subtractDuration(now, input)).toEqual(expected);
  });

  it('should clamp to the last day when the earlier month is shorter', () => {
    expect(subtractDuration(new Date(2026, 2, 31), '1month')).toEqual(
      new Date(2026, 1, 28),
    );
  });

  it('should land on the leap day when stepping back a year from one', () => {
    expect(subtractDuration(new Date(2029, 1, 28), '1year')).toEqual(
      new Date(2028, 1, 28),
    );
  });

  it('should ignore case and surrounding spaces', () => {
    expect(parseDuration('  7 Days ')).toEqual({ amount: 7, unit: 'd' });
  });

  it('should tell minutes from months', () => {
    expect(parseDuration('2m').unit).toBe('m');
    expect(parseDuration('2mo').unit).toBe('mo');
  });

  it('should reduce any spelling to a stable id', () => {
    expect(durationToId('7days')).toBe('7d');
    expect(durationToId('24 hours')).toBe('24h');
    expect(durationToId('2months')).toBe('2mo');
    expect(durationToId('10years')).toBe('10y');
  });

  it.each(['', '7', 'days', '1 decade', 'abc'])('should reject %s', (input) => {
    expect(() => parseDuration(input)).toThrow(/invalid duration/i);
  });
});
