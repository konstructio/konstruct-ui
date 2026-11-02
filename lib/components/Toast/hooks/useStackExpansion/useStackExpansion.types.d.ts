import { HTMLAttributes, RefObject } from '../../../../../node_modules/react';
export type StackRegionHandlers = Pick<HTMLAttributes<HTMLElement>, 'onPointerEnter' | 'onPointerLeave' | 'onPointerDown' | 'onFocus' | 'onBlur'>;
export type UseStackExpansionResult = {
    expanded: boolean;
    regionRef: RefObject<HTMLElement | null>;
    regionHandlers: StackRegionHandlers;
};
