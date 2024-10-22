import { FC } from 'react';
import { createPortal } from 'react-dom';

import { useModal } from './hooks';
import { WrapperModal } from './components';
import { ModalProps } from './Modal.types';

export const Modal: FC<ModalProps> = ({ ...delegated }) => {
  const { isOpen } = useModal();

  if (!isOpen) {
    return null;
  }

  return createPortal(<WrapperModal {...delegated} />, document.body);
};
