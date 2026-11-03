import { BORDER_EDGE_CLASSES } from '../../constants';

import { getResponsiveEdgeClasses } from './responsive-edges';

describe('getResponsiveEdgeClasses', () => {
  const hideBelows = ['sm', undefined, 'lg', 'sm'] as const;

  it('should put the left edge on the first column visible at each breakpoint', () => {
    expect(
      getResponsiveEdgeClasses([...hideBelows], 1, BORDER_EDGE_CLASSES),
    ).toEqual(['max-sm:dark:border-l', 'max-sm:dark:border-r']);
    expect(
      getResponsiveEdgeClasses([...hideBelows], 0, BORDER_EDGE_CLASSES),
    ).toEqual([
      'sm:max-md:dark:border-l',
      'md:max-lg:dark:border-l',
      'lg:max-xl:dark:border-l',
      'xl:max-2xl:dark:border-l',
      '2xl:dark:border-l',
    ]);
  });

  it('should put the right edge on the last column visible at each breakpoint', () => {
    expect(
      getResponsiveEdgeClasses([...hideBelows], 3, BORDER_EDGE_CLASSES),
    ).toEqual([
      'sm:max-md:dark:border-r',
      'md:max-lg:dark:border-r',
      'lg:max-xl:dark:border-r',
      'xl:max-2xl:dark:border-r',
      '2xl:dark:border-r',
    ]);
  });

  it('should leave columns between the edges without edge classes', () => {
    expect(
      getResponsiveEdgeClasses([...hideBelows], 2, BORDER_EDGE_CLASSES),
    ).toEqual([]);
  });
});
