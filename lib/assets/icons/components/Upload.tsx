import { forwardRef } from 'react';

import { IconProps } from './types';

export const UploadIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4 18C3.45 18 2.97933 17.8043 2.588 17.413C2.196 17.021 2 16.55 2 16V13H4V16H16V13H18V16C18 16.55 17.8043 17.021 17.413 17.413C17.021 17.8043 16.55 18 16 18H4ZM9 14V3.85L6.4 6.45L5 5L10 0L15 5L13.6 6.45L11 3.85V14H9Z"
        fill={color}
      />
    </svg>
  ),
);

UploadIcon.displayName = 'KonstructUploadIcon';

export default UploadIcon;
