import { forwardRef } from 'react';

import { IconProps } from './types';

export const CalendarMonthIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M15.8333 3.33335H15V1.66669H13.3333V3.33335H6.66667V1.66669H5V3.33335H4.16667C3.24167 3.33335 2.50833 4.08335 2.50833 5.00002L2.5 16.6667C2.5 17.5834 3.24167 18.3334 4.16667 18.3334H15.8333C16.75 18.3334 17.5 17.5834 17.5 16.6667V5.00002C17.5 4.08335 16.75 3.33335 15.8333 3.33335ZM15.8333 16.6667H4.16667V8.33335H15.8333V16.6667ZM15.8333 6.66669H4.16667V5.00002H15.8333V6.66669ZM7.5 11.6667H5.83333V10H7.5V11.6667ZM10.8333 11.6667H9.16667V10H10.8333V11.6667ZM14.1667 11.6667H12.5V10H14.1667V11.6667ZM7.5 15H5.83333V13.3334H7.5V15ZM10.8333 15H9.16667V13.3334H10.8333V15ZM14.1667 15H12.5V13.3334H14.1667V15Z"
        fill={color}
      />
    </svg>
  ),
);

CalendarMonthIcon.displayName = 'KonstructCalendarMonthIcon';

export default CalendarMonthIcon;
