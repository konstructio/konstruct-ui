import { useState } from 'react';

import { UseAlertiDialogProps } from '../AlertDialog.types';

export const useAlertDialog = ({ onConfirm }: UseAlertiDialogProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    onConfirm?.();
    setOpen(false);
  };

  return { isOpen, handleCancel, handleConfirm, handleOpen };
};
