import { KeyboardEvent, useCallback, useLayoutEffect, useRef } from 'react';

import { Params } from './use-menu-keyboard-navigation.types';

export const useMenuKeyboardNavigation = ({
  buttonRef,
  isOpen,
  menuRef,
  closeMenu,
  openMenu,
}: Params) => {
  const pendingFocusRef = useRef<'first' | 'last' | null>(null);

  const getMenuItems = useCallback(() => {
    return Array.from(
      menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? [],
    );
  }, [menuRef]);

  const focusMenuItem = useCallback(
    (index: number) => {
      const items = getMenuItems();

      if (items.length === 0) {
        return;
      }

      items[(index + items.length) % items.length]?.focus();
    },
    [getMenuItems],
  );

  const closeAndRefocus = useCallback(() => {
    closeMenu();
    buttonRef.current?.focus();
  }, [buttonRef, closeMenu]);

  useLayoutEffect(() => {
    if (isOpen && pendingFocusRef.current) {
      focusMenuItem(pendingFocusRef.current === 'first' ? 0 : -1);
      pendingFocusRef.current = null;
    }
  }, [isOpen, focusMenuItem]);

  const handleTriggerKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.target as Node)) {
        return;
      }

      const isTabIntoMenu = event.key === 'Tab' && !event.shiftKey && isOpen;

      if (event.key === 'ArrowDown' || isTabIntoMenu) {
        event.preventDefault();

        if (isOpen) {
          focusMenuItem(0);
        } else {
          pendingFocusRef.current = 'first';
          openMenu();
        }
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();

        if (isOpen) {
          focusMenuItem(-1);
        } else {
          pendingFocusRef.current = 'last';
          openMenu();
        }
      }
    },
    [isOpen, focusMenuItem, openMenu],
  );

  const handleMenuKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const items = getMenuItems();
      const currentIndex = items.indexOf(document.activeElement as HTMLElement);

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          focusMenuItem(currentIndex + 1);
          break;
        case 'ArrowUp':
          event.preventDefault();
          focusMenuItem(currentIndex - 1);
          break;
        case 'Home':
          event.preventDefault();
          focusMenuItem(0);
          break;
        case 'End':
          event.preventDefault();
          focusMenuItem(-1);
          break;
        case 'Tab': {
          event.preventDefault();
          const nextIndex = event.shiftKey
            ? currentIndex - 1
            : currentIndex + 1;

          if (nextIndex < 0 || nextIndex >= items.length) {
            closeAndRefocus();
          } else {
            focusMenuItem(nextIndex);
          }
          break;
        }
        case 'Escape':
          event.preventDefault();
          closeAndRefocus();
          break;
      }
    },
    [getMenuItems, focusMenuItem, closeAndRefocus],
  );

  return { handleMenuKeyDown, handleTriggerKeyDown };
};
