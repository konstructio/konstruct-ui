import { DateRange, DateRangeWithTime } from '../../../DateRangePicker/DateRangePicker.types';
import { DateRangeFilterDropdownProps } from './DateRangeFilterDropdown.types';
export declare const useDateRangeFilterDropdown: ({ defaultRange, onApply, countryCode, }: Pick<DateRangeFilterDropdownProps, "defaultRange" | "onApply" | "countryCode">) => {
    id: string;
    appliedRange: string | undefined;
    isOpen: boolean;
    selectedRange: DateRange | undefined;
    handleApply: () => void;
    handleOpenChange: (open: boolean) => void;
    handleRangeChange: (range: DateRangeWithTime) => void;
    handleReset: () => void;
};
