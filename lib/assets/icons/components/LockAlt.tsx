import { forwardRef } from 'react';

import { IconProps } from './types';

export const LockAltIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M24 14H22V8C22 6.4087 21.3679 4.88258 20.2426 3.75736C19.1174 2.63214 17.5913 2 16 2C14.4087 2 12.8826 2.63214 11.7574 3.75736C10.6321 4.88258 10 6.4087 10 8V14H8C7.46957 14 6.96086 14.2107 6.58579 14.5858C6.21071 14.9609 6 15.4696 6 16V28C6 28.5304 6.21071 29.0391 6.58579 29.4142C6.96086 29.7893 7.46957 30 8 30H24C24.5304 30 25.0391 29.7893 25.4142 29.4142C25.7893 29.0391 26 28.5304 26 28V16C26 15.4696 25.7893 14.9609 25.4142 14.5858C25.0391 14.2107 24.5304 14 24 14ZM12 8C12 6.93913 12.4214 5.92172 13.1716 5.17157C13.9217 4.42143 14.9391 4 16 4C17.0609 4 18.0783 4.42143 18.8284 5.17157C19.5786 5.92172 20 6.93913 20 8V14H12V8ZM24 28H8V16H24V28Z"
        fill={color}
      />
    </svg>
  ),
);

LockAltIcon.displayName = 'KonstructLockAltIcon';

export default LockAltIcon;
