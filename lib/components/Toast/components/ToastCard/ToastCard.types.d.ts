import { ToastItem } from '../../Toast.types';
export type Props = {
    closeLabel: string;
    expanded: boolean;
    frontHeight: number;
    index: number;
    offset: number;
    reducedMotion: boolean;
    restartOnLeave: boolean;
    resumeDelay: number;
    toast: ToastItem;
    total: number;
    visible: boolean;
    onDismiss: () => void;
    onExited: (id: string) => void;
    onHeightChange: (id: string, height: number) => void;
};
