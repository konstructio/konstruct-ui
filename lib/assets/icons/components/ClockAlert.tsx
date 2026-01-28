import { forwardRef } from 'react';

import { IconProps } from './types';

export const ClockAlertIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9.16666 5.83335V10.8334L13.5 13.4167L14.1667 12.4167L10.4167 10.1667V5.83335H9.16666ZM16.6667 10V15H18.3333V10H16.6667ZM16.6667 16.6667V18.3334H18.3333V16.6667H16.6667ZM15 16.6667C13.5833 17.75 11.9167 18.3334 9.99999 18.3334C5.41666 18.3334 1.66666 14.5834 1.66666 10C1.66666 5.41669 5.41666 1.66669 9.99999 1.66669C14 1.66669 17.4167 4.50002 18.1667 8.33335H16.4167C15.6667 5.50002 13.0833 3.33335 9.99999 3.33335C6.33332 3.33335 3.33332 6.33335 3.33332 10C3.33332 13.6667 6.33332 16.6667 9.99999 16.6667C12 16.6667 13.75 15.75 15 14.4167V16.6667Z"
        fill={color}
      />
    </svg>
  ),
);

ClockAlertIcon.displayName = 'KonstructClockAlertIcon';

export default ClockAlertIcon;
