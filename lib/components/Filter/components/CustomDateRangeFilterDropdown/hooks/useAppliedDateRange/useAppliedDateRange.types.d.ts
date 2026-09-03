import { DateRange, DateRangeWithTime } from '../../../../../DateRangePicker/DateRangePicker.types';
export type Props = {
    defaultRange?: DateRange;
    onApply?: (range?: DateRangeWithTime) => void;
};
