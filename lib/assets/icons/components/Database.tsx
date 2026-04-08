import { forwardRef } from 'react';

import { IconProps } from './types';

export const DatabaseIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4.16666 10V15C4.16666 15 4.16666 17.5 9.99999 17.5C15.8333 17.5 15.8333 15 15.8333 15V10"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M4.16666 5V10C4.16666 10 4.16666 12.5 9.99999 12.5C15.8333 12.5 15.8333 10 15.8333 10V5"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M9.99999 2.5C15.8333 2.5 15.8333 5 15.8333 5C15.8333 5 15.8333 7.5 9.99999 7.5C4.16666 7.5 4.16666 5 4.16666 5C4.16666 5 4.16666 2.5 9.99999 2.5Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  ),
);

DatabaseIcon.displayName = 'KonstructDatabaseIcon';

export default DatabaseIcon;
