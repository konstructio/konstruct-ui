import { FC } from '../../../node_modules/react';
import { ModalChildProps, ModalProps } from './Modal.types';
/**
 * A modal dialog component with Header, Body, and Footer sub-components.
 * Supports keyboard navigation (Escape to close) and portals to document.body.
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
 *
 * <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
 *   <Modal.Header>Confirm Action</Modal.Header>
 *   <Modal.Body>
 *     Are you sure you want to proceed?
 *   </Modal.Body>
 *   <Modal.Footer>
 *     <Button variant="secondary" onClick={() => setIsOpen(false)}>
 *       Cancel
 *     </Button>
 *     <Button onClick={handleConfirm}>Confirm</Button>
 *   </Modal.Footer>
 * </Modal>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-modal--docs Storybook}
 */
declare const Modal: FC<ModalProps> & {
    Header: FC<ModalChildProps>;
    Body: FC<ModalChildProps>;
    Footer: FC<ModalChildProps>;
};
export { Modal };
