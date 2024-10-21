import { createContext, ReactNode, useCallback, useState } from 'react';

import { useToggle } from '../../../hooks';

type State = {
  isOpen: boolean;
  content: string | ReactNode;
  shouldShowClose: boolean;
  onOpen: () => void;
  onClose: () => void;
  setContentAndOpen: (
    content: string | ReactNode,
    showCloseButton?: boolean,
  ) => void;
};

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

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [shouldShowClose, setShouldShowClose] = useState(true);
  const [isOpen, toggleState] = useToggle(false);
  const [content, setContent] = useState<string | ReactNode>();

  const handleOpen = useCallback(() => toggleState(true), [toggleState]);
  const handleClose = useCallback(() => toggleState(false), [toggleState]);
  const setContentAndOpen = (
    content: string | ReactNode,
    showCloseButton: boolean = true,
  ) => {
    setContent(content);
    handleOpen();
    setShouldShowClose(showCloseButton);
  };

  return (
    <ModalContext.Provider
      value={{
        content,
        isOpen,
        shouldShowClose,
        onClose: handleClose,
        onOpen: handleOpen,
        setContentAndOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
