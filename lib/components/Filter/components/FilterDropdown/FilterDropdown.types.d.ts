import { PropsWithChildren, ReactNode } from '../../../../../node_modules/react';
export type Props = PropsWithChildren & {
    isOpen: boolean;
    trigger: ReactNode;
    triggerClassName?: string;
    position?: 'left' | 'right';
    contentClassName?: string;
    onOpenChange: (open: boolean) => void;
};
