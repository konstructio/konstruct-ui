import { forwardRef } from 'react';

import { IconProps } from './types';

export const AlertOutlineIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 2L1 21H23M12 6L19.53 19H4.47M11 10V14H13V10M11 16V18H13V16"
        fill={color}
      />
    </svg>
  ),
);

AlertOutlineIcon.displayName = 'KonstructAlertOutlineIcon';

export default AlertOutlineIcon;
