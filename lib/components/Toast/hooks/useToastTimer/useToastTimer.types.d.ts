export type UseToastTimerOptions = {
    duration: number;
    paused: boolean;
    restart: boolean;
    resumeDelay: number;
    onExpire: () => void;
};
