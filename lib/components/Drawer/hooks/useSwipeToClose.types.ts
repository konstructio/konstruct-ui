import { TouchEvent } from 'react';

export type UseSwipeToCloseProps = {
  /** Whether a swipe towards the edge closes the drawer */
  enabled: boolean;
  /** Edge the drawer docks to; the swipe closes towards it */
  position: 'left' | 'right';
  /** Called when the swipe passes the distance or velocity threshold */
  onClose?: () => void;
};

export type UseSwipeToCloseReturn = {
  /** Horizontal offset the panel follows while swiping, null when idle */
  swipeOffset: number | null;
  handleTouchStart: (event: TouchEvent<HTMLElement>) => void;
  handleTouchMove: (event: TouchEvent<HTMLElement>) => void;
  handleTouchEnd: (event: TouchEvent<HTMLElement>) => void;
  handleTouchCancel: () => void;
};
