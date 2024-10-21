import { FC } from 'react';
import { createPortal } from 'react-dom';

import { useModal } from './hooks';
import { WrapperModal } from './components';

export const Modal: FC = () => {
  const { isOpen } = useModal();

  if (!isOpen) {
    return null;
  }

  return createPortal(<WrapperModal />, document.body);
};
