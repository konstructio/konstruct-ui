import { Props } from './useSelectedPreset.types';
export declare const useSelectedPreset: ({ defaultRange }: Props) => {
    appliedPreset: string | null;
    selectedPreset: string | null;
    applyPreset: (preset: string | null) => void;
    clearSelectedPreset: () => void;
    markManualSelection: () => boolean;
    revertSelectedPreset: () => void;
    selectPreset: (preset: string | null, resolvesToWindow: boolean) => void;
};
