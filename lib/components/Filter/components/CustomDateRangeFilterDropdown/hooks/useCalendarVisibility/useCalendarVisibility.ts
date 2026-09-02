import { useCallback, useState } from 'react';

import { DateRange } from '@/components/DateRangePicker/DateRangePicker.types';

import { Props } from './useCalendarVisibility.types';

export const useCalendarVisibility = ({ defaultRange }: Props) => {
  const [showsCalendar, setShowsCalendar] = useState(Boolean(defaultRange));
  const [isCollapsed, setIsCollapsed] = useState(false);

  const revealCalendarFor = useCallback((range: DateRange) => {
    const opensCalendar = !range.from && !range.to;
    setShowsCalendar(opensCalendar);
    setIsCollapsed(false);

    return opensCalendar;
  }, []);

  const hideCalendar = useCallback(() => {
    setShowsCalendar(false);
    setIsCollapsed(false);
  }, []);

  const collapseCalendar = useCallback(() => {
    setShowsCalendar(false);
    setIsCollapsed(true);
  }, []);

  return {
    isCollapsed,
    showsCalendar,
    collapseCalendar,
    hideCalendar,
    revealCalendarFor,
  };
};
