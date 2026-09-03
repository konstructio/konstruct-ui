import {
  DateRange,
  DateRangeWithTime,
} from '@/components/DateRangePicker/DateRangePicker.types';

export type Props = {
  defaultRange?: DateRange;
  onApply?: (range?: DateRangeWithTime) => void;
};
