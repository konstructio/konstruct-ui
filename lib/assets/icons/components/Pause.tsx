import { forwardRef } from 'react';

import { IconProps } from './types';

export const PauseIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 7 9"
      fill="none"
      {...props}
    >
      <path
        d="M4.66667 8.16667H7V0H4.66667M0 8.16667H2.33333V0H0V8.16667Z"
        fill={color}
      />
    </svg>
  ),
);

PauseIcon.displayName = 'KonstructPauseIcon';

export default PauseIcon;
