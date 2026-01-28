import { forwardRef } from 'react';

import { IconProps } from './types';

export const XIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <path
        d="M27 14.41L25.59 13L20 18.59L14.41 13L13 14.41L18.59 20L13 25.59L14.41 27L20 21.41L25.59 27L27 25.59L21.41 20L27 14.41Z"
        fill={color}
      />
    </svg>
  ),
);

XIcon.displayName = 'KonstructXIcon';

export default XIcon;
