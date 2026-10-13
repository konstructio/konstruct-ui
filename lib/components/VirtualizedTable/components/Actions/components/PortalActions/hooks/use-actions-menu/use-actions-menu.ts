import {
  Dispatch,
  SetStateAction,
  useCallback,
  useId,
  useRef,
  useState,
} from 'react';

import { useMenuInteractions } from '../use-menu-interactions/use-menu-interactions';
import { useMenuKeyboardNavigation } from '../use-menu-keyboard-navigation/use-menu-keyboard-navigation';
import { useRowHighlight } from '../use-row-highlight/use-row-highlight';

import { Params } from './use-actions-menu.types';

export const useActionsMenu = ({ openOnHover }: Params) => {
  const [isOpen, setIsOpenState] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const setIsOpen = useCallback<Dispatch<SetStateAction<boolean>>>((value) => {
    setHasOpened(true);
    setIsOpenState(value);
  }, []);

  const {
    closeMenu,
    handlePointerEnter,
    handlePointerLeave,
    handleTriggerClick,
    handleTriggerPointerDown,
    handleButtonPointerLeave,
    openMenu,
    selectAndClose,
  } = useMenuInteractions({
    isOpen,
    menuRef,
    openOnHover,
    triggerRef,
    setIsOpen,
  });

  const { handleMenuKeyDown, handleTriggerKeyDown } = useMenuKeyboardNavigation(
    { buttonRef, isOpen, menuRef, closeMenu, openMenu },
  );

  useRowHighlight({ isOpen, triggerRef });

  return {
    buttonRef,
    hasOpened,
    isOpen,
    menuId,
    menuRef,
    triggerRef,
    closeMenu,
    handleMenuKeyDown,
    handlePointerEnter,
    handlePointerLeave,
    handleTriggerClick,
    handleTriggerKeyDown,
    handleTriggerPointerDown,
    handleButtonPointerLeave,
    selectAndClose,
  };
};
