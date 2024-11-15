import { FC } from 'react';
import { createPortal } from 'react-dom';

import { Body, Footer, Header, Wrapper } from './components';
import { useModal } from './hooks';
import { ModalChildProps, ModalProps } from './Modal.types';

const Modal: FC<ModalProps> & {
  Header: FC<ModalChildProps>;
  Body: FC<ModalChildProps>;
  Footer: FC<ModalChildProps>;
} = ({ ...delegated }) => {
  const { isOpen } = useModal();

  if (!isOpen) {
    return null;
  }

  return createPortal(<Wrapper {...delegated} />, document.body);
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export { Modal };
