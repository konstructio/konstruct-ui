import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from '../../../../node_modules/react';
import { Theme } from '../../../domain/theme';
import { loadingVariants } from './Loading.variants';
/**
 * Props for the Loading component.
 *
 * @example
 * ```tsx
 * <Loading />
 * <Loading className="w-8 h-8" />
 * ```
 */
export type Props = InputHTMLAttributes<SVGSVGElement> & VariantProps<typeof loadingVariants> & {
    /** Theme override for this component */
    theme?: Theme;
};
/** @deprecated Use Props instead */
export type LoadingProps = Props;
