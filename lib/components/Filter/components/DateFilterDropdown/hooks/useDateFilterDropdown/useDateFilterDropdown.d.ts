import { Props } from '../../DateFilterDropdown.types';
export declare const useDateFilterDropdown: ({ onApply, countryCode, }: Pick<Props, "onApply" | "countryCode">) => {
    id: string;
    appliedDay: string | undefined;
    isOpen: boolean;
    selectedDay: Date | undefined;
    handleApply: () => void;
    handleOpenChange: (open: boolean) => void;
    handleSelect: (date: Date) => void;
    handleReset: () => void;
};
