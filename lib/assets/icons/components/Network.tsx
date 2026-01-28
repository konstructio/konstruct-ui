import { forwardRef } from 'react';

import { IconProps } from './types';

export const NetworkIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M8.4 2C7.512 2 6.8 2.712 6.8 3.6V6C6.8 6.888 7.512 7.6 8.4 7.6H9.2V9.2H2V10.8H5.2V12.4H4.4C3.512 12.4 2.8 13.112 2.8 14V16.4C2.8 17.288 3.512 18 4.4 18H7.6C8.488 18 9.2 17.288 9.2 16.4V14C9.2 13.112 8.488 12.4 7.6 12.4H6.8V10.8H13.2V12.4H12.4C11.512 12.4 10.8 13.112 10.8 14V16.4C10.8 17.288 11.512 18 12.4 18H15.6C16.488 18 17.2 17.288 17.2 16.4V14C17.2 13.112 16.488 12.4 15.6 12.4H14.8V10.8H18V9.2H10.8V7.6H11.6C12.488 7.6 13.2 6.888 13.2 6V3.6C13.2 2.712 12.488 2 11.6 2H8.4ZM8.4 3.6H11.6V6H8.4V3.6ZM4.4 14H7.6V16.4H4.4V14ZM12.4 14H15.6V16.4H12.4V14Z"
        fill={color}
      />
    </svg>
  ),
);

NetworkIcon.displayName = 'KonstructNetworkIcon';

export default NetworkIcon;
