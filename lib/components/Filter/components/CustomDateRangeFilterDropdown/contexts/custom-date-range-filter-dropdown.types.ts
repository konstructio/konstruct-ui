import { PropsWithChildren } from 'react';

import {
  DateRange,
  DateRangeWithTime,
} from '@/components/DateRangePicker/DateRangePicker.types';

import { Props as CustomDateRangeFilterDropdownProps } from '../CustomDateRangeFilterDropdown.types';

type Config = Required<
  Pick<
    CustomDateRangeFilterDropdownProps,
    | 'animationDuration'
    | 'label'
    | 'labelApply'
    | 'labelEndDate'
    | 'labelReset'
    | 'labelStartDate'
    | 'position'
    | 'requiredDates'
    | 'revealCalendarOnCustom'
    | 'showPresets'
    | 'showTime'
    | 'timeFormat'
  >
> &
  Pick<
    CustomDateRangeFilterDropdownProps,
    'labelTimePeriod' | 'maxDate' | 'minDate' | 'presets'
  >;

export type State = Config & {
  appliedRangeLabel?: string;
  canApply: boolean;
  hasPendingSelection: boolean;
  isCollapsed: boolean;
  isOpen: boolean;
  resetKey: number;
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
