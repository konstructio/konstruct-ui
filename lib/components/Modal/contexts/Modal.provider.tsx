import { ReactNode, useCallback, useMemo, useState } from 'react';

import { useToggle } from '../../../hooks';

import { ModalContext } from './Modal.context';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [shouldShowClose, setShouldShowClose] = useState(true);
  const [isOpen, toggleState] = useToggle(false);
  const [content, setContent] = useState<string | ReactNode>();

  const handleOpen = useCallback(() => toggleState(true), [toggleState]);
  const handleClose = useCallback(() => toggleState(false), [toggleState]);
  const setContentAndOpen = useCallback(
    (content: string | ReactNode, showCloseButton: boolean = true) => {
      setContent(content);
      handleOpen();
      setShouldShowClose(showCloseButton);
    },
    [handleOpen],
  );

  const value = useMemo(
    () => ({
      content,
      isOpen,
      shouldShowClose,
      onClose: handleClose,
      onOpen: handleOpen,
      setContentAndOpen,
    }),
    [
      content,
      isOpen,
      shouldShowClose,
      handleClose,
      handleOpen,
      setContentAndOpen,
    ],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
