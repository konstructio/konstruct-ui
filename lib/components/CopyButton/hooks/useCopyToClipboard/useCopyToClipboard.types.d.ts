export type Options = {
    resetDelay?: number;
    onCopy?: (text: string) => void;
    onCopyError?: (error: unknown) => void;
};
