import { forwardRef } from 'react';

import { IconProps } from './types';

export const VolumeIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M18 12.6003H2V17.8003H18V12.6003Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14.6 16.2004C14.8652 16.2004 15.1196 16.095 15.3071 15.9076C15.4947 15.72 15.6 15.4657 15.6 15.2004C15.6 14.9352 15.4947 14.6808 15.3071 14.4933C15.1196 14.3058 14.8652 14.2004 14.6 14.2004C14.3348 14.2004 14.0805 14.3058 13.8929 14.4933C13.7053 14.6808 13.6 14.9352 13.6 15.2004C13.6 15.4657 13.7053 15.72 13.8929 15.9076C14.0805 16.095 14.3348 16.2004 14.6 16.2004Z"
        fill={color}
      />
      <path
        d="M2 12.6004L4.0152 3H16.008L18 12.6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.00242 7.41089C7.14522 7.41089 6.40002 8.00529 6.40002 8.80569C6.40002 9.80049 7.23802 10.2005 8.27882 10.2005H8.79082"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0028 7.41089C12.8416 7.41089 13.6 7.80009 13.6 8.80569C13.6 9.80049 12.756 10.2005 11.7152 10.2005H11.1952"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0028 7.41079C12.0028 6.21719 11.2092 5.40039 10 5.40039C8.79081 5.40039 8.00241 6.19759 8.00241 7.41079"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.39999 10.2004H11.6" stroke={color} strokeWidth="1.5" />
    </svg>
  ),
);

VolumeIcon.displayName = 'KonstructVolumeIcon';

export default VolumeIcon;
