import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

import { Theme } from '@/domain/theme';

import { loadingVariants } from './Loading.variants';

export type LoadingProps = InputHTMLAttributes<SVGSVGElement> &
  VariantProps<typeof loadingVariants> & {
    theme?: Theme;
  };
