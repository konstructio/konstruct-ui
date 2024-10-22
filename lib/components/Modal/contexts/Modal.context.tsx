import { createContext } from 'react';

import { State } from './Modal.types';

const initialState: State = {
  content: undefined,
  isOpen: false,
  shouldShowClose: true,
  onOpen: () => {
    throw new Error('onOpen not implemented');
  },
  onClose: () => {
    throw new Error('onClose not implemented');
  },
  setContentAndOpen: () => {
    throw new Error(
      'ModalContext: setContentAndOpen function must be overridden',
    );
  },
};

export const ModalContext = createContext<State>(initialState);
