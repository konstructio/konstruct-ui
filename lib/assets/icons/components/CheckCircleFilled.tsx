import { forwardRef } from 'react';

import { IconProps } from './types';

export const CheckCircleFilledIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#check-circle-filled-clip)">
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="check-circle-filled-clip">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
);

CheckCircleFilledIcon.displayName = 'KonstructCheckCircleFilledIcon';

export default CheckCircleFilledIcon;
