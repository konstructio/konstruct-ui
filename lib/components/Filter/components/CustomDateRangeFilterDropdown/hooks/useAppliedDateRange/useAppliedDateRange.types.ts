import { DateRangeWithTime } from '@/components/DateRangePicker/DateRangePicker.types';

export type Props = {
  onApply?: (range?: DateRangeWithTime) => void;
};
