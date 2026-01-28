import { forwardRef } from 'react';

import { IconProps } from './types';

export const ErrorIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9.99999 1.66663C5.39999 1.66663 1.66666 5.39996 1.66666 9.99996C1.66666 14.6 5.39999 18.3333 9.99999 18.3333C14.6 18.3333 18.3333 14.6 18.3333 9.99996C18.3333 5.39996 14.6 1.66663 9.99999 1.66663ZM10.8333 14.1666H9.16666V12.5H10.8333V14.1666ZM10.8333 10.8333H9.16666V5.83329H10.8333V10.8333Z"
        fill={color}
      />
    </svg>
  ),
);

ErrorIcon.displayName = 'KonstructErrorIcon';

export default ErrorIcon;
