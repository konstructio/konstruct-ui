import { SVGProps, RefAttributes, ForwardRefExoticComponent } from '../../../../node_modules/react';
export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
}
export type IconComponent = ForwardRefExoticComponent<Omit<IconProps, 'ref'> & RefAttributes<SVGSVGElement>>;
