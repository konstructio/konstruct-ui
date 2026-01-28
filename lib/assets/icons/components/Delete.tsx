import { forwardRef } from 'react';

import { IconProps } from './types';

export const DeleteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4.99999 15.8333C4.99999 16.75 5.74999 17.5 6.66666 17.5H13.3333C14.25 17.5 15 16.75 15 15.8333V5.83333H4.99999V15.8333ZM6.66666 7.5H13.3333V15.8333H6.66666V7.5ZM12.9167 3.33333L12.0833 2.5H7.91666L7.08332 3.33333H4.16666V5H15.8333V3.33333H12.9167Z"
        fill={color}
      />
    </svg>
  ),
);

DeleteIcon.displayName = 'KonstructDeleteIcon';

export default DeleteIcon;
