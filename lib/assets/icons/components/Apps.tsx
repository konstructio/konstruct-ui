import { forwardRef } from 'react';

import { IconProps } from './types';

export const AppsIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.5 9.375V2.5H9.375V9.375H2.5ZM2.5 17.5V10.625H9.375V17.5H2.5ZM10.625 9.375V2.5H17.5V9.375H10.625ZM10.625 17.5V10.625H17.5V17.5H10.625ZM3.75 8.125H8.125V3.75H3.75V8.125ZM11.875 8.125H16.25V3.75H11.875V8.125ZM11.875 16.25H16.25V11.875H11.875V16.25ZM3.75 16.25H8.125V11.875H3.75V16.25Z"
        fill={color}
      />
    </svg>
  ),
);

AppsIcon.displayName = 'KonstructAppsIcon';

export default AppsIcon;
