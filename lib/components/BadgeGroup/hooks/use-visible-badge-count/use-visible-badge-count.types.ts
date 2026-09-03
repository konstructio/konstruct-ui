import { RefObject } from 'react';

import { BadgeGroupItem } from '../../BadgeGroup.types';

export type Params = {
  containerRef: RefObject<HTMLElement | null>;
  gapPx: number;
  horizontalPaddingPx: number;
  items: BadgeGroupItem[];
  maxWidth?: number;
  probeRef: RefObject<HTMLElement | null>;
};
