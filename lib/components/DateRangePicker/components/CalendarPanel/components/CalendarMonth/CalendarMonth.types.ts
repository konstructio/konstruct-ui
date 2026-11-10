import { DateRange, Matcher } from 'react-day-picker';

import { DayPickerClassNames } from '../../CalendarPanel.types';

export type Props = {
  month: Date;
  /** Width in pixels; a fluid calendar passes the one it measured */
  monthWidth?: number;
  range: { from?: Date; to?: Date };
  onRangeSelect: (range: DateRange | undefined) => void;
  disabled?: boolean;
  disabledMatcher?: Matcher | Matcher[];
  showOutsideDays?: boolean;
  classNames?: {
    monthTitle?: string;
    dayPicker?: DayPickerClassNames;
  };
};
