import { forwardRef } from 'react';

import { IconProps } from './types';

export const AddChartIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M18.3333 4.16666V5.83332H15.8333V8.33332H14.1667V5.83332H11.6667V4.16666H14.1667V1.66666H15.8333V4.16666H18.3333ZM15.8333 15.8333H4.16667V4.16666H9.16667V2.49999H4.16667C3.25 2.49999 2.5 3.24999 2.5 4.16666V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10.8333H15.8333V15.8333ZM12.5 10.8333V14.1667H14.1667V10.8333H12.5ZM9.16667 14.1667H10.8333V7.49999H9.16667V14.1667ZM7.5 14.1667V9.16666H5.83333V14.1667H7.5Z"
        fill={color}
      />
    </svg>
  ),
);

AddChartIcon.displayName = 'KonstructAddChartIcon';

export default AddChartIcon;
