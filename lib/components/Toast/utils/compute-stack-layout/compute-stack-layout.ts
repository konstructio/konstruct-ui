import { COLLAPSED_STEP_PX, EXPANDED_GAP_PX } from '../../constants';

import { StackLayout, StackLayoutInput } from './compute-stack-layout.types';

export const computeStackLayout = ({
  expanded,
  heights,
  maxVisible,
  toasts,
}: StackLayoutInput): StackLayout => {
  const front = toasts[0];
  const frontHeight = front ? (heights[front.id] ?? 0) : 0;

  if (!expanded) {
    const stackedBehind = Math.min(toasts.length - 1, maxVisible - 1);

    return {
      offsets: toasts.map((_, index) => {
        return index * COLLAPSED_STEP_PX;
      }),
      frontHeight,
      regionHeight: Math.max(
        0,
        frontHeight + stackedBehind * COLLAPSED_STEP_PX,
      ),
    };
  }

  let stackHeight = 0;
  const offsets = toasts.map((toast) => {
    const offset = stackHeight;
    stackHeight += (heights[toast.id] ?? 0) + EXPANDED_GAP_PX;

    return offset;
  });

  return {
    offsets,
    frontHeight,
    regionHeight: Math.max(0, stackHeight - EXPANDED_GAP_PX),
  };
};
