import { forwardRef } from 'react';

import { IconProps } from './types';

export const LoadBalancerIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M15.625 10H10.625V6.25H9.375V10H4.375C4.04348 10 3.72554 10.1317 3.49112 10.3661C3.2567 10.6005 3.125 10.9185 3.125 11.25V15H4.375V11.25H9.375V15H10.625V11.25H15.625V15H16.875V11.25C16.875 10.9185 16.7433 10.6005 16.5089 10.3661C16.2745 10.1317 15.9565 10 15.625 10ZM2.5 16.25H5V18.75H2.5V16.25ZM8.75 16.25H11.25V18.75H8.75V16.25ZM15 16.25H17.5V18.75H15V16.25ZM6.875 3.125H13.125V4.375H6.875V3.125Z"
        fill={color}
      />
    </svg>
  ),
);

LoadBalancerIcon.displayName = 'KonstructLoadBalancerIcon';

export default LoadBalancerIcon;
