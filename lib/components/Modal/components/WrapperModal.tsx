import { FC, useEffect, useRef } from 'react';
import { X as Close } from 'react-feather';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';

import { useTheme } from '../../../contexts';
import { useModal } from '../hooks';

import { WrapperModalProps } from './WrapperModal.types';
import { modalWrapperVariants } from './WrapperModal.variants';

export const WrapperModal: FC<WrapperModalProps> = ({
  children,
  theme,
  className,
}) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const { content, onClose } = useModal();
  const { theme: contextTheme } = useTheme();

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

  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className="fixed inset-0 grid place-content-center">
          <div
            className="absolute inset-0 bg-black opacity-75"
            onClick={onClose}
          />

          <div
            className={modalWrapperVariants({
              className,
              theme: theme ?? contextTheme,
            })}
            role="dialog"
            aria-modal="true"
          >
            <button
              ref={closeBtnRef}
              className="absolute right-1.5 top-1.5"
              onClick={onClose}
            >
              <Close />
              <span className="sr-only">Dismiss modal</span>
            </button>

            {children ?? content}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
};
