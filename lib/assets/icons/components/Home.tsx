import { forwardRef } from 'react';

import { IconProps } from './types';

export const HomeIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9.99999 4.74167L14.1667 8.49167V15H12.5V10H7.49999V15H5.83332V8.49167L9.99999 4.74167ZM9.99999 2.5L1.66666 10H4.16666V16.6667H9.16666V11.6667H10.8333V16.6667H15.8333V10H18.3333L9.99999 2.5Z"
        fill={color}
      />
    </svg>
  ),
);

HomeIcon.displayName = 'KonstructHomeIcon';

export default HomeIcon;
