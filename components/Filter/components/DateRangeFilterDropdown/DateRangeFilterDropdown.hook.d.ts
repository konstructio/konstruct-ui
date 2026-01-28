import { DateRange, DateRangeWithTime } from '../../../DateRangePicker/DateRangePicker.types';
import { DateRangeFilterDropdownProps } from './DateRangeFilterDropdown.types';
export declare const useDateRangeFilterDropdown: ({ defaultRange, onApply, countryCode, }: Pick<DateRangeFilterDropdownProps, "defaultRange" | "onApply" | "countryCode">) => {
    id: string;
    appliedRange: string | undefined;
    isOpen: boolean;
    selectedRange: DateRange | undefined;
    wrapperRef: import('../../../../../node_modules/react').RefObject<HTMLDivElement | null>;
    handleApply: () => void;
    handleOpen: () => void;
    handleRangeChange: (range: DateRangeWithTime) => void;
    handleReset: () => void;
};
