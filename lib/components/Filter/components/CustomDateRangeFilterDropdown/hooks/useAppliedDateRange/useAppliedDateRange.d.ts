import { DateRange, DateRangeWithTime } from '../../../../../DateRangePicker/DateRangePicker.types';
import { Props } from './useAppliedDateRange.types';
export declare const useAppliedDateRange: ({ defaultRange, onApply }: Props) => {
    appliedRange: DateRangeWithTime | undefined;
    applyRange: (range: DateRange | undefined) => void;
    clearAppliedRange: () => void;
};
