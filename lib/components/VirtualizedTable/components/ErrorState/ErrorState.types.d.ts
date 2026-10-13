import { ReactNode } from '../../../../../node_modules/react';
export type Props = {
    className?: string;
    description?: ReactNode;
    icon?: ReactNode;
    retryLabel?: ReactNode;
    title?: ReactNode;
    onRetry?: () => void;
};
