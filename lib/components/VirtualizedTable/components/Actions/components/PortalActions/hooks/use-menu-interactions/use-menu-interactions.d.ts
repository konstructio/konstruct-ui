import { PointerEvent as ReactPointerEvent } from '../../../../../../../../../node_modules/react';
import { Params } from './use-menu-interactions.types';
export declare const useMenuInteractions: ({ isOpen, menuRef, openOnHover, triggerRef, setIsOpen, }: Params) => {
    closeMenu: () => void;
    handlePointerEnter: (event: ReactPointerEvent<HTMLElement>) => void;
    handlePointerLeave: (event: ReactPointerEvent<HTMLElement>) => void;
    handleTriggerClick: () => void;
    handleTriggerPointerDown: (event: ReactPointerEvent<HTMLElement>) => void;
    handleButtonPointerLeave: () => void;
    openMenu: () => void;
    selectAndClose: () => void;
};
