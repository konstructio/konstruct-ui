'use client';
import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { FC, TouchEvent, useId, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X as Close } from 'react-feather';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';

import { cn } from '@/utils';

import {
  Body,
  BodyProps,
  Footer,
  FooterProps,
  Header,
  HeaderProps,
} from './components';
import { DrawerContext } from './contexts';
import { Props } from './Drawer.types';
import {
  buttonCloseVariants,
  drawerVariants,
  overlayVariants,
  resizeHandleVariants,
} from './Drawer.variants';
import { DEFAULT_WIDTH, SWIPE_THRESHOLD } from './constants';
import { useDrawer } from './hooks';

/**
 * A drawer/panel component that slides in from the side of the screen.
 * Supports Header, Body, and Footer sub-components, keyboard navigation (Escape to close),
 * and optional resizing.
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
 *
 * <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
 *   <Drawer.Header>Panel Title</Drawer.Header>
 *   <Drawer.Body>
 *     Panel content goes here.
 *   </Drawer.Body>
 *   <Drawer.Footer>
 *     <Button variant="secondary" onClick={() => setIsOpen(false)}>
 *       Cancel
 *     </Button>
 *     <Button onClick={handleConfirm}>Confirm</Button>
 *   </Drawer.Footer>
 * </Drawer>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-drawer--docs Storybook}
 */
const Drawer: FC<Props> & {
  Header: FC<HeaderProps>;
  Body: FC<BodyProps>;
  Footer: FC<FooterProps>;
} = ({
  canResize = false,
  children,
  className,
  classNames,
  container,
  defaultWidth = DEFAULT_WIDTH,
  isOpen,
  maxWidth,
  minWidth,
  position = 'right',
  showCloseButton = true,
  closeOnSwipe = true,
  fullScreenOnMobile = true,
  initialFocus = 'first',
  theme,
  onClose,
}) => {
  const headerId = useId();
  const swipeStartRef = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches?.[0];

    swipeStartRef.current = touch
      ? { x: touch.clientX, y: touch.clientY }
      : null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = swipeStartRef.current;
    const touch = event.changedTouches?.[0];

    swipeStartRef.current = null;

    if (!closeOnSwipe || !start || !touch) return;

    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;
    const towardsEdge =
      position === 'left'
        ? deltaX <= -SWIPE_THRESHOLD
        : deltaX >= SWIPE_THRESHOLD;

    if (towardsEdge && Math.abs(deltaX) > Math.abs(deltaY)) {
      onClose?.();
    }
  };

  const {
    handleKeyDown,
    handleMouseDown,
    isAnimating,
    isVisible,
    translateClass,
    width,
  } = useDrawer({
    canResize,
    defaultWidth,
    isOpen,
    maxWidth,
    minWidth,
    position,
    onClose,
  });

  const contextValue = useMemo(
    () => ({ classNames, headerId }),
    [classNames, headerId],
  );

  if (!isVisible) {
    return null;
  }

  const drawerContent = (
    <DrawerContext.Provider value={contextValue}>
      <RemoveScroll>
        <div
          className={cn('fixed inset-0 z-40', classNames?.root)}
          data-theme={theme}
        >
          {/* Background overlay */}
          <div
            className={cn(
              overlayVariants(),
              {
                'opacity-55': isAnimating,
                'opacity-0': !isAnimating,
              },
              classNames?.overlay,
            )}
            aria-hidden="true"
            onClick={onClose}
            role="presentation"
          />

          {/* Drawer panel */}
          <FocusLock returnFocus className="contents">
            <div
              className={cn(
                drawerVariants({ position, fullScreenOnMobile }),
                translateClass,
                classNames?.panel,
                className,
              )}
              style={{ width: canResize ? width : defaultWidth }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              role="dialog"
              aria-modal="true"
              aria-labelledby={headerId}
              {...(initialFocus === 'panel'
                ? { tabIndex: -1, 'data-autofocus': true }
                : {})}
            >
              {/* Resize handle */}
              {canResize && (
                <button
                  type="button"
                  aria-label="Resize drawer"
                  className={cn(
                    resizeHandleVariants({ position }),
                    classNames?.resizeHandle,
                  )}
                  onMouseDown={handleMouseDown}
                  onKeyDown={handleKeyDown}
                />
              )}

              {/* Close button */}
              {showCloseButton && (
                <button
                  className={cn(buttonCloseVariants(), classNames?.closeButton)}
                  onClick={onClose}
                  type="button"
                >
                  <Close size={20} />
                  <VisuallyHidden>Dismiss drawer</VisuallyHidden>
                </button>
              )}

              {/* Content */}
              <div
                className={cn(
                  'flex flex-1 flex-col h-full overflow-hidden',
                  classNames?.content,
                )}
              >
                {children}
              </div>
            </div>
          </FocusLock>
        </div>
      </RemoveScroll>
    </DrawerContext.Provider>
  );

  return createPortal(drawerContent, container || document.body);
};

Drawer.Header = Header;
Drawer.Body = Body;
Drawer.Footer = Footer;

export { Drawer };
