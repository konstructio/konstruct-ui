import { forwardRef } from 'react';

import { IconProps } from './types';

export const ReservedIpIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M15.8333 4.16667V15.8333H4.16667V4.16667H15.8333ZM15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM7.5 5.83333H5.83333V14.1667H7.5V5.83333ZM12.5 5.83333H9.16667V14.1667H10.8333V10.8333H12.5C13.4167 10.8333 14.1667 10.0833 14.1667 9.16667V7.5C14.1667 6.58333 13.4167 5.83333 12.5 5.83333ZM12.5 9.16667H10.8333V7.5H12.5V9.16667Z"
        fill={color}
      />
    </svg>
  ),
);

ReservedIpIcon.displayName = 'KonstructReservedIpIcon';

export default ReservedIpIcon;
