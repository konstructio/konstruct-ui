import { forwardRef } from 'react';

import { IconProps } from './types';

export const StartIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12.331 5.7925L15.553 9.08333H4.6V10.9167H15.553L12.322 14.2075L13.6 15.5L19 10L13.6 4.5L12.331 5.7925ZM1 4.5V15.5H2.8V4.5H1Z"
        fill={color}
      />
    </svg>
  ),
);

StartIcon.displayName = 'KonstructStartIcon';

export default StartIcon;
