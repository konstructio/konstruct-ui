import { HTMLAttributes } from '../../../../../node_modules/react';
export type StackRegionHandlers = Pick<HTMLAttributes<HTMLElement>, 'onMouseEnter' | 'onMouseLeave' | 'onFocus' | 'onBlur'>;
export type UseStackExpansionResult = {
    expanded: boolean;
    regionHandlers: StackRegionHandlers;
};
