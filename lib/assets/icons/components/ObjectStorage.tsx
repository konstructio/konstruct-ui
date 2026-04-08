import { forwardRef } from 'react';

import { IconProps } from './types';

export const ObjectStorageIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M1.66666 9.16659V3.83325C1.66666 3.70064 1.71933 3.57347 1.8131 3.4797C1.90687 3.38593 2.03405 3.33325 2.16666 3.33325H7.31499C7.43416 3.33324 7.54942 3.3758 7.63999 3.45325L10.2767 5.71325C10.3672 5.7907 10.4825 5.83326 10.6017 5.83325H17.8333C17.899 5.83325 17.964 5.84618 18.0247 5.87131C18.0853 5.89644 18.1404 5.93327 18.1869 5.9797C18.2333 6.02613 18.2701 6.08125 18.2953 6.14191C18.3204 6.20257 18.3333 6.26759 18.3333 6.33325V9.16659M1.66666 9.16659V16.1666C1.66666 16.2992 1.71933 16.4264 1.8131 16.5201C1.90687 16.6139 2.03405 16.6666 2.16666 16.6666H17.8333C17.9659 16.6666 18.0931 16.6139 18.1869 16.5201C18.2806 16.4264 18.3333 16.2992 18.3333 16.1666V9.16659M1.66666 9.16659H18.3333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
);

ObjectStorageIcon.displayName = 'KonstructObjectStorageIcon';

export default ObjectStorageIcon;
