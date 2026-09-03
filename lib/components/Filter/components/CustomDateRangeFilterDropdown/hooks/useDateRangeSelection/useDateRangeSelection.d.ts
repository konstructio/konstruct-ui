import { DateRange, DateRangeWithTime } from '../../../../../DateRangePicker/DateRangePicker.types';
import { Props } from './useDateRangeSelection.types';
export declare const useDateRangeSelection: ({ defaultRange }: Props) => {
    selectedRange: DateRange | undefined;
    selectRange: (range: DateRange) => void;
    handleRangeChange: (range: DateRangeWithTime) => void;
    clearSelectedRange: () => void;
};
