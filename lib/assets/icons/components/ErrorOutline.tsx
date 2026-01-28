import { forwardRef } from 'react';

import { IconProps } from './types';

export const ErrorOutlineIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9.16666 12.5H10.8333V14.1666H9.16666V12.5ZM9.16666 5.83329H10.8333V10.8333H9.16666V5.83329ZM9.99166 1.66663C5.39166 1.66663 1.66666 5.39996 1.66666 9.99996C1.66666 14.6 5.39166 18.3333 9.99166 18.3333C14.6 18.3333 18.3333 14.6 18.3333 9.99996C18.3333 5.39996 14.6 1.66663 9.99166 1.66663ZM9.99999 16.6666C6.31666 16.6666 3.33332 13.6833 3.33332 9.99996C3.33332 6.31663 6.31666 3.33329 9.99999 3.33329C13.6833 3.33329 16.6667 6.31663 16.6667 9.99996C16.6667 13.6833 13.6833 16.6666 9.99999 16.6666Z"
        fill={color}
      />
    </svg>
  ),
);

ErrorOutlineIcon.displayName = 'KonstructErrorOutlineIcon';

export default ErrorOutlineIcon;
