import { forwardRef } from 'react';

import { IconProps } from './types';

export const ExclamationIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <g transform="translate(9, 0) scale(2.76)">
        <path
          d="M2.00391 0L1.78125 5.87695H0.275391L0.0527344 0H2.00391ZM0 7.69922C0 7.4375 0.09375 7.2168 0.28125 7.03711C0.46875 6.85742 0.716797 6.76758 1.02539 6.76758C1.33008 6.76758 1.57422 6.85742 1.75781 7.03711C1.94531 7.2168 2.03906 7.4375 2.03906 7.69922C2.03906 7.96484 1.94531 8.1875 1.75781 8.36719C1.57422 8.54297 1.33008 8.63086 1.02539 8.63086C0.716797 8.63086 0.46875 8.54297 0.28125 8.36719C0.09375 8.1875 0 7.96484 0 7.69922Z"
          fill={color}
        />
      </g>
    </svg>
  ),
);

ExclamationIcon.displayName = 'KonstructExclamationIcon';

export default ExclamationIcon;
