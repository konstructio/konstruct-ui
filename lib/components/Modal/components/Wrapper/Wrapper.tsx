import { Children, FC, isValidElement } from 'react';
import { X as Close } from 'react-feather';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { useTheme } from '../../../../contexts';
import { useModal } from '../../hooks';
import { Modal } from '../../Modal';
import { ModalChildProps } from '../../Modal.types';

import { WrapperProps } from './Wrapper.types';
import { buttonCloseVariants, modalVariants } from './Wrapper.variants';

export const Wrapper: FC<WrapperProps> = ({
  children,
  theme,
  className,
  buttonCloseClassName,
}) => {
  const { content, onClose, closeBtnRef } = useModal();
  const { theme: contextTheme } = useTheme();

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
        <div className="fixed inset-0 grid place-content-center">
          <div
            className="absolute inset-0 bg-black opacity-75"
            onClick={onClose}
            role="presentation"
          />

          <div
            className={modalVariants({
              className,
              theme: theme ?? contextTheme,
            })}
            role="dialog"
            aria-modal="true"
          >
            {header}

            <button
              ref={closeBtnRef}
              className={buttonCloseVariants({
                className: buttonCloseClassName,
                theme: theme ?? contextTheme,
              })}
              onClick={onClose}
            >
              <Close />
              <VisuallyHidden>Dismiss modal</VisuallyHidden>
            </button>

            {body ?? others ?? content}

            {footer}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
};
