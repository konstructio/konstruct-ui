import {
  PointerEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';

import { CLOSE_DELAY_MS, MENU_GAP_PX } from '../../constants';

import { Params } from './use-menu-interactions.types';

export const useMenuInteractions = ({
  isOpen,
  menuRef,
  openOnHover,
  triggerRef,
  setIsOpen,
}: Params) => {
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const pointerTypeRef = useRef<string | null>(null);
  const isHoverSuppressedRef = useRef(false);

  const openMenu = useCallback(() => {
    clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  }, [setIsOpen]);

  const closeMenu = useCallback(() => {
    clearTimeout(closeTimeoutRef.current);
    setIsOpen(false);
  }, [setIsOpen]);

  const selectAndClose = useCallback(() => {
    isHoverSuppressedRef.current = true;
    closeMenu();
  }, [closeMenu]);

  const scheduleClose = useCallback(() => {
    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, CLOSE_DELAY_MS);
  }, [setIsOpen]);

  const handlePointerEnter = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (
        !openOnHover ||
        isHoverSuppressedRef.current ||
        event.pointerType === 'touch'
      ) {
        return;
      }

      openMenu();
    },
    [openMenu, openOnHover],
  );

  const handlePointerLeave = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (!openOnHover || event.pointerType === 'touch') {
        return;
      }

      scheduleClose();
    },
    [openOnHover, scheduleClose],
  );

  const handleButtonPointerLeave = useCallback(() => {
    isHoverSuppressedRef.current = false;
  }, []);

  const handleTriggerPointerDown = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      pointerTypeRef.current = event.pointerType;
    },
    [],
  );

  const handleTriggerClick = useCallback(() => {
    const pointerType = pointerTypeRef.current;
    pointerTypeRef.current = null;
    isHoverSuppressedRef.current = false;
    clearTimeout(closeTimeoutRef.current);

    if (openOnHover && pointerType && pointerType !== 'touch') {
      setIsOpen(true);

      return;
    }

    setIsOpen((previous) => {
      return !previous;
    });
  }, [openOnHover, setIsOpen]);

  useEffect(() => {
    return () => {
      clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    const menu = menuRef.current;

    if (!trigger || !menu) {
      return;
    }

    const rect = trigger.getBoundingClientRect();
    const fitsBelow =
      rect.bottom + MENU_GAP_PX + menu.offsetHeight <= window.innerHeight;
    const top = fitsBelow
      ? rect.bottom + MENU_GAP_PX
      : rect.top - MENU_GAP_PX - menu.offsetHeight;

    menu.style.top = `${Math.max(top, MENU_GAP_PX)}px`;
    menu.style.left = `${Math.max(rect.right - menu.offsetWidth, MENU_GAP_PX)}px`;
  }, [menuRef, triggerRef]);

  useLayoutEffect(() => {
    if (isOpen) {
      updatePosition();
    }
  }, [isOpen, updatePosition]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const controller = new AbortController();

    const handleMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;
      const isInside =
        triggerRef.current?.contains(target) ||
        menuRef.current?.contains(target);

      if (!isInside) {
        closeMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleMouseDown, {
      signal: controller.signal,
    });
    document.addEventListener('keydown', handleKeyDown, {
      signal: controller.signal,
    });
    document.addEventListener('scroll', updatePosition, {
      signal: controller.signal,
      capture: true,
      passive: true,
    });
    window.addEventListener('resize', updatePosition, {
      signal: controller.signal,
      passive: true,
    });
    window.addEventListener('blur', closeMenu, { signal: controller.signal });

    return () => {
      controller.abort();
    };
  }, [isOpen, menuRef, triggerRef, closeMenu, updatePosition]);

  return {
    closeMenu,
    handlePointerEnter,
    handlePointerLeave,
    handleTriggerClick,
    handleTriggerPointerDown,
    handleButtonPointerLeave,
    openMenu,
    selectAndClose,
  };
};
