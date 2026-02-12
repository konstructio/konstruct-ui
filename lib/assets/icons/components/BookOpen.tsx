import { forwardRef } from 'react';

import { IconProps } from './types';

export const BookOpenIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 22 18"
      fill="none"
      {...props}
    >
      <path
        d="M10.75 4.083C10.75 2.25 9.25 0.75 7.417 0.75H0.75V12.75H7.458C10.75 12.75 10.75 16.084 10.75 16.084M10.75 4.083C10.75 2.249 12.25 0.75 14.083 0.75H20.75V12.75H14.083C10.75 12.75 10.75 16.084 10.75 16.084M10.75 4.083V16.084M12.625 17.208C12.8337 16.7759 13.1587 16.4105 13.5636 16.1529C13.9685 15.8954 14.4372 15.7558 14.917 15.75H19.75M8.875 17.208C8.67016 16.7729 8.34602 16.405 7.94028 16.1469C7.53454 15.8888 7.06387 15.7511 6.583 15.75H1.75"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
);

BookOpenIcon.displayName = 'KonstructBookOpenIcon';

export default BookOpenIcon;
