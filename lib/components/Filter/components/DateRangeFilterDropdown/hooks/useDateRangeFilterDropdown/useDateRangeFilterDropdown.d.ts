import { DateRange, DateRangeWithTime } from '../../../../../DateRangePicker/DateRangePicker.types';
import { Props } from '../../DateRangeFilterDropdown.types';
export declare const useDateRangeFilterDropdown: ({ defaultRange, onApply, countryCode, }: Pick<Props, "defaultRange" | "onApply" | "countryCode">) => {
    id: string;
    appliedRange: string | undefined;
    isOpen: boolean;
    selectedRange: DateRange | undefined;
    handleApply: () => void;
    handleOpenChange: (open: boolean) => void;
    handleRangeChange: (range: DateRangeWithTime) => void;
    handleReset: () => void;
};
