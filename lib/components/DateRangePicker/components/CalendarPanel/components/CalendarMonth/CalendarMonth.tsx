import { FC, lazy, Suspense } from 'react';

import { cn } from '@/utils';

import { calendarMonthTitleVariants } from '../../CalendarPanel.variants';
import {
  SINGLE_MONTH_WIDTH,
  WEEKDAY_HEADER_HEIGHT,
  WEEK_ROW_HEIGHT,
  getMonthName,
} from '../../constants';
import { getWeeksInMonth } from '../../utils';

import { Props } from './CalendarMonth.types';

const CalendarMonthContent = lazy(() =>
  import('./components/CalendarMonthContent/CalendarMonthContent').then(
    (module) => ({ default: module.CalendarMonthContent }),
  ),
);

const getMonthLabel = (date: Date) =>
  `${getMonthName(date.getMonth())} ${date.getFullYear()}`;

export const CalendarMonth: FC<Props> = (props) => {
  const { month, classNames } = props;

  return (
    <div style={{ width: SINGLE_MONTH_WIDTH }}>
      <div className="flex items-center justify-center mb-8 h-6">
        <span
          className={cn(
            calendarMonthTitleVariants(),
            'flex-1 text-center',
            classNames?.monthTitle,
          )}
        >
          {getMonthLabel(month)}
        </span>
      </div>

      <Suspense
        fallback={
          <div
            aria-busy="true"
            style={{
              minHeight:
                WEEKDAY_HEADER_HEIGHT +
                getWeeksInMonth(month) * WEEK_ROW_HEIGHT,
            }}
          />
        }
      >
        <CalendarMonthContent {...props} />
      </Suspense>
    </div>
  );
};

CalendarMonth.displayName = 'CalendarMonth';
