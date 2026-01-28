import { forwardRef } from 'react';

import { IconProps } from './types';

export const PlusIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M15.8333 10.8334H10.8333V15.8334H9.16666V10.8334H4.16666V9.16675H9.16666V4.16675H10.8333V9.16675H15.8333V10.8334Z"
        fill={color}
      />
    </svg>
  ),
);

PlusIcon.displayName = 'KonstructPlusIcon';

export default PlusIcon;
