import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Children, FC, isValidElement } from 'react';
import { X as Close } from 'react-feather';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';

import { Modal } from '@/components/Modal/Modal';
import { ModalChildProps } from '@/components/Modal/Modal.types';
import { cn } from '@/utils';

import { WrapperProps } from './Wrapper.types';
import { buttonCloseVariants, modalVariants } from './Wrapper.variants';

export const Wrapper: FC<WrapperProps> = ({
  children,
  theme,
  className,
  buttonCloseClassName,
  onClose,
}) => {
  const header = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === Modal.Header,
  );

  const body = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === Modal.Body,
  );

  const footer = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === Modal.Footer,
  );

  const others = Children.toArray(children).filter(
    (child) =>
      !isValidElement(child) ||
      ![Modal.Header, Modal.Body, Modal.Footer].includes(
        child.type as FC<ModalChildProps>,
      ),
  );

  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div
          className="fixed inset-0 grid place-content-center"
          data-theme={theme}
        >
          <div
            className="absolute inset-0 bg-black opacity-75 animate-in fade-in-0"
            onClick={onClose}
            role="presentation"
          />

          <div
            className={cn(
              modalVariants({
                className,
              }),
            )}
            role="dialog"
            aria-modal="true"
          >
            {header}

            <button
              className={cn(
                buttonCloseVariants({
                  className: buttonCloseClassName,
                }),
              )}
              onClick={onClose}
            >
              <Close />
              <VisuallyHidden>Dismiss modal</VisuallyHidden>
            </button>

            {body ?? others}

            {footer}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
};
