import { DateRange } from '@/components/DateRangePicker/DateRangePicker.types';

const startOfDay = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

const endOfDay = (date: Date): Date => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    23,
    59,
    59,
    999,
  );
};

export const spanWholeDays = ({ from, to }: DateRange): DateRange => ({
  from: from && startOfDay(from),
  to: to && endOfDay(to),
});
