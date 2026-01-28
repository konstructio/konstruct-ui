import { forwardRef } from 'react';

import { IconProps } from './types';

export const ClustersIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M13.8333 17.1666C15.214 17.1666 16.3333 16.0473 16.3333 14.6666C16.3333 13.2859 15.214 12.1666 13.8333 12.1666C12.4526 12.1666 11.3333 13.2859 11.3333 14.6666C11.3333 16.0473 12.4526 17.1666 13.8333 17.1666Z"
        fill={color}
      />
      <path
        d="M9.16666 7.5C10.5474 7.5 11.6667 6.38071 11.6667 5C11.6667 3.61929 10.5474 2.5 9.16666 2.5C7.78594 2.5 6.66666 3.61929 6.66666 5C6.66666 6.38071 7.78594 7.5 9.16666 7.5Z"
        fill={color}
      />
      <path
        d="M5.83334 14.1666C7.21406 14.1666 8.33334 13.0473 8.33334 11.6666C8.33334 10.2859 7.21406 9.16663 5.83334 9.16663C4.45263 9.16663 3.33334 10.2859 3.33334 11.6666C3.33334 13.0473 4.45263 14.1666 5.83334 14.1666Z"
        fill={color}
      />
    </svg>
  ),
);

ClustersIcon.displayName = 'KonstructClustersIcon';

export default ClustersIcon;
