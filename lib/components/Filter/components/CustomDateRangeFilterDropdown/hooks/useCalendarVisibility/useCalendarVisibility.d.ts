import { DateRange } from '../../../../../DateRangePicker/DateRangePicker.types';
import { Props } from './useCalendarVisibility.types';
export declare const useCalendarVisibility: ({ defaultRange }: Props) => {
    isCollapsed: boolean;
    showsCalendar: boolean;
    collapseCalendar: () => void;
    hideCalendar: () => void;
    restoreCalendar: (shows: boolean) => void;
    revealCalendarFor: (range: DateRange) => boolean;
};
