'use client';
import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Body, Footer, Header, Wrapper } from './components';
import { ChildProps, Props } from './Modal.types';

/**
 * A modal dialog component with Header, Body, and Footer sub-components.
 * Supports keyboard navigation (Escape to close) and portals to document.body.
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
 *
 * <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
 *   <Modal.Header>Confirm Action</Modal.Header>
 *   <Modal.Body>
 *     Are you sure you want to proceed?
 *   </Modal.Body>
 *   <Modal.Footer>
 *     <Button variant="secondary" onClick={() => setIsOpen(false)}>
 *       Cancel
 *     </Button>
 *     <Button onClick={handleConfirm}>Confirm</Button>
 *   </Modal.Footer>
 * </Modal>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-modal--docs Storybook}
 */
const Modal: FC<Props> & {
  Header: FC<ChildProps>;
  Body: FC<ChildProps>;
  Footer: FC<ChildProps>;
} = ({ isOpen, onClose, container, theme, ...delegated }) => {
  const anchorRef = useRef<HTMLSpanElement | null>(null);
  const [themeContainer, setThemeContainer] = useState<HTMLElement | null>(
    null,
  );

  useEffect(() => {
    if (!anchorRef.current || theme || container) {
      return;
    }

    const parent = anchorRef.current.closest('[data-theme]');

    if (parent) {
      setThemeContainer(parent as HTMLElement);
    }
  }, [theme, container]);

  useEffect(() => {
    const controller = new AbortController();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, [onClose]);

  return (
    <>
      <span ref={anchorRef} data-testid="modal-anchor" hidden />

      {isOpen &&
        createPortal(
          <Wrapper {...delegated} theme={theme} onClose={onClose} />,
          container || themeContainer || document.body,
        )}
    </>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export { Modal };
