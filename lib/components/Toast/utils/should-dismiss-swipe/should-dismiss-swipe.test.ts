import { shouldDismissSwipe } from './should-dismiss-swipe';

describe('shouldDismissSwipe', () => {
  it('should dismiss when dragged past 40% of the width', () => {
    expect(shouldDismissSwipe({ offset: 161, velocity: 0, width: 400 })).toBe(
      true,
    );
    expect(shouldDismissSwipe({ offset: -161, velocity: 0, width: 400 })).toBe(
      true,
    );
  });

  it('should spring back below the distance threshold', () => {
    expect(shouldDismissSwipe({ offset: 159, velocity: 0, width: 400 })).toBe(
      false,
    );
  });

  it('should dismiss on a fast flick in the drag direction', () => {
    expect(shouldDismissSwipe({ offset: 20, velocity: 600, width: 400 })).toBe(
      true,
    );
  });

  it('should not dismiss a flick back towards the origin', () => {
    expect(shouldDismissSwipe({ offset: 20, velocity: -600, width: 400 })).toBe(
      false,
    );
  });

  it('should not dismiss by distance when the width is unknown', () => {
    expect(shouldDismissSwipe({ offset: 50, velocity: 0, width: 0 })).toBe(
      false,
    );
  });
});
