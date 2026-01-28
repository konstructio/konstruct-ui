import { forwardRef } from 'react';

import { IconProps } from './types';

export const AppRepoIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.91668 7.08332L9.16668 8.33332L6.66668 10.8333L9.16668 13.3333L7.91668 14.5833L4.16668 10.8333L7.91668 7.08332ZM12.0833 14.5833L10.8333 13.3333L13.3333 10.8333L10.8333 8.33332L12.0833 7.08332L15.8333 10.8333L12.0833 14.5833ZM17.5 1.66666H2.50001C2.05798 1.66666 1.63406 1.84225 1.3215 2.15481C1.00894 2.46737 0.833344 2.8913 0.833344 3.33332V16.6667C0.833344 17.1087 1.00894 17.5326 1.3215 17.8452C1.63406 18.1577 2.05798 18.3333 2.50001 18.3333H17.5C17.942 18.3333 18.366 18.1577 18.6785 17.8452C18.9911 17.5326 19.1667 17.1087 19.1667 16.6667V3.33332C19.1667 2.8913 18.9911 2.46737 18.6785 2.15481C18.366 1.84225 17.942 1.66666 17.5 1.66666ZM17.5 16.6667H2.50001V4.99999H17.5V16.6667Z"
        fill={color}
      />
    </svg>
  ),
);

AppRepoIcon.displayName = 'KonstructAppRepoIcon';

export default AppRepoIcon;
