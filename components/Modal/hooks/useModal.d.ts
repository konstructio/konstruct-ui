export declare const useModal: () => {
    closeBtnRef: import('../../../../node_modules/react').RefObject<HTMLButtonElement>;
    isOpen: boolean;
    content: string | import('../../../../node_modules/react').ReactNode;
    shouldShowClose: boolean;
    onOpen: () => void;
    onClose: () => void;
    setContentAndOpen: (content: string | import('../../../../node_modules/react').ReactNode, showCloseButton?: boolean) => void;
};
