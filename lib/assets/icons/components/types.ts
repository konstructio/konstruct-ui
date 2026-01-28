import { SVGProps, RefAttributes, ForwardRefExoticComponent } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: string | number;
}

export type IconComponent = ForwardRefExoticComponent<
  Omit<IconProps, 'ref'> & RefAttributes<SVGSVGElement>
>;
