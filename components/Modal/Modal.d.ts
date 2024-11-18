import { FC } from '../../../node_modules/react';
import { ModalChildProps, ModalProps } from './Modal.types';
declare const Modal: FC<ModalProps> & {
    Header: FC<ModalChildProps>;
    Body: FC<ModalChildProps>;
    Footer: FC<ModalChildProps>;
};
export { Modal };
