import { forwardRef } from 'react';

import { IconProps } from './types';

export const ArrowBackIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M16.6667 9.16669V10.8334H6.66667L11.25 15.4167L10.0667 16.6L3.46667 10L10.0667 3.40002L11.25 4.58336L6.66667 9.16669H16.6667Z"
        fill={color}
      />
    </svg>
  ),
);

ArrowBackIcon.displayName = 'KonstructArrowBackIcon';

export default ArrowBackIcon;
