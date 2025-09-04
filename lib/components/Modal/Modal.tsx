'use client';
import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Body, Footer, Header, Wrapper } from './components';
import { ModalChildProps, ModalProps } from './Modal.types';

const Modal: FC<ModalProps> & {
  Header: FC<ModalChildProps>;
  Body: FC<ModalChildProps>;
  Footer: FC<ModalChildProps>;
} = ({ isOpen, onClose, container, ...delegated }) => {
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

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <Wrapper {...delegated} onClose={onClose} />,
    container || document.body,
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export { Modal };
