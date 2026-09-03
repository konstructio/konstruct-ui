import { Options } from './useCopyToClipboard.types';
export declare const useCopyToClipboard: ({ resetDelay, onCopy, onCopyError, }?: Options) => {
    copied: boolean;
    copy: (text: string) => Promise<boolean>;
};
