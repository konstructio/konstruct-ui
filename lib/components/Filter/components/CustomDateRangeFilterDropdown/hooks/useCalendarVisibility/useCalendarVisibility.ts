import { useCallback, useState } from 'react';

import { DateRange } from '@/components/DateRangePicker/DateRangePicker.types';

import { Props } from './useCalendarVisibility.types';

export const useCalendarVisibility = ({ defaultRange }: Props) => {
  const [showsCalendar, setShowsCalendar] = useState(Boolean(defaultRange));

  const revealCalendarFor = useCallback((range: DateRange) => {
    const opensCalendar = !range.from && !range.to;
    setShowsCalendar(opensCalendar);

    return opensCalendar;
  }, []);

  const hideCalendar = useCallback(() => {
    setShowsCalendar(false);
  }, []);

  return { showsCalendar, revealCalendarFor, hideCalendar };
};
