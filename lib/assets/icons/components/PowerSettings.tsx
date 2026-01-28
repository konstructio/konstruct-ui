import { forwardRef } from 'react';

import { IconProps } from './types';

export const PowerSettingsIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.8333 2.5H9.16667V10.8333H10.8333V2.5ZM14.8583 4.30833L13.675 5.49167C14.9917 6.55 15.8333 8.175 15.8333 10C15.8333 13.225 13.225 15.8333 10 15.8333C6.775 15.8333 4.16667 13.225 4.16667 10C4.16667 8.175 5.00833 6.55 6.31667 5.48333L5.14167 4.30833C3.525 5.68333 2.5 7.71667 2.5 10C2.5 14.1417 5.85833 17.5 10 17.5C14.1417 17.5 17.5 14.1417 17.5 10C17.5 7.71667 16.475 5.68333 14.8583 4.30833Z"
        fill={color}
      />
    </svg>
  ),
);

PowerSettingsIcon.displayName = 'KonstructPowerSettingsIcon';

export default PowerSettingsIcon;
