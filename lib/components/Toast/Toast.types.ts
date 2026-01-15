import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren, ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { toastVariants } from './Toast.variants';

/**
 * Props for the Toast component.
 *
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <Toast
 *   open={open}
 *   setOpen={setOpen}
 *   title="Success"
 *   description="Your changes have been saved"
 *   variant="success"
 * >
 *   <Button onClick={() => setOpen(true)}>Show Toast</Button>
 * </Toast>
 * ```
 */
export interface ToastProps
  extends PropsWithChildren, VariantProps<typeof toastVariants> {
  /** Additional CSS classes for the toast */
  className?: string;
  /** CSS classes for the close button */
  closeButtonClassName?: string;
  /** Description text or element */
  description: string | ReactNode;
  /** CSS classes for the description */
  descriptionClassName?: string;
  /** Auto-dismiss duration in ms (default: 5000) */
  duration?: number;
  /** Controlled open state */
  open: boolean;
  /** Show close button (default: true) */
  showCloseButton?: boolean;
  /** Theme override for this component */
  theme?: Theme;
  /** Title text or element */
  title: string | ReactNode;
  /** CSS classes for the title */
  titleClassName?: string;
  /** Callback to update open state */
  setOpen: (open: boolean) => void;
}
