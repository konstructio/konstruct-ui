import { TimeFilterDropdownProps, TimePreset } from './TimeFilterDropdown.types';
export declare const useTimeFilterDropdown: ({ onApply, format, }: Pick<TimeFilterDropdownProps, "onApply" | "format">) => {
    id: string;
    appliedLabel: string | undefined;
    isOpen: boolean;
    selectedTime: Date | undefined;
    selectedPresetLabel: string | undefined;
    wrapperRef: import('../../../../../node_modules/react').RefObject<HTMLDivElement | null>;
    handleApply: () => void;
    handleOpen: () => void;
    handleSelectPreset: (preset: TimePreset) => void;
    handleSelectCustom: (time: Date) => void;
    handleReset: () => void;
};
