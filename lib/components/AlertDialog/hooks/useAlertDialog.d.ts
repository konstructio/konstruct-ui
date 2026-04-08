import { UseAlertiDialogProps } from '../AlertDialog.types';
export declare const useAlertDialog: ({ onConfirm }: UseAlertiDialogProps) => {
    isOpen: boolean;
    handleCancel: () => void;
    handleConfirm: () => void;
    handleOpen: () => void;
};
