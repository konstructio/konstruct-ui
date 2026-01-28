import { forwardRef } from 'react';

import { IconProps } from './types';

export const ArrowUpIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M6.175 12.8417L10 9.02502L13.825 12.8417L15 11.6667L10 6.66669L5 11.6667L6.175 12.8417Z"
        fill={color}
      />
    </svg>
  ),
);

ArrowUpIcon.displayName = 'KonstructArrowUpIcon';

export default ArrowUpIcon;
