import { forwardRef } from 'react';

import { IconProps } from './types';

export const InventoryIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9.5 12H11.5V14H9.5V12ZM13 12H15V14H13V12ZM9.5 8.5H11.5V10.5H9.5V8.5ZM13 8.5H15V10.5H13V8.5Z"
        fill={color}
      />
      <path
        d="M8.5 12H2V5H14V7.5H15V5C15 4.73478 14.8946 4.48043 14.7071 4.29289C14.5196 4.10536 14.2652 4 14 4H11V2C11 1.73478 10.8946 1.48043 10.7071 1.29289C10.5196 1.10536 10.2652 1 10 1H6C5.73478 1 5.48043 1.10536 5.29289 1.29289C5.10536 1.48043 5 1.73478 5 2V4H2C1.73478 4 1.48043 4.10536 1.29289 4.29289C1.10536 4.48043 1 4.73478 1 5V12C1 12.2652 1.10536 12.5196 1.29289 12.7071C1.48043 12.8946 1.73478 13 2 13H8.5V12ZM6 2H10V4H6V2Z"
        fill={color}
      />
    </svg>
  ),
);

InventoryIcon.displayName = 'KonstructInventoryIcon';

export default InventoryIcon;
