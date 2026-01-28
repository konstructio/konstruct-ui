import { forwardRef } from 'react';

import { IconProps } from './types';

export const ArrowDownIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M6.175 7.15833L10 10.975L13.825 7.15833L15 8.33333L10 13.3333L5 8.33333L6.175 7.15833Z"
        fill={color}
      />
    </svg>
  ),
);

ArrowDownIcon.displayName = 'KonstructArrowDownIcon';

export default ArrowDownIcon;
