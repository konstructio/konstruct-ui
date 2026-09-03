import { PointerEvent } from '../../../../../../../../../node_modules/react';
import { Params } from './use-menu-interactions.types';
export declare const useMenuInteractions: ({ isOpen, menuRef, triggerRef, setIsOpen, }: Params) => {
    closeMenu: () => void;
    handlePointerEnter: (event: PointerEvent<HTMLElement>) => void;
    handlePointerLeave: (event: PointerEvent<HTMLElement>) => void;
    handleTriggerClick: () => void;
    handleTriggerPointerDown: (event: PointerEvent<HTMLElement>) => void;
    openMenu: () => void;
};
