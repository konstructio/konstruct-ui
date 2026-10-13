import { RefObject } from '../../../../../node_modules/react';
import { BadgeGroupItem } from '../../BadgeGroup.types';
export type Params = {
    containerRef: RefObject<HTMLElement | null>;
    gapPx: number;
    horizontalPaddingPx: number;
    items: BadgeGroupItem[];
    maxWidth?: number;
    probeRef: RefObject<HTMLElement | null>;
};
