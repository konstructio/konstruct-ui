import { forwardRef } from 'react';

import { IconProps } from './types';

export const AllSetCheckIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 82 82"
      fill="none"
      {...props}
    >
      <path
        d="M80.8425 41C80.8425 52.1811 76.2756 62.2598 68.9528 69.5039C61.7874 76.6693 51.8661 81 40.9213 81C30.0551 81 20.1339 76.5905 12.8898 69.5039C5.56693 62.2598 1 52.1811 1 41C1 18.874 18.874 1 40.9213 1C62.9685 1 80.8425 18.9528 80.8425 41Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M38.1994 46.3064L55.7247 28.9531L59.6617 32.8901L38.2694 53.697L38.2514 53.6789L38.1813 53.749L27.2129 42.7806L30.9432 39.0502L38.1994 46.3064Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  ),
);

AllSetCheckIcon.displayName = 'KonstructAllSetCheckIcon';

export default AllSetCheckIcon;
