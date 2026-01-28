import { VariantProps } from 'class-variance-authority';
import { ComponentRef, HTMLAttributes, ReactNode, Ref } from '../../../node_modules/react';
import { Theme } from '../../domain/theme';
import { typographyVariants } from './Typography.variants';
/** Valid HTML heading tags */
export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
/**
 * Props for the Typography component.
 * A flexible text component with semantic variants and theming.
 *
 * @example
 * ```tsx
 * <Typography variant="h1">Page Title</Typography>
 * <Typography variant="body1">Body text content</Typography>
 * <Typography variant="h2" component="p">Styled as h2 but renders as p</Typography>
 * ```
 */
export interface TypographyProps extends HTMLAttributes<ComponentRef<HeadingTag | 'p' | 'span'>>, VariantProps<typeof typographyVariants> {
    /** Ref to the underlying DOM element */
    ref?: Ref<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>;
    /** Text content to display */
    children: ReactNode;
    /** Override the rendered HTML element */
    component?: HeadingTag | 'p' | 'span' | 'label';
    /** Theme override for this component */
    theme?: Theme;
    /** For use with label component to associate with form input */
    htmlFor?: string;
}
