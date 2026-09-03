import { PropsWithChildren } from '../../../../../../../node_modules/react';
import { DateRange, DateRangePresetOption, DateRangeWithTime } from '../../../../../DateRangePicker/DateRangePicker.types';
import { Props as CustomDateRangeFilterDropdownProps } from '../../CustomDateRangeFilterDropdown.types';
type Config = Required<Pick<CustomDateRangeFilterDropdownProps, 'animationDuration' | 'appliedRangeDisplay' | 'dateDisplayFormat' | 'label' | 'labelApply' | 'labelEndDate' | 'labelRangeSeparator' | 'labelReset' | 'labelStartDate' | 'navigationMode' | 'numberOfMonths' | 'position' | 'requiredDates' | 'revealCalendarOnCustom' | 'showOutsideDays' | 'showPresets' | 'showTime' | 'timeFormat'>> & Pick<CustomDateRangeFilterDropdownProps, 'labelTimePeriod' | 'maxDate' | 'minDate'>;
export type State = Config & {
    appliedRangeEnds?: {
        from: string;
        to?: string;
    };
    appliedRangeLabel?: string;
    canApply: boolean;
    hasPendingSelection: boolean;
    isCollapsed: boolean;
    isOpen: boolean;
    presets: DateRangePresetOption[];
    resetKey: number;
    selectedPreset: string | null;
    selectedRange?: DateRange;
    showsCalendar: boolean;
    onApply: () => void;
    onClear: () => void;
    onOpenChange: (open: boolean) => void;
    onPresetChange: (preset: string | null, range: DateRange) => void;
    onRangeChange: (range: DateRangeWithTime) => void;
    onReset: () => void;
};
export type Props = PropsWithChildren<CustomDateRangeFilterDropdownProps>;
export {};
