import { forwardRef } from 'react';

import { IconProps } from './types';

export const KonstructIcon = forwardRef<SVGSVGElement, IconProps>(
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
      <g transform="translate(1.5, 1.5)">
        <path
          d="M5.55125 0L0 5.55667V11.1516L5.51306 16.67H11.1407L16.6538 11.1516V5.55667L11.1025 0H5.55125ZM8.32688 14.6327L2.04625 8.34592L8.32688 2.05917L14.6075 8.34592L8.32688 14.6327Z"
          fill={color}
        />
      </g>
    </svg>
  ),
);

KonstructIcon.displayName = 'KonstructKonstructIcon';

export default KonstructIcon;
