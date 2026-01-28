import { forwardRef } from 'react';

import { IconProps } from './types';

export const CheckIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.50001 13.475L4.02501 9.99999L2.84167 11.175L7.50001 15.8333L17.5 5.83333L16.325 4.65833L7.50001 13.475Z"
        fill={color}
      />
    </svg>
  ),
);

CheckIcon.displayName = 'KonstructCheckIcon';

export default CheckIcon;
