import { DateFilterDropdownProps } from './DateFilterDropdown.types';
export declare const useDateFilterDropdown: ({ onApply, countryCode, }: Pick<DateFilterDropdownProps, "onApply" | "countryCode">) => {
    id: string;
    appliedDay: string | undefined;
    isOpen: boolean;
    selectedDay: Date | undefined;
    wrapperRef: import('../../../../../node_modules/react').RefObject<HTMLDivElement | null>;
    handleApply: () => void;
    handleOpen: () => void;
    handleSelect: (date: Date) => void;
    handleReset: () => void;
};
