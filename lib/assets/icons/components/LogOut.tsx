import { forwardRef } from 'react';

import { IconProps } from './types';

export const LogOutIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M3.75 18.75H11.25C11.5815 18.75 11.8995 18.6183 12.1339 18.3839C12.3683 18.1495 12.5 17.8315 12.5 17.5V15.625H11.25V17.5H3.75V2.5H11.25V4.375H12.5V2.5C12.5 2.16848 12.3683 1.85054 12.1339 1.61612C11.8995 1.3817 11.5815 1.25 11.25 1.25H3.75C3.41848 1.25 3.10054 1.3817 2.86612 1.61612C2.6317 1.85054 2.5 2.16848 2.5 2.5V17.5C2.5 17.8315 2.6317 18.1495 2.86612 18.3839C3.10054 18.6183 3.41848 18.75 3.75 18.75Z"
        fill={color}
      />
      <path
        d="M12.8663 12.8663L15.1075 10.625H6.25V9.375H15.1075L12.8663 7.13375L13.75 6.25L17.5 10L13.75 13.75L12.8663 12.8663Z"
        fill={color}
      />
    </svg>
  ),
);

LogOutIcon.displayName = 'KonstructLogOutIcon';

export default LogOutIcon;
