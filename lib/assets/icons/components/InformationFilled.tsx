import { forwardRef } from 'react';

import { IconProps } from './types';

export const InformationFilledIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.8335 7.49948H9.16649V5.83248H10.8335M10.8335 14.1675H9.16649V9.16648H10.8335M9.99999 1.66498C8.90543 1.66498 7.82158 1.88057 6.81033 2.29944C5.79908 2.71832 4.88023 3.33227 4.10626 4.10624C2.54314 5.66936 1.66499 7.7894 1.66499 9.99998C1.66499 12.2106 2.54314 14.3306 4.10626 15.8937C4.88023 16.6677 5.79908 17.2816 6.81033 17.7005C7.82158 18.1194 8.90543 18.335 9.99999 18.335C12.2106 18.335 14.3306 17.4568 15.8937 15.8937C17.4568 14.3306 18.335 12.2106 18.335 9.99998C18.335 8.90541 18.1194 7.82156 17.7005 6.81031C17.2817 5.79906 16.6677 4.88022 15.8937 4.10624C15.1198 3.33227 14.2009 2.71832 13.1897 2.29944C12.1784 1.88057 11.0946 1.66498 9.99999 1.66498Z"
        fill={color}
      />
    </svg>
  ),
);

InformationFilledIcon.displayName = 'KonstructInformationFilledIcon';

export default InformationFilledIcon;
