import { useCallback, useState } from 'react';

import { UseAlertiDialogProps } from '../AlertDialog.types';

export const useAlertDialog = ({ onConfirm }: UseAlertiDialogProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleCancel = useCallback(() => setOpen(false), []);
  const handleConfirm = useCallback(() => {
    onConfirm?.();
    setOpen(false);
  }, [onConfirm]);

  return { isOpen, handleCancel, handleConfirm, handleOpen };
};
