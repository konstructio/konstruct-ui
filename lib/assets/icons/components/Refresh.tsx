import { forwardRef } from 'react';

import { IconProps } from './types';

export const RefreshIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M15.65 4.35C14.2 2.9 12.21 2 10 2C7.8783 2 5.84347 2.84285 4.34318 4.34315C2.84289 5.84344 2.00003 7.87827 2.00003 10C2.00003 12.1217 2.84289 14.1566 4.34318 15.6569C5.84347 17.1571 7.8783 18 10 18C13.73 18 16.84 15.45 17.73 12H15.65C14.83 14.33 12.61 16 10 16C8.40873 16 6.88261 15.3679 5.75739 14.2426C4.63217 13.1174 4.00003 11.5913 4.00003 10C4.00003 8.4087 4.63217 6.88258 5.75739 5.75736C6.88261 4.63214 8.40873 4 10 4C11.66 4 13.14 4.69 14.22 5.78L11 9H18V2L15.65 4.35Z"
        fill={color}
      />
    </svg>
  ),
);

RefreshIcon.displayName = 'KonstructRefreshIcon';

export default RefreshIcon;
