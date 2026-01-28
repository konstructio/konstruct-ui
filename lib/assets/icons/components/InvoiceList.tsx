import { forwardRef } from 'react';

import { IconProps } from './types';

export const InvoiceListIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M14.1667 5.83333V7.5H12.5V5.83333H14.1667ZM10.8333 5.83333V7.5H5.83333V5.83333H10.8333ZM10.8333 9.16667H5.83333V10.8333H10.8333V9.16667ZM12.5 9.16667V10.8333H14.1667V9.16667H12.5ZM17.5 18.3333L15 16.6667L12.5 18.3333L10 16.6667L7.5 18.3333L5 16.6667L2.5 18.3333V2.5H17.5V18.3333ZM15.8333 15.2167V4.16667H4.16667V15.2167L5 14.6667L7.5 16.3333L10 14.6667L12.5 16.3333L15 14.6667L15.8333 15.2167Z"
        fill={color}
      />
    </svg>
  ),
);

InvoiceListIcon.displayName = 'KonstructInvoiceListIcon';

export default InvoiceListIcon;
