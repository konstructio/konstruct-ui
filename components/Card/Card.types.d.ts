import { HTMLAttributes, PropsWithChildren } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { cardVariants } from './Card.variants';
export interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants>, PropsWithChildren {
    isActive?: boolean;
    canHover?: boolean;
}
