import {
  SWIPE_DISMISS_DISTANCE_RATIO,
  SWIPE_DISMISS_VELOCITY,
} from '../../constants';

import { SwipeInput } from './should-dismiss-swipe.types';

export const shouldDismissSwipe = ({
  offset,
  velocity,
  width,
}: SwipeInput): boolean => {
  if (Math.abs(velocity) > SWIPE_DISMISS_VELOCITY) {
    return Math.sign(velocity) === Math.sign(offset) || offset === 0;
  }

  return width > 0 && Math.abs(offset) > width * SWIPE_DISMISS_DISTANCE_RATIO;
};
