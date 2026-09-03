import { KeyboardEvent } from '../../../../../../../../../node_modules/react';
import { Params } from './use-menu-keyboard-navigation.types';
export declare const useMenuKeyboardNavigation: ({ buttonRef, isOpen, menuRef, closeMenu, openMenu, }: Params) => {
    handleMenuKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
    handleTriggerKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
};
