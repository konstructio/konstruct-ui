import { ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { Props as ButtonProps } from '../Button/Button.types';

export type Props = {
  /** Label of the cancel button */
  cancelLabel?: ReactNode;
  /** Extra content rendered below the description, e.g. an Alert */
  children?: ReactNode;
  /** Additional CSS classes for the dialog panel */
  className?: string;
  /** Additional CSS classes for the input the user types the confirmation into */
  confirmationInputClassName?: string;
  /** Accessible name of the confirmation input; defaults to "Type <text> to confirm" */
  confirmationInputLabel?: string;
  /** Custom prompt rendered above the input; defaults to "Type <text> to confirm" with a copyable chip */
  confirmationPrompt?: ReactNode;
  /** When set, the confirm button stays disabled until the user types this exact text */
  confirmationText?: string;
  /** Label of the confirm button */
  confirmLabel?: ReactNode;
  /** Additional CSS classes for the overlay container, e.g. to raise its z-index */
  containerClassName?: string;
  /** Accessible name of the copy button next to the confirmation text */
  copyLabel?: string;
  /** Secondary text below the title */
  description?: ReactNode;
  /** Icon rendered next to the title; defaults to a warning icon coloured by `variant` */
  icon?: ReactNode;
  /** Whether the dialog is open */
  isOpen: boolean;
  /** Disables both buttons and swaps the confirm label for `pendingLabel` */
  isPending?: boolean;
  /** Label of the confirm button while `isPending` */
  pendingLabel?: ReactNode;
  /** Theme override for this component */
  theme?: Theme;
  /** Title of the dialog */
  title: ReactNode;
  /** Variant of the confirm button; also colours the default icon */
  variant?: Extract<ButtonProps['variant'], 'danger' | 'primary'>;
  /** Called when the user cancels, presses Escape or clicks the overlay */
  onClose: () => void;
  /** Called when the user confirms */
  onConfirm: () => void;
};

export type ConfirmDialogProps = Props;
