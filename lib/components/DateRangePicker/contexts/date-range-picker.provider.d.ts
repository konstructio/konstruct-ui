import { FC, ReactNode } from '../../../../node_modules/react';
import { BlockedMonth, DateRange, DateRangePreset, TimeRange } from './date-range-picker.context';
interface DateRangePickerProviderProps {
    children: ReactNode;
    defaultRange?: DateRange;
    defaultTime?: TimeRange;
    defaultPreset?: DateRangePreset;
    timeFormat?: '12' | '24';
    showTime?: boolean;
    name?: string;
    disabled?: boolean;
    animationDuration?: number;
    blockedDays?: Date[];
    blockedMonths?: BlockedMonth[];
    minDate?: Date;
    maxDate?: Date;
    hideDisabledNavigation?: boolean;
    showOutsideDays?: boolean;
    navigationMode?: 'together' | 'independent';
    onRangeChange?: (range: DateRange & TimeRange) => void;
    onDateChange?: (range: DateRange) => void;
}
export declare const DateRangePickerProvider: FC<DateRangePickerProviderProps>;
export {};
