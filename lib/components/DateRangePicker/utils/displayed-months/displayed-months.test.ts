import { getDisplayedMonths } from './displayed-months';

describe('getDisplayedMonths', () => {
  const monthsOf = (pair: [Date, Date]) =>
    pair.map((date) => `${date.getFullYear()}-${date.getMonth()}`);

  it('should open on the reference month and the one after it', () => {
    expect(monthsOf(getDisplayedMonths(new Date(2026, 7, 10)))).toEqual([
      '2026-7',
      '2026-8',
    ]);
  });

  it('should step back when the second month lies wholly past maxDate', () => {
    const pair = getDisplayedMonths(new Date(2026, 8, 1), new Date(2026, 8, 1));

    // September is capped mid-month, so it stays; October would be all disabled.
    expect(monthsOf(pair)).toEqual(['2026-7', '2026-8']);
  });

  it('should keep the reference month in view when it steps back', () => {
    const [, right] = getDisplayedMonths(
      new Date(2026, 8, 30),
      new Date(2026, 8, 30),
    );

    expect(right.getMonth()).toBe(8);
  });

  it('should leave the pair alone when maxDate is further out', () => {
    const pair = getDisplayedMonths(
      new Date(2026, 7, 10),
      new Date(2026, 10, 1),
    );

    expect(monthsOf(pair)).toEqual(['2026-7', '2026-8']);
  });

  it('should leave the pair alone with no maxDate at all', () => {
    expect(monthsOf(getDisplayedMonths(new Date(2026, 11, 5)))).toEqual([
      '2026-11',
      '2027-0',
    ]);
  });

  it('should cross the year boundary when capped in January', () => {
    const pair = getDisplayedMonths(
      new Date(2027, 0, 10),
      new Date(2027, 0, 20),
    );

    expect(monthsOf(pair)).toEqual(['2026-11', '2027-0']);
  });

  describe('single month', () => {
    it('should open on the reference month itself', () => {
      const [left] = getDisplayedMonths(new Date(2026, 7, 10), undefined, 1);

      expect(`${left.getFullYear()}-${left.getMonth()}`).toBe('2026-7');
    });

    it('should still hand back the following month as the pair', () => {
      expect(
        monthsOf(getDisplayedMonths(new Date(2026, 7, 10), undefined, 1)),
      ).toEqual(['2026-7', '2026-8']);
    });

    it('should not step back when the reference month is capped mid-month', () => {
      const [left] = getDisplayedMonths(
        new Date(2026, 8, 1),
        new Date(2026, 8, 15),
        1,
      );

      expect(left.getMonth()).toBe(8);
    });

    it('should step back when the reference month lies wholly past maxDate', () => {
      const [left] = getDisplayedMonths(
        new Date(2026, 9, 1),
        new Date(2026, 8, 15),
        1,
      );

      expect(left.getMonth()).toBe(8);
    });
  });
});
