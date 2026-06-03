import { forwardRef } from 'react';

import { IconProps } from './types';

export const CheckAltIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M3.33325 9.66663C3.33325 9.66663 4.33325 9.66663 5.66659 12C5.66659 12 9.37259 5.88863 12.6666 4.66663"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
);

CheckAltIcon.displayName = 'KonstructCheckAltIcon';

export default CheckAltIcon;
