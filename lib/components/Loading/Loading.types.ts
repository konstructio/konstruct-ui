import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
import { loadingVariants } from './Loading.variants';

export interface LoadingProps
  extends InputHTMLAttributes<SVGSVGElement>,
    VariantProps<typeof loadingVariants> {}
