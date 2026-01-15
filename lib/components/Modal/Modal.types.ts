import { PropsWithChildren, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';

import { modalVariants } from './components/Wrapper/Wrapper.variants';
import { Theme } from '@/domain/theme';

/**
 * Props for the Modal component.
 *
 * @example
 * ```tsx
 * <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
 *   <Modal.Header>Title</Modal.Header>
 *   <Modal.Body>Content</Modal.Body>
 *   <Modal.Footer>
 *     <Button onClick={() => setIsOpen(false)}>Close</Button>
 *   </Modal.Footer>
 * </Modal>
 * ```
 */
export interface ModalProps
  extends PropsWithChildren, VariantProps<typeof modalVariants> {
  /** CSS classes for the close button */
  buttonCloseClassName?: string;
  /** Additional CSS classes for the modal */
  className?: string;
  /** DOM element to portal the modal into (defaults to document.body) */
  container?: Element | DocumentFragment;
  /** Whether the modal is open */
  isOpen?: boolean;
  /** Show the X close button in the corner */
  showCloseButton?: boolean;
  /** Theme override for this component */
  theme?: Theme;
  /** Callback when modal is closed (Escape key or close button) */
  onClose?: () => void;
}

/**
 * Props for Modal sub-components (Header, Body, Footer).
 */
export type ModalChildProps = {
  /** Content of the modal section */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Merge props onto child element */
  asChild?: boolean;
};
