import { Dispatch, RefObject, SetStateAction } from 'react';

export type Params = {
  isOpen: boolean;
  menuRef: RefObject<HTMLDivElement | null>;
  openOnHover: boolean;
  triggerRef: RefObject<HTMLDivElement | null>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
