import { forwardRef } from 'react';

import { IconProps } from './types';

export const ArchivesIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M15.9259 16.6667H4.07408V8.51853H5.55557V15.1852H14.4445V8.51853H15.9259V16.6667ZM3.33334 3.33334H16.6667V7.77779H3.33334V3.33334ZM8.14816 9.25927H11.8519C12.0593 9.25927 12.2222 9.42223 12.2222 9.62964V10.7408H7.77779V9.62964C7.77779 9.42223 7.94075 9.25927 8.14816 9.25927ZM4.81482 4.81482V6.29631H15.1852V4.81482H4.81482Z"
        fill={color}
      />
    </svg>
  ),
);

ArchivesIcon.displayName = 'KonstructArchivesIcon';

export default ArchivesIcon;
