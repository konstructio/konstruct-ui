import { ReactNode } from '../../../../node_modules/react';
export type State = {
    isOpen: boolean;
    content: string | ReactNode;
    shouldShowClose: boolean;
    onOpen: () => void;
    onClose: () => void;
    setContentAndOpen: (content: string | ReactNode, showCloseButton?: boolean) => void;
};
