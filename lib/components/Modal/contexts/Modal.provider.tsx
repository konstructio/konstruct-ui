import { ReactNode, useCallback, useState } from 'react';

import { useToggle } from '../../../hooks';

import { ModalContext } from './Modal.context';

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
