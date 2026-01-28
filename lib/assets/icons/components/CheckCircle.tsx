import { forwardRef } from 'react';

import { IconProps } from './types';

export const CheckCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9.99999 1.66669C5.39999 1.66669 1.66666 5.40002 1.66666 10C1.66666 14.6 5.39999 18.3334 9.99999 18.3334C14.6 18.3334 18.3333 14.6 18.3333 10C18.3333 5.40002 14.6 1.66669 9.99999 1.66669ZM9.99999 16.6667C6.32499 16.6667 3.33332 13.675 3.33332 10C3.33332 6.32502 6.32499 3.33335 9.99999 3.33335C13.675 3.33335 16.6667 6.32502 16.6667 10C16.6667 13.675 13.675 16.6667 9.99999 16.6667ZM13.825 6.31669L8.33332 11.8084L6.17499 9.65835L4.99999 10.8334L8.33332 14.1667L15 7.50002L13.825 6.31669Z"
        fill={color}
      />
    </svg>
  ),
);

CheckCircleIcon.displayName = 'KonstructCheckCircleIcon';

export default CheckCircleIcon;
