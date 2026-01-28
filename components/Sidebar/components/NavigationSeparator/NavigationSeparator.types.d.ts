import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from '../../../../../node_modules/react';
import { navigationSeparatorVariant } from './NavigationSeparator.variants';
export interface NavigationSeparatorProps extends Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'style'>, VariantProps<typeof navigationSeparatorVariant> {
}
