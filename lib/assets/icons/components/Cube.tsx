import { forwardRef } from 'react';

import { IconProps } from './types';

export const CubeIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M17.5 13.75C17.5 14.0666 17.325 14.3416 17.0583 14.4833L10.475 18.1833C10.3417 18.2833 10.175 18.3333 10 18.3333C9.825 18.3333 9.65833 18.2833 9.525 18.1833L2.94167 14.4833C2.675 14.3416 2.5 14.0666 2.5 13.75V6.24996C2.5 5.93329 2.675 5.65829 2.94167 5.51663L9.525 1.81663C9.65833 1.71663 9.825 1.66663 10 1.66663C10.175 1.66663 10.3417 1.71663 10.475 1.81663L17.0583 5.51663C17.325 5.65829 17.5 5.93329 17.5 6.24996V13.75ZM10 3.45829L5.03333 6.24996L10 9.04163L14.9667 6.24996L10 3.45829ZM4.16667 13.2583L9.16667 16.075V10.4833L4.16667 7.67496V13.2583ZM15.8333 13.2583V7.67496L10.8333 10.4833V16.075L15.8333 13.2583Z"
        fill={color}
      />
    </svg>
  ),
);

CubeIcon.displayName = 'KonstructCubeIcon';

export default CubeIcon;
