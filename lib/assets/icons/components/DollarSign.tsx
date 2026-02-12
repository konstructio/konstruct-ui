import { forwardRef } from 'react';

import { IconProps } from './types';

export const DollarSignIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 10 18"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.57143 9.42857V13.7143C7.07957 13.5789 7.71429 12.7341 7.71429 11.6186C7.71429 10.5441 7.22057 9.90857 5.57143 9.42857ZM4.28571 7.28571V3.42857C2.883 3.60643 2.14286 4.42714 2.14286 5.32714C2.14286 6.22714 2.72743 6.89014 4.28571 7.28571ZM5.50286 7.60157L5.96229 7.72029C8.47886 8.32414 9.85714 9.393 9.85714 11.5011C9.85714 13.926 7.94314 15.3017 5.50286 15.48V17.1429H4.42157V15.48C1.99071 15.2919 0.0672857 13.8767 0 11.5011H1.98086C2.15314 12.6591 2.88086 13.5103 4.42157 13.6783V9.36386L4.029 9.26486C1.59814 8.68071 0.287143 7.55229 0.287143 5.54314C0.287143 3.32614 2.01 1.86129 4.42157 1.67314V0H5.50286V1.67271C7.89514 1.87071 9.62743 3.35529 9.70414 5.60229H7.71343C7.58914 4.35514 6.72771 3.63257 5.50286 3.474V7.60157Z"
        fill={color}
      />
    </svg>
  ),
);

DollarSignIcon.displayName = 'KonstructDollarSignIcon';

export default DollarSignIcon;
