import { RefObject } from '../../node_modules/react';
type Target = RefObject<HTMLElement | null> | undefined;
export declare const useClickOutside: (refs: Target | Target[], onClickOutside: () => void) => void;
export {};
