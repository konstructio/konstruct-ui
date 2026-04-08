import { forwardRef } from 'react';

import { IconProps } from './types';

export const KubernetesIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M17.5 6.12759V13.8726C17.5 13.9619 17.4762 14.0495 17.4309 14.1265C17.3856 14.2034 17.3206 14.2668 17.2425 14.3101L10.2425 18.1984C10.1683 18.2396 10.0848 18.2612 10 18.2612C9.91515 18.2612 9.8317 18.2396 9.7575 18.1984L2.7575 14.3101C2.67943 14.2668 2.61438 14.2034 2.5691 14.1265C2.52381 14.0495 2.49996 13.9619 2.5 13.8726V6.12759C2.50011 6.03846 2.52403 5.95098 2.56931 5.8742C2.61458 5.79743 2.67955 5.73415 2.7575 5.69092L9.7575 1.80176C9.8317 1.76061 9.91515 1.73901 10 1.73901C10.0848 1.73901 10.1683 1.76061 10.2425 1.80176L17.2425 5.69092C17.3204 5.73415 17.3854 5.79743 17.4307 5.8742C17.476 5.95098 17.4999 6.03846 17.5 6.12759Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.94 6.07852L9.75667 9.86519C9.83097 9.90649 9.91458 9.92816 9.99959 9.92816C10.0846 9.92816 10.1682 9.90649 10.2425 9.86519L17.0833 6.06519M10 17.5002V10.0002"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
);

KubernetesIcon.displayName = 'KonstructKubernetesIcon';

export default KubernetesIcon;
