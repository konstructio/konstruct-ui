import { forwardRef } from 'react';

import { IconProps } from './types';

export const ArrowRightIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.15833 13.825L10.975 10L7.15833 6.175L8.33333 5L13.3333 10L8.33333 15L7.15833 13.825Z"
        fill={color}
      />
    </svg>
  ),
);

ArrowRightIcon.displayName = 'KonstructArrowRightIcon';

export default ArrowRightIcon;
