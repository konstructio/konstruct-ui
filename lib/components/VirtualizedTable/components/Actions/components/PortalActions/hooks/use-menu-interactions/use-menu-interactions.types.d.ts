import { Dispatch, RefObject, SetStateAction } from '../../../../../../../../../node_modules/react';
export type Params = {
    isOpen: boolean;
    menuRef: RefObject<HTMLDivElement | null>;
    triggerRef: RefObject<HTMLDivElement | null>;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};
