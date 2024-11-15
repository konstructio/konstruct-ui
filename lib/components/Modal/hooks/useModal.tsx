import { useContext, useEffect, useRef } from 'react';

import { ModalContext } from '../contexts/Modal.context';

export const useModal = () => {
  const context = useContext(ModalContext);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  const { onClose } = context;

  useEffect(() => {
    const currentlyFocusedElem = document.activeElement as HTMLElement;
    closeBtnRef.current?.focus();

    return () => {
      currentlyFocusedElem?.focus();
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, [onClose]);

  return { ...context, closeBtnRef };
};
