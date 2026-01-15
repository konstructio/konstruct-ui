import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

import { Theme } from '@/domain/theme';

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
export type LoadingProps = InputHTMLAttributes<SVGSVGElement> &
  VariantProps<typeof loadingVariants> & {
    /** Theme override for this component */
    theme?: Theme;
  };
