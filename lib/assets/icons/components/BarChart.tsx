import { forwardRef } from 'react';

import { IconProps } from './types';

export const BarChartIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M6.66668 7.5H3.33334V16.6667H6.66668V7.5Z" fill={color} />
      <path
        d="M16.6667 10.8333H13.3333V16.6666H16.6667V10.8333Z"
        fill={color}
      />
      <path
        d="M11.6667 3.33331H8.33334V16.6666H11.6667V3.33331Z"
        fill={color}
      />
    </svg>
  ),
);

BarChartIcon.displayName = 'KonstructBarChartIcon';

export default BarChartIcon;
