import { Props, TimePreset } from '../../TimeFilterDropdown.types';
export declare const useTimeFilterDropdown: ({ onApply, format, }: Pick<Props, "onApply" | "format">) => {
    id: string;
    appliedLabel: string | undefined;
    isOpen: boolean;
    selectedTime: Date | undefined;
    selectedPresetLabel: string | undefined;
    handleApply: () => void;
    handleOpenChange: (open: boolean) => void;
    handleSelectPreset: (preset: TimePreset) => void;
    handleSelectCustom: (time: Date) => void;
    handleReset: () => void;
};
