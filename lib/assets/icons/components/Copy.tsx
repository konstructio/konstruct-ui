import { forwardRef } from 'react';

import { IconProps } from './types';

export const CopyIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M13.3158 2H4.47368C3.66316 2 3 2.65455 3 3.45455V13.6364H4.47368V3.45455H13.3158V2ZM15.5263 4.90909H7.42105C6.61053 4.90909 5.94737 5.56364 5.94737 6.36364V16.5455C5.94737 17.3455 6.61053 18 7.42105 18H15.5263C16.3368 18 17 17.3455 17 16.5455V6.36364C17 5.56364 16.3368 4.90909 15.5263 4.90909ZM15.5263 16.5455H7.42105V6.36364H15.5263V16.5455Z"
        fill={color}
      />
    </svg>
  ),
);

CopyIcon.displayName = 'KonstructCopyIcon';

export default CopyIcon;
