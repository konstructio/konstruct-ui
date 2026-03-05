import { forwardRef } from 'react';

import { IconProps } from './types';

export const WarningTriangleIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 22, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 22 19"
      fill="none"
      {...props}
    >
      <path
        d="M0 19H22L11 0L0 19ZM12 16H10V14H12V16ZM12 12H10V8H12V12Z"
        fill={color}
      />
    </svg>
  ),
);

WarningTriangleIcon.displayName = 'KonstructWarningTriangleIcon';

export default WarningTriangleIcon;
