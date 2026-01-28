import { forwardRef } from 'react';

import { IconProps } from './types';

export const DownloadIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4 18C3.45 18 2.97933 17.8043 2.588 17.413C2.196 17.021 2 16.55 2 16V13H4V16H16V13H18V16C18 16.55 17.8043 17.021 17.413 17.413C17.021 17.8043 16.55 18 16 18H4ZM10 14L5 9L6.4 7.55L9 10.15V2H11V10.15L13.6 7.55L15 9L10 14Z"
        fill={color}
      />
    </svg>
  ),
);

DownloadIcon.displayName = 'KonstructDownloadIcon';

export default DownloadIcon;
