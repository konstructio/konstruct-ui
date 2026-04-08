import { forwardRef } from 'react';

import { IconProps } from './types';

export const ActivityIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M3.3335 10H3.34183M3.3335 5H3.34183M3.3335 15H3.34183M6.66683 15H8.3335M6.66683 10H8.3335M6.66683 5H8.3335M11.6668 5H16.6668M11.6668 10H16.6668M11.6668 15H16.6668"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
);

ActivityIcon.displayName = 'KonstructActivityIcon';

export default ActivityIcon;
