import { COLLAPSED_STEP_PX, EXPANDED_GAP_PX } from '../../constants';
import { ToastItem } from '../../Toast.types';

import { computeStackLayout } from './compute-stack-layout';

describe('computeStackLayout', () => {
  const toast = (id: string): ToastItem => ({ id, title: id });

  const setup = (
    ids: string[],
    heights: Record<string, number>,
    expanded: boolean,
    maxVisible = 3,
  ) => {
    return computeStackLayout({
      toasts: ids.map(toast),
      heights,
      expanded,
      maxVisible,
    });
  };

  it('should collapse to an empty region when there are no toasts', () => {
    expect(setup([], {}, false)).toEqual({
      offsets: [],
      frontHeight: 0,
      regionHeight: 0,
    });
  });

  it('should step collapsed toasts behind the front one', () => {
    const layout = setup(['a', 'b', 'c', 'd'], { a: 56 }, false);

    expect(layout.frontHeight).toBe(56);
    expect(layout.offsets).toEqual(
      [0, 1, 2, 3].map((index) => {
        return index * COLLAPSED_STEP_PX;
      }),
    );
    expect(layout.regionHeight).toBe(56 + 2 * COLLAPSED_STEP_PX);
  });

  it('should reserve room only for the visible collapsed toasts', () => {
    const layout = setup(['a', 'b', 'c', 'd'], { a: 56 }, false, 2);

    expect(layout.regionHeight).toBe(56 + COLLAPSED_STEP_PX);
  });

  it('should stack expanded toasts by their measured heights', () => {
    const layout = setup(['a', 'b', 'c'], { a: 56, b: 80, c: 56 }, true);

    expect(layout.offsets).toEqual([
      0,
      56 + EXPANDED_GAP_PX,
      56 + 80 + 2 * EXPANDED_GAP_PX,
    ]);
    expect(layout.regionHeight).toBe(56 + 80 + 56 + 2 * EXPANDED_GAP_PX);
  });

  it('should treat unmeasured toasts as zero height while expanded', () => {
    const layout = setup(['a', 'b'], {}, true);

    expect(layout.offsets).toEqual([0, EXPANDED_GAP_PX]);
    expect(layout.regionHeight).toBe(EXPANDED_GAP_PX);
  });
});
