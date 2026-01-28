import { VariantProps } from 'class-variance-authority';
import { HtmlHTMLAttributes, PropsWithChildren } from '../../../../../node_modules/react';
import { navigationGroupsVariants } from './NavigationGroup.variants';
export interface NavigationGroupProps extends PropsWithChildren, VariantProps<typeof navigationGroupsVariants>, Pick<HtmlHTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
    title?: string;
    titleClassName?: string;
    isVisible?: boolean;
}
