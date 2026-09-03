import { RefObject } from 'react';

export type Params = {
  buttonRef: RefObject<HTMLButtonElement | null>;
  isOpen: boolean;
  menuRef: RefObject<HTMLDivElement | null>;
  closeMenu: () => void;
  openMenu: () => void;
};
