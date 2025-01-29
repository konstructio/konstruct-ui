import { PropsWithChildren } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { buttonAlertDialogVariants } from './AlertDialog.variants';
export interface AlertDialogProps extends PropsWithChildren, VariantProps<typeof buttonAlertDialogVariants> {
    buttonCancelClassName?: string;
    buttonCancelText?: string;
    buttonConfirmClassName?: string;
    buttonConfirmText?: string;
    buttonText?: string;
    className?: string;
    description?: string;
    o?: string;
    title?: string;
    onConfirm?: () => void;
}
export type UseAlertiDialogProps = {
    onConfirm: AlertDialogProps['onConfirm'];
};
