import { forwardRef } from 'react';

import { IconProps } from './types';

export const LoadBalancerAltIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M12.5 8H8.5V5H7.5V8H3.5C3.23478 8 2.98043 8.10536 2.79289 8.29289C2.60536 8.48043 2.5 8.73478 2.5 9V12H3.5V9H7.5V12H8.5V9H12.5V12H13.5V9C13.5 8.73478 13.3946 8.48043 13.2071 8.29289C13.0196 8.10536 12.7652 8 12.5 8ZM2 13H4V15H2V13ZM7 13H9V15H7V13ZM12 13H14V15H12V13ZM5.5 2.5H10.5V3.5H5.5V2.5Z"
        fill={color}
      />
    </svg>
  ),
);

LoadBalancerAltIcon.displayName = 'KonstructLoadBalancerAltIcon';

export default LoadBalancerAltIcon;
