import { forwardRef } from 'react';

import { IconProps } from './types';

export const ArrowLeftIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12.8417 6.175L9.02501 10L12.8417 13.825L11.6667 15L6.66668 10L11.6667 5L12.8417 6.175Z"
        fill={color}
      />
    </svg>
  ),
);

ArrowLeftIcon.displayName = 'KonstructArrowLeftIcon';

export default ArrowLeftIcon;
